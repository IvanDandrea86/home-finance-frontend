import { FC } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useLogoutMutation } from "../../graphql/generated/graphql";
import { useAuthContext } from "../../context/AuthProvider";
import  { useRouter } from "next/router";

const LogButton: FC<{ isLogged: boolean }> = ({ isLogged }) => {
  const [logout] = useLogoutMutation();
  const { setUser, setIsLogged } = useAuthContext();
const router =useRouter()
  const handleLogout = async () => {
    try {
      const resp = await logout();
      if (resp) {
        setUser(null);
        setIsLogged(false);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      {isLogged ? (
        <Button onClick={() => handleLogout()}>Logout</Button>
      ) : (
        <Box>
          <Button
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              router.push("../register");
            }}
          >
            Signup
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default LogButton;
