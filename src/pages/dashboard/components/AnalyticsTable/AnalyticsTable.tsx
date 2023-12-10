import { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from 'react';
import { Grid, TableCellProps } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableColumns, DataType, ProductType, TableDataType, FilterByProductType, SortByValue } from '../../../../types';
import { useAppSelector } from '../../../../redux/hooks';

type Cell = {
  id: string;
  value: string;
  align: string;
};

const Cells: Cell[] = [
  { id: "date", value: TableColumns.DATE, align: "left" },
  { id: "productCategory", value: TableColumns.PRODUCT, align: "center" },
  { id: "revenue", value: TableColumns.REVENUE, align: "center" },
  { id: "unitsSold", value: TableColumns.UNITS, align: "center" },
  { id: "profitMargin", value: TableColumns.PROFIT, align: "center" },
];

const preprocessData = (dataToRows: DataType): ProductType[] => {
  const combinedData = [
    ...dataToRows.electronics,
    ...dataToRows.clothing,
    ...dataToRows.homeGoods,
  ];

  const sortedData = combinedData.sort((el1, el2) => new Date(el1.date).getTime() - new Date(el2.date).getTime());

  const processedData = sortedData.map((item, index) => ({ ...item, id: index + 1 }));

  return processedData;
};

const mapCustomToPredefinedAlignment = (align: string): TableCellProps["align"] => {
  switch (align) {
    case "left":
      return "left";
    case "center":
      return "center";
    case "right":
      return "right";
    default:
      return undefined;
  }
}

type SalesTableProps = {
  rows: TableDataType[];
  setRows: Dispatch<SetStateAction<TableDataType[]>>;
  filterByProductType: FilterByProductType;
  sortByValue: SortByValue;
  selectedDate: Date | null;
};

export const AnaliticsTable: FC<SalesTableProps> = (props) => {
  const { 
    rows,
    setRows,
    filterByProductType,
    sortByValue,
    selectedDate
  } = props;

  const { products } = useAppSelector((state) => state.products);
  //data from all products type in one array
  const processedRows = preprocessData(products);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const filteredData = processedRows.slice();
    /*if (filterByProductType) {
      filteredData = filteredData.filter((el) => el.productCategory === filterByProductType);
    }
  
    if (sortByValue === SortByValue.REVENUE) {
      filteredData = filteredData.sort((el1, el2) => el2.revenue - el1.revenue);
    } else if (sortByValue === SortByValue.UNITS_SOLD) {
      filteredData = filteredData.sort((el1, el2) => el2.unitsSold - el1.unitsSold);
    } else if (sortByValue === SortByValue.PROFIT_MARGINS) {
      filteredData = filteredData.sort((el1, el2) => el2.profitMargin - el1.profitMargin);
    }
  
    if (selectedDate) {
      const localSelectedDate = new Date(selectedDate);
    
      const selectedDateComponents = localSelectedDate.toLocaleDateString('en-US');
    
      filteredData = filteredData.filter((el) => {
        const dataDateComponents = new Date(el.date).toLocaleDateString('en-US');
    
        return dataDateComponents === selectedDateComponents;
      });
    }*/

    filteredData && setRows(filteredData);
    setLoading(false);
  }, [filterByProductType, sortByValue, selectedDate]);

  const getAlignValue = (align: string): TableCellProps["align"] => {
    return mapCustomToPredefinedAlignment(align);
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {Cells.map((cell) => (
                      <TableCell key={cell.id} align={getAlignValue(cell.align)}>
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Fragment key={row.id}>
                      <TableRow>
                        {Cells.map((cell) => (
                          <TableCell key={`${row.id}-${cell.id}`} align={getAlignValue(cell.align)}>
                            {row[cell.id as keyof ProductType]}
                          </TableCell>
                        ))}
                      </TableRow>
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};