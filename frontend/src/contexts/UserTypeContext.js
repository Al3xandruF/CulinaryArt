import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Creating a context for user types
const UserTypeContext = createContext();

// Custom hook to access user type from context
export const useUserType = () => useContext(UserTypeContext);

export const UserTypeProvider = ({ children }) => {
  // User type state store
  const [userType, setUserType] = useState(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `/profiles/${currentUser?.profile_id}/`
        );
        const profileData = response.data;
        const fetchedUserType = profileData.user_type;
        setUserType(fetchedUserType);
      } catch (error) {}
    };

    if (currentUser && currentUser.profile_id) {
      fetchProfileData();
    }
  }, [currentUser, currentUser?.profile_id]);
  return (
    <UserTypeContext.Provider value={userType}>
      {children}
    </UserTypeContext.Provider>
  );
};
