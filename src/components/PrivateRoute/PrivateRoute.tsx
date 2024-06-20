import { Navigate } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  return <>
    {AuthStore.isAuth ? children : <Navigate to="/login" replace />}
  </>
}
