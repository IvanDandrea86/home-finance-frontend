import { FC, Fragment } from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Title from "../Title";

function preventDefault(event: MouseEvent) {
  event.preventDefault();
}

const Budget: FC = () => {
  return (
    <Fragment>
      <Title>My Balance</Title>
      <Typography component="p" variant="h4">
        {"€ 3,024.00"}{" "}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </Fragment>
  );
};
export default Budget;
