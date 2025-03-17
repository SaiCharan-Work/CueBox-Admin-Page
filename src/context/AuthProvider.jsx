import React, { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// AuthProvider Component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // User state

  const login = (userData) => {
    console.log("Logging in:", userData);
    setUser(userData); // Set authenticated user
  };

  const logout = () => {
    console.log("Logging out");
    setUser(null); // Remove user on logout
  };

  console.log("Current user:", user); // Debug log

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use Auth
export const useAuth = () => useContext(AuthContext);
