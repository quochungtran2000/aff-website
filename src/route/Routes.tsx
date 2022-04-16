/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import routes from 'constants/routes';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {routes.map((route) => {
        return route.isPublic ? (
          <Route key={route.path} path={route.path} exact component={route.component} />
        ) : (
          <ProtectedRoute key={route.path} path={route.path} exact component={route.component} />
        );
      })}
    </Switch>
  );
};

export default Routes;
