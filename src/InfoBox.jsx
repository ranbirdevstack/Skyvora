import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}) {


  const Init_url =
    "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=870";
   const Hot_url='https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1579&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
   const Cold_url="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const Rain_url='https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="infobox">
      

      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>

          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80? Rain_url:info.temp >15? Hot_url:Cold_url}
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.city}
                {info.city}
  &nbsp;
  {info.humidity > 80 
    ? <ThunderstormIcon /> 
    : info.temp > 15 
      ? <SunnyIcon /> 
      : <AcUnitIcon />
  }
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature: {info.temp}°C <br />
              Humidity: {info.humidity}% <br />
              Min Temp: {info.TempMin}°C <br />
              Max Temp: {info.TempMax}°C <br />
              Weather: {info.weather} <br />
              Feels like: {info.feelslike}°C
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}