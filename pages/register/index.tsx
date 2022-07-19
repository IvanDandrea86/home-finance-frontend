import { NextPage } from "next";
import React from "react";
import FormSignup from "../../components/forms/FormSignup";
import Layout from "../../components/layaout/Layout";

const Signup: NextPage = () => {
  return (
    <Layout description={"Signup Page"} title={"Signup"} sections={[]}>
      <FormSignup />
    </Layout>
  );
};

export default Signup;
