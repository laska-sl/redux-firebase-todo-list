import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import Auth from "./Auth/Auth";
import TaskList from "./TaskList";

const Container: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" replace />} />
      <Route
        path="list"
        element={
          <RequireAuth>
            <TaskList />
          </RequireAuth>
        }
      />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default Container;
