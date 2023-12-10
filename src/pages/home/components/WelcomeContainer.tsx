import { Box, Typography, Button } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import { useNavigate } from "react-router-dom";

export const WelcomeContainer = () => {
  const navigate = useNavigate();
  return (
    <Box
      padding="50px"
      bgcolor={colorConfigs.homepage.bg}
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      borderRadius={sizeConfigs.homepage.borderRadius}
      textAlign="center"
    >
      <Typography variant="h4" component="h1" mb="20px">
        Welcome to Store Dashboard
      </Typography>
      
      <Box display="flex" gap="20px">
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => navigate('./dashboard')}
          sx={{ padding: "20px"}}
        >
          Go to Dashboard
        </Button>

        <Button 
          variant="outlined" 
          color="primary"
          onClick={() => navigate('./about')}
          sx={{ padding: "20px"}}
        >
          Find out more about the project
        </Button>
      </Box>
    </Box>
  );
};
