import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

Protectedpage.propTypes = {
  children: PropTypes.any,
};

function Protectedpage({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }
  return children;
}

export default Protectedpage;
