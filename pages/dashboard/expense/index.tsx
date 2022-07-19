import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Layout from "../../../components/layaout/Layout";
import SideBar from "../../../components/layaout/SideBar";
import { NextPage } from "next";
import Expense from "../../../components/dashboard/Expense";

const Expenses: NextPage = () => {
  return (
    <Layout description="Expense" sections={[]} title="Expense">
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Expense />
              </Grid>
              {/* Recent Deposits */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Expenses;
