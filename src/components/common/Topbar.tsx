import { AppBar, Toolbar, Typography } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

const Topbar = () => (
  <AppBar
    position="fixed"
    sx={{
      width: `calc(100% - ${sizeConfigs.sidebar.width})`,
      ml: sizeConfigs.sidebar.width,
      boxShadow: "unset",
      backgroundColor: colorConfigs.topbar.bg,
      color: colorConfigs.topbar.color
    }}
  >
    <Toolbar>
      <Typography variant="h6">
        Sales dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);
  
export default Topbar