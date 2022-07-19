import NextErrorComponent from "next/error";
import HttpStatusCode from "../types/statusCode";
import type { NextPage } from "next";
import { getEnumKey, readableString } from "../utils";
import CustomError from "../components/error/CustomError";


// override ErrorProps type to add hasGetInitialPropsRun
declare global {
  type ErrorProps = {
    statusCode: HttpStatusCode;
    title?: string | undefined;
    hasGetInitialPropsRun?: boolean;
    err?: Error;
  };
}

const AppError: NextPage<ErrorProps> = ({
  hasGetInitialPropsRun,
  err,
  statusCode,
}) => {
  if (!hasGetInitialPropsRun && err) {
  }
  return (
    <div>
      <CustomError
        statusCode={statusCode}
        cta={"Back"}
        err={err}
        title={readableString(getEnumKey(HttpStatusCode, statusCode))}
        copy={err?.message}
        link={"../"}
      />
    </div>
  );
};

AppError.getInitialProps = async (context: any) => {
  const errorInitialProps: ErrorProps =
    await NextErrorComponent.getInitialProps(context);

  const { res, err, asPath } = context;

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Returning early because we don't want to log 404 errors to Sentry.
  if (res?.statusCode === 404) {
    return errorInitialProps;
  }

  if (err) {
    return errorInitialProps;
  }
  new Error(`_error.js getInitialProps missing data at path: ${asPath}`);

  return errorInitialProps;
};

export default AppError;
