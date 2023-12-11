import { Box, Button, Grid } from "@mui/material";
import { 
  AnaliticsTable, 
  TableDateSelect, 
  TableFilterSelect, 
  TableSortSelect 
} from "./components/AnalyticsTable";
import { CompareCard } from "./components/CompateCard";
import { useState } from "react";
import { FilterByProductType, SortByValue } from "../../types";
//import { ProductCategory } from "../../types";

export const AnalyticsPage = () => {
  const [sortByValue, setSortByValue] = useState(SortByValue.DEFAULT);
  const [filterByProductType, setFilterByProductType] = useState(FilterByProductType.DEFAULT);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  //const [selectedCategoriesToCompare, setSelectedCategoriesToCompare] = useState<ProductCategory[]>([]);

  /*function downloadCSV(rows: ProductType[], filename: string) {
    const csvContent = "data:text/csv;charset=utf-8," +
      rows.map(row => Object.values(row).join(",")).join("\n");
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  }

  const handleDownloadCSV = () => {
    downloadCSV(rows, "table_data.csv");
  };*/

  return (
    <Grid container>
      <Grid item xs={12} lg={3} sx={{ marginBottom: "20px"}}>
        <CompareCard />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box display="flex" gap="40px">
            <TableSortSelect 
              sortValue={sortByValue}
              onChange={setSortByValue}
            />

            <TableFilterSelect 
              filterValue={filterByProductType}
              onChange={setFilterByProductType}
            />
          </Box>
        </Grid>

        <Grid 
          item xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", lg: "flex-end" } }}>
            <Box display="flex" gap="40px">
              <TableDateSelect 
                selectedDate={selectedDate}
                onChange={setSelectedDate}
              />
              
              <Button variant="contained">
                Download CSV
              </Button>
            </Box>
         
        </Grid>

        <Grid item xs={12}>
          <AnaliticsTable 
            filterByProductType={filterByProductType}
            sortByValue={sortByValue}
            selectedDate={selectedDate}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
