import React, { FC } from "react";
import { Props } from "../../types";
import Footer, { FooterProps } from "./Footer";

import Header, { HeaderProps } from "./Header";

const Layout: FC<Props & FooterProps & HeaderProps> = ({
  children,
  sections,
  description,
  title,
}) => {
  return (
    <>
      <Header sections={sections} title={title} />
      <main style={{ width: "100%", height: "auto" }}>{children}</main>
      <Footer description={description} title={title} />
    </>
  );
};

export default Layout;
