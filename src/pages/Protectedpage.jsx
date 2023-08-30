import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protectedpage({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }
  return  children ;
}

export default Protectedpage;
