import { ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to="/" sx={{ height: "50px" }}>
    <img src={logo} alt="" width="100%" height="100%" />
  </ButtonBase>
);

export default LogoSection;
