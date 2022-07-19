import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Role, useIsLoggedQuery, User } from "../graphql/generated/graphql";
import { Nullable, Props } from "../types";

interface IAuthContext {
  isLogged: boolean;
  role?: Nullable<Role>;
  user?: Nullable<any>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setRole: Dispatch<SetStateAction<Nullable<Role >>>;
  setUser: Dispatch<SetStateAction<Nullable<any>>>;
}
const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, error } = useIsLoggedQuery({ errorPolicy: "all" });
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState<Nullable<Role >>(null);
  const [user, setUser] = useState<Nullable<Partial<any>>>(null);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data?.whoAmI?.Permission?.type) {
      setIsLogged(data?.whoAmI !== null);
      setUser(data?.whoAmI as any | undefined);
      setRole(data?.whoAmI?.Permission?.type);
    } else {
      setIsLogged(false);
    }
  }, [data, error]);
  return (
    <AuthContext.Provider
      value={{ isLogged, role, user, setIsLogged, setRole, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
