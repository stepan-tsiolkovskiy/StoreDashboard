import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProductCategory } from '../../../../types';
import { FC } from 'react';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories: ProductCategory[] = [
  ProductCategory.Electronics,
  ProductCategory.Clothing,
  ProductCategory.HomeGoods,
];

function getStyles(category: ProductCategory, selectedCategories: ProductCategory[], theme: Theme) {
  return {
    fontWeight:
      selectedCategories.indexOf(category) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type MultiTypeSelectorProps = {
  selectedCategoriesToCompare: ProductCategory[];
  setSelectedCategoriesToCompare: React.Dispatch<React.SetStateAction<ProductCategory[]>>;
};

export const CompareCard: FC<MultiTypeSelectorProps> = (props) => {
  const { selectedCategoriesToCompare, setSelectedCategoriesToCompare } = props;

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    setSelectedCategoriesToCompare(value as ProductCategory[]);
  }

  const clearCategories = () => {
    setSelectedCategoriesToCompare([]); // Reset selected categories to an empty array
  };

  return (
    <Card sx={{ minWidth: 275, padding: "10px 50px" }}>
      <CardContent 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          gap: "10px" 
        }}>
        <Typography variant="h5" component="div">
          Select Categories to Compare
        </Typography>
        
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-category-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-category-label"
          id="demo-multiple-category"
          multiple
          value={selectedCategoriesToCompare}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              value={category}
              style={getStyles(category, selectedCategoriesToCompare, theme)}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
        <Button size="small" onClick={clearCategories}>RESET</Button>
      </CardActions>
    </Card>
  );
};