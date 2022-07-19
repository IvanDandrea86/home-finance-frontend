import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import { Paper, ButtonGroup, Button, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// Generate Order Data
function createData(id: number, name: string, amount: number) {
  return { id, name, amount };
}

const rows = [
  createData(0, "Insurance Auto", 312.44),
  createData(1, "Bank fees", 16.99),
  createData(2, "Technical Control", 350.44),
  createData(3, "Insurance Auto", 866.99),
];

const Expense: React.FC = () => {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>Insurance</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{`$${row.amount}`}</TableCell>
              <TableCell>
                <IconButton>
                  <HighlightOffIcon />
                </IconButton>
                <IconButton>
                  <AutoFixHighIcon />
                </IconButton>
              </TableCell>
           
            </TableRow>
          ))}
          <TableRow key={12}>
            <TableCell>Total</TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="secondary">
                3000
              </Typography>
            </TableCell>
          </TableRow>
          <ButtonGroup variant="outlined" color="primary" aria-label="">
            <Button>Add</Button>
          </ButtonGroup>
        </TableBody>
      </Table>
    </Paper>
  );
};
export default Expense;
