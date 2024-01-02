import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { Dashboard } from "../Dashboard/Dashboard";

export const AppRouter = () => {
  const authStatus = "not-authenticated"; // "not-authenticated" || "authenticated"

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="auth/*" element={<Login />} />
      ) : (
        <Route path="/*" element={<Dashboard />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
