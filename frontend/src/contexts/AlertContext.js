import { createContext, useState } from "react";

const initialAlertState = {
  alertMessage: "",
  alertType: "",
};

// Context for AlertPopup
const AlertPopupContext = createContext({
  ...initialAlertState,
  setAlert: () => {},
});

// Component for managing alerts
export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const setAlert = (alertMessage, alertType) => {
    setAlertMessage(alertMessage);
    setAlertType(alertType);

    // Alert timing
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3500);
  };
  // Alert message, type, setAlert function for children components
  return (
    <AlertPopupContext.Provider value={{ alertMessage, alertType, setAlert }}>
      {children}
    </AlertPopupContext.Provider>
  );
};

export default AlertPopupContext;
