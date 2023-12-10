import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import { SortByValue } from '../../../../types';

type SortSelectorProps = {
  sortValue: SortByValue,
  onChange: React.Dispatch<React.SetStateAction<SortByValue>>
}

export const TableSortSelect: FC<SortSelectorProps> = (props) => {
  const { sortValue, onChange } = props;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as SortByValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortValue}
          label="sortValue"
          onChange={handleChange}
        >
          <MenuItem value={SortByValue.REVENUE}>
            {SortByValue.REVENUE}
          </MenuItem>
          <MenuItem value={SortByValue.PROFIT_MARGINS}>
            {SortByValue.PROFIT_MARGINS}
          </MenuItem>
          <MenuItem value={SortByValue.UNITS_SOLD}>
            {SortByValue.UNITS_SOLD}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}