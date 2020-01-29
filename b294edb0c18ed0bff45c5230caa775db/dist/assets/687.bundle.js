(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1787:function(n,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport * as _ from 'underscore';\n\nexport interface PhotoProps {\n    albumId: string;\n    id: string;\n    title: string;\n    url: string;\n    thumbnailUrl: string;\n}\n\nconst IMG_SIZE = 50;\n\nconst clean = <T extends object>(object: T) => _.pick(object, _.identity);\n\nexport function usePhotosAPIMock(): [any[], number, (params?: any, overwrite?: boolean) => void] {\n    const [photos, setPhotos] = React.useState([]);\n    const [totalEntries, setTotalEntries] = React.useState(0);\n\n    function fetchPhotos(params?: any, overwrite = true) {\n        const cleanParams = clean(params);\n        const queryString = !_.isEmpty(cleanParams)\n            ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`\n            : '';\n\n        return fetch(`https://jsonplaceholder.typicode.com/photos${queryString}`)\n            .then((response) => {\n                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));\n                return response.json();\n            })\n            .then((newPhotos) => {\n                if (overwrite) {\n                    setPhotos(newPhotos);\n                } else {\n                    setPhotos([...photos, ...newPhotos]);\n                }\n            });\n    }\n\n    return [photos, totalEntries, fetchPhotos];\n}\n\nexport const PhotoItem: React.FunctionComponent<PhotoProps> = ({id, url, title, thumbnailUrl}) => {\n    return (\n        <div className=\"flex flex-center\">\n            <a href={url} target=\"__blank\" className=\"mr2\">\n                <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />\n            </a>\n            <span>{title}</span>\n        </div>\n    );\n};\n"}}]);
//# sourceMappingURL=687.bundle.js.map