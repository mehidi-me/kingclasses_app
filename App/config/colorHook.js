import { useContext } from "react";
import AuthContext from "../auth/context";

const colorMode = () => {
  const { theme } = useContext(AuthContext);
  return theme;
};

export default colorMode;
