import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

// hook for the alert functionality -> AlertContext
const useAlert = () => useContext(AlertContext);

export default useAlert;