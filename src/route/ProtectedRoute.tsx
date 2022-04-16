import { Redirect, Route, RouteProps } from 'react-router';

type Props = RouteProps;

export default function ProtectedRoute(props: Props): JSX.Element {
  return localStorage.getItem('token') ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/sign-in',
      }}
    />
  );
}
