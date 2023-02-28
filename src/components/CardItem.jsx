import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid } from '@mui/material';

export default function CardItem({totalData}) {

  return (
    <> 
            <Grid sx={{padding: "5px"}} container spacing={3} >
    {totalData.map(item=>
        <>
        
          <Grid item sx={{boxShadow:1}} xs={4} >
     
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item[0] && item[0].properties.housenumber}
            </Avatar>
          }
          title={
            item[0] && item[0].properties.name || "NO DATA AVAILABLE"
          }
          subheader={item[0] && item[0].properties.postalcode}
        />
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} variant="body2" color="text.secondary">
            Address: {item[0] && item[0].properties.label || "N/A"}
          </Typography>
          <Typography sx={{fontWeight: 'bold'}} variant="body2" color="text.secondary">
            Street: {item[0] && item[0].properties.street || "N/A"}
          </Typography>
          <Typography sx={{fontWeight: 'bold'}} variant="body2" color="text.secondary">
            Postal Code: {item[0] && item[0].properties.postalcode || "N/A"}
          </Typography>
          <Typography sx={{fontWeight: 'bold'}} variant="body2" color="text.secondary">
            HouseNumber:{item[0] && item[0].properties.housenumber || "N/A"}
          </Typography>
        </CardContent>
      </Grid>
        </>
      )
    }
      </Grid>  
      </>
  );
}