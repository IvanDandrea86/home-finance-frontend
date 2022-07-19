import type { NextPage } from "next";

import Typography from "@mui/material/Typography";
import BouncingText from "../components/BonucingText";
import { useState } from "react";
import { indigo, deepPurple, purple } from "@mui/material/colors";

import Button from "@mui/material/Button";
import Layout from "../components/layaout/Layout";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  const [hasError, setError] = useState(false);
  return (
    <Layout
      description={"Wellcome Page"}
      title={"Home-Finance"}
      sections={[{ title: "Home", url: "/" }]}
    >
      <Container maxWidth="md">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            throw new Error("sdadsda");
          }}
        >
          Send Error{" "}
        </Button>
      </Container>
    </Layout>
  );
};

export default Home;
