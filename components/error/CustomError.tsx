import { Box, Button, Typography } from "@mui/material";
import Error from "next/error";

import router from "next/router";

interface ICustomError {
  copy?: string;
  cta: string;
  link: string;
  subcopy?: string;
}

export default class CustomError extends Error<ICustomError & ErrorProps> {
  constructor(props: ICustomError & ErrorProps) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = {
      ...props,
    };
  }
  render() {
    const { title, statusCode, copy, link, cta } = this.props;
    return (
      <Box>
        <Typography>Ops...</Typography>
        <Typography>Error {statusCode}</Typography>
        <Typography>{title}</Typography>
        <Typography>{copy}</Typography>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            router.back();
          }}
        >
          {cta}
        </Button>
      </Box>
    );
  }
}
