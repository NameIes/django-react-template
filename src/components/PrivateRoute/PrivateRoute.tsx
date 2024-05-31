import { observer } from "mobx-react-lite";
import AuthStore from "../../store";
import { Navigate } from "react-router-dom";

const PrivateRoute = observer(({ children }: { children: JSX.Element }) => {
  if (AuthStore.isAuthInProgress) {
    return <div>Auth in progress.</div>
  }
  if (AuthStore.isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
});

export default PrivateRoute;
