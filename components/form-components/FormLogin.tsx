import { FormProvider, useForm } from "react-hook-form";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { Paper, Typography, Button, Grid, Avatar } from "@mui/material";
import FormInputText from "./FormInputText";
import { useLoginMutation } from "../../graphql/generated/graphql";
import { FC } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { useRouter } from "next/router";
import { GraphQLError } from "graphql";
import { ApolloError } from "@apollo/client";

const defaultValues = {
  email: "",
  password: "",
};
const LoginSchema = object({
  email: string().email("Email is invalid"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin: FC = () => {
  const { setIsLogged, setUser } = useAuthContext();
  const router = useRouter();
  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(LoginSchema),
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = methods;
  const [login] = useLoginMutation();

  const onSubmit = async (data: IFormInput) => {
    try {
      const { data: loginData, errors: loginErrors } = await login({
        variables: {
          authInput: {
            password: data.password,
            email: data.email,
          },
        },
      });
      if (loginData) {
        router.push("/dashboard");
        // setUser(mydata?.login.user as User);
      }
    } catch (err: any) {
      if (err instanceof ApolloError)
        console.log(err.graphQLErrors[0].extensions.response);
    }
  };

  return (
    <Grid>
      <FormProvider {...methods}>
        <Paper
          elevation={10}
          sx={{
            marginTop: 8,
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid alignSelf={"center"}>
            <Avatar>{/* InserIcont */}</Avatar>
            <Typography variant="h2"> Login </Typography>
          </Grid>

          <FormInputText
            name="email"
            control={control}
            label="Email"
            errors={errors}
          />

          <FormInputText
            name="password"
            control={control}
            label="Password"
            errors={errors}
            type={"password"}
          />

          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
            Submit
          </Button>
          <Button onClick={() => reset()} variant={"outlined"}>
            Reset
          </Button>
        </Paper>
      </FormProvider>
    </Grid>
  );
};
export default FormLogin;
