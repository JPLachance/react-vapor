#!/usr/bin/env bash

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
BRANCH_FOLDER_NAME=`echo "$TRAVIS_PULL_REQUEST_BRANCH" | md5sum | awk '{print $1}'`

echo "Syncing with gh-pages from branch: $TRAVIS_PULL_REQUEST_BRANCH"
git fetch origin
git pull --no-edit --quiet --strategy-option theirs "$SSH_REPO" gh-pages
git rm --quiet "$BRANCH_FOLDER_NAME" -r
git commit --quiet -m "Clean old build" --no-verify

echo "Creating live demo for branch: $TRAVIS_PULL_REQUEST_BRANCH";
cp -R packages/react-vapor/docs/dist "$BRANCH_FOLDER_NAME"

git add "$BRANCH_FOLDER_NAME"
git commit --quiet -m "Demo for branch: $TRAVIS_PULL_REQUEST_BRANCH" --no-verify

SHA=`git rev-parse --verify HEAD`

echo "Pushing live demo to gh-pages for branch: $TRAVIS_PULL_REQUEST_BRANCH"
git push -f "$SSH_REPO" "$SHA:gh-pages"
echo "Demo available at https://coveo.github.io/react-vapor/$BRANCH_FOLDER_NAME/"

BRANCH_FOLDER_NAME="$BRANCH_FOLDER_NAME" node ./create-live-demo.js
