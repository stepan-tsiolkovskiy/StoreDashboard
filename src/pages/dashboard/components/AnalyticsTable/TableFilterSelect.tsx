import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dispatch, FC, SetStateAction } from 'react';
import { FilterByProductType } from '../../../../types';

type FilterSelectorProps = {
  filterValue: FilterByProductType,
  onChange: Dispatch<SetStateAction<FilterByProductType>>
}

export const TableFilterSelect: FC<FilterSelectorProps> = (props) => {
  const { filterValue, onChange } = props;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as FilterByProductType);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by product type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterValue}
          label="Product"
          onChange={handleChange}
        >
          <MenuItem value={FilterByProductType.ELECTRONICS}>
            {FilterByProductType.ELECTRONICS}
            </MenuItem>
          <MenuItem value={FilterByProductType.HOMEGOODS}>
            {FilterByProductType.HOMEGOODS}
            </MenuItem>
          <MenuItem value={FilterByProductType.CLOTHING}>
            {FilterByProductType.CLOTHING}
            </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
