import { NextPage } from "next";
import React from "react";
import FormLogin from "../../components/forms/FormLogin";
import Layout from "../../components/layaout/Layout";

const Login: NextPage = () => {
  return (
    <Layout description={"Login Page"} title={"Login"} sections={[]}>
      <FormLogin />
    </Layout>
  );
};

export default Login;
