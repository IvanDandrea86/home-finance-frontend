import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  category: string,
  amount: number
) {
  return { id, date, name, category, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "Delhaize", "Food", 312.44),
  createData(1, "16 Mar, 2019", "McDonald", "Food", 16.99),
  createData(0, "16 Mar, 2019", "Pharmacy", "Health", 12.44),
  createData(1, "16 Mar, 2019", "McDonald", "Food", 866.99),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const Charge: React.FC = () => {
  return (
    <React.Fragment>
      <Title>Recent Charge</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more charges
      </Link>
    </React.Fragment>
  );
};
export default Charge;
