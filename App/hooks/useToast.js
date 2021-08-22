import { useContext, useEffect } from "react";
import AuthContext from "../auth/context";

const useToast = () => {
  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);

  const { setToast } = useContext(AuthContext);

  const showToast = value => {
    setToast({ ...value, visible: true });
  };

  return showToast;
};

export default useToast;
