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
      <main>{children}</main>
      <Footer description={description} title={title} />
    </>
  );
};

export default Layout;
