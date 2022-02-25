import Loading from 'components/shared-components/Loading';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${match.url}/optional-task`}
        component={lazy(() => import(`./optional-task`))}
      />
      <Route
        path={`${match.url}/user-list`}
        component={lazy(() => import(`./user-list`))}
      />
    </Switch>
  </Suspense>
);

export default Pages;
