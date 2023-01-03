import React, { Suspense } from "react";
import { Layout, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import { Spinner } from "components/spinner";

export const AppLayout: React.FC = () => {
  return (
    <Layout data-testid="layout">
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Layout>
  );
};
