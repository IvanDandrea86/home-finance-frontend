import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paper, Typography, Button, Grid, Avatar, Box } from "@mui/material";
import FormInputText from "./FormInputText";
import { FC, useState } from "react";
import { useCreateUserMutation } from "../../graphql/generated/graphql";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthProvider";

const signupSchema = object({
  firstName: string().min(1, "Firstname is required"),
  lastName: string().min(1, "Lastname is required"),
  email: string().min(1, "Email is required").email("Email is invalid"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

type RegisterInput = TypeOf<typeof signupSchema>;

const FormSignup: FC = () => {
  const { setUser, setIsLogged } = useAuthContext();
  const [signup] = useCreateUserMutation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    resolver: zodResolver(signupSchema),
  });

  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors, isSubmitSuccessful },
  } = methods;
  const onSubmit: SubmitHandler<any> = async (data: RegisterInput) => {
    try {
      setLoading(true);
      const { data: response, errors } = await signup({
        variables: {
          createUserInput: {
            validationToken: "",
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
          },
        },
      });

      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={12} justifyContent={"center"}>
      <FormProvider {...methods}>
        <Paper
          elevation={10}
          sx={{
            marginTop: 8,
            width: "30vw",
            display: "flex",
            padding: "1.75rem",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid alignSelf={"center"}>
            {/* <Avatar>InserIcont</Avatar> */}
            <Typography variant="h6"> Signup </Typography>
          </Grid>

          <FormInputText
            name="firstName"
            control={control}
            label="Firstname"
            errors={errors}
          />
          <FormInputText
            name="lastName"
            control={control}
            label="Lastname"
            errors={errors}
          />
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
          <FormInputText
            name="confirmPassword"
            control={control}
            label="Confirm Password"
            errors={errors}
            type={"password"}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
              loading={loading}
              variant={"contained"}
            >
              Register
            </LoadingButton>
            <Button onClick={() => reset()} variant={"outlined"}>
              Reset
            </Button>
          </Box>
        </Paper>
      </FormProvider>
    </Grid>
  );
};
export default FormSignup;
