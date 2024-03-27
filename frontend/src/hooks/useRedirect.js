import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // for logged in users
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        //  for not logged in users
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};