import { keyframes, Typography, TypographyProps } from "@mui/material";

import styled, { StyledComponent } from "@emotion/styled";
import { withTheme } from "@emotion/react";

interface IAnimatedTypoProps extends TypographyProps {
  animated: boolean;
  gradientColors?: string[];
}
const bounce = keyframes`

  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }


  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }

`;
const backGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
		background-position: 100% 50%;
	}

  100% {
		background-position: 0% 50%;
	}
`;

const BouncingText = styled(Typography)(
  ({ gradientColors, animated }: any) => ({
    cursor: "default",
    "&:hover": {
      cursor: "default",
    },
    display: "inline-block",
    background: `linear-gradient(-45deg, ${gradientColors.join(",")})`,
    borderRadius: `45px `,
    padding: "0.95rem",
    animation:
      animated && `${bounce} 1s ease, ${backGradient} 5s ease  infinite`,

    backgroundSize: "250% 250%",
  })
) as StyledComponent<IAnimatedTypoProps>;
export default BouncingText;
