import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import FormChild from './FormChild';
import FormChildSection from './FormChildSection';
import FormGroups from './FormGroups';
import SplitLayout from './SplitLayout';

const FormLayout: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/groups`} component={FormGroups} />
            <Route path={`${match.url}/child-element`} component={FormChild} />
            <Route path={`${match.url}/split-layout`} component={SplitLayout} />
            <Route path={`${match.url}/child-section-element`} component={FormChildSection} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/groups`} />} />
        </>
    );
};

export default FormLayout;
