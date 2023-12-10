import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const CompareCard = () => {
  //const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ["Category 1", "Category 2", "Category 3", "Category 1", "Category 2", "Category 3"]; // Add your categories here

  /*const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };*/

  return (
    <Card sx={{ minWidth: 275, padding: "20px 50px" }}>
      <CardContent 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          gap: "20px" 
        }}>
        <Typography variant="h5" component="div">
          Select Categories to Compare
        </Typography>
        
        <Select
          label="Select Categories"
          multiple
          value={[]}
          //onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
        <Button size="small">RESET</Button>
      </CardActions>
    </Card>
  );
};
