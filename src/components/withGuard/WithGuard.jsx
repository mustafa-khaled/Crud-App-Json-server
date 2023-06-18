import { useEffect } from "react";
import styles from "./withGuard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WithGuard = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("login");
    }
  }, []);
  return children;
};

export default WithGuard;
