import React, { Suspense } from "react";
import { Layout, Wrapper } from "./style";
import { Spinner } from "components/spinner";

interface IProps {
  children: React.ReactNode;
}

export const PagesWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Layout data-testid="layout">
      <Wrapper>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </Wrapper>
    </Layout>
  );
};
