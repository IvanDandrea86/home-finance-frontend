import { Role } from "../graphql/generated/graphql";

export function getRedirect(permission: Role) {
    switch (permission) {
      case 'ADMIN':
        return {
          redirect: {
            permanent: false,
            destination: `/admin`,
          },
        };
  
      case 'USER':
        return {
          redirect: {
            permanent: false,
            destination: `/dashboard`,
          },
        };
      default:
        return {
          redirect: {
            permanent: false,
            destination: `/`,
          },
        };
    }
  }