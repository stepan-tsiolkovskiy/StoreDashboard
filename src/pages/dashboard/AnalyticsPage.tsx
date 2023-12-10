import { Box, Button, Grid } from "@mui/material";
import { 
  AnaliticsTable, 
  TableDateSelect, 
  TableFilterSelect, 
  TableSortSelect 
} from "./components/AnalyticsTable";
import { CompareCard } from "./components/CompateCard";

export const AnalyticsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={3} sx={{ marginBottom: "20px"}}>
        <CompareCard />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box display="flex" gap="40px">
            <TableSortSelect />
            <TableFilterSelect />
          </Box>
        </Grid>

        <Grid 
          item xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", lg: "flex-end" } }}>
            <Box display="flex" gap="40px">
              <TableDateSelect />
              
              <Button variant="contained">
                Download CSV
              </Button>
            </Box>
         
        </Grid>

        <Grid item xs={12}>
          <AnaliticsTable />
        </Grid>
      </Grid>
    </Grid>
  );
};
