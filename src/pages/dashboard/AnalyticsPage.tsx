import { Box, Grid } from "@mui/material";
import { 
  AnaliticsTable, 
  TableDateSelect, 
  TableFilterSelect, 
  TableSortSelect 
} from "./components/AnalyticsTable";

export const AnalyticsPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Box display="flex" gap="40px">
          <TableSortSelect />
          <TableFilterSelect />
        </Box>
      </Grid>

      <Grid 
        item xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", lg: "flex-end" } }}>
        <TableDateSelect />
      </Grid>

      <Grid item xs={12}>
        <AnaliticsTable />
      </Grid>
    </Grid>
  );
};
