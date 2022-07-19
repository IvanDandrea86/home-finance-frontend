import { NextPage } from "next";
import React from "react";
import FormSignup from "../../components/form-components/FormSignup";
import Layout from "../../components/layaout/Layout";

const Signup: NextPage = () => {
  return (
    <Layout description={"Signup Page"} title={"Register"} sections={[]}>
      <FormSignup />
    </Layout>
  );
};

export default Signup;
