import React from "react";
import { Layout } from "./style";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <Layout data-testid="layout">
      <Outlet />
    </Layout>
  );
};
