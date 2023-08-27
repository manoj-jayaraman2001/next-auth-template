"use client";
import store from "./store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
const ReduxProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default ReduxProvider;
