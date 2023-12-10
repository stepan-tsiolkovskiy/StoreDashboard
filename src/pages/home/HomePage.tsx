import { Box } from "@mui/material"
import { WelcomeContainer } from "./components/WelcomeContainer"
import sizeConfigs from "../../configs/sizeConfigs"

export const HomePage = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height={`calc(100vh - ${sizeConfigs.sidebar.width})`}
    >
      <WelcomeContainer />
    </Box>
  )
}