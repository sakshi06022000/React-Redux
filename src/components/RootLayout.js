import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarPanel } from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

export const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarPanel />
        {/* <h2>Navigation</h2> */}
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};
