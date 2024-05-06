import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Safe Cinema Logo"
        src="/assets/safecinema-logo.svg"
        width={150}
        height={30}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
