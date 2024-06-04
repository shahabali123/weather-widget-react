import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
  let HOT_URL = "https://media.istockphoto.com/photos/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-picture-id1150860710?k=6&m=1150860710&s=170667a&w=0&h=CTpFfv3RokNg8d4z5LKMmQi_ZnacDZnSteOb8gz0J3U=";
  let COLD_URL = "https://tse4.mm.bing.net/th?id=OIP.G-GyW-YmZSn-MclH7PaTbAHaE8&pid=Api&P=0&h=220";
  let RAIN_URL = "https://tse1.mm.bing.net/th?id=OIP.a6NJ8XKZ4PxKeAPOZ7Ps5wHaE8&pid=Api&P=0&h=220";
  let WIND_URL = "https://images.hdqwalls.com/wallpapers/clouds-summer-weather-5k-1b.jpg";
  let CLOUD_URL = "https://tse1.mm.bing.net/th?id=OIP.qT_eMV1fAfvbgA02gO9VVwHaE8&pid=Api&P=0&h=220";
  let UNI_URL = "https://tse1.mm.bing.net/th?id=OIP.l7O8C3hqE0UjWmKFMhsNnwHaEo&pid=Api&P=0&h=220"
  
  return (
  <div className="infoBox">
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ? RAIN_URL :
           info.windSpeed > 30 ? WIND_URL :
            info.temp > 15 ? HOT_URL :
             info.tem < 15 ? COLD_URL :
              info.humidity < 30 ? CLOUD_URL :
               UNI_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          City {info.cityName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Temprature {info.temp}&#xB0;C <br />
        Sky {info.clouds} <br />
        {info.cloudsInfo} <br />
        Humidity {info.humidity} <br />
        Wind Speed {info.windSpeed} KM/Hour <br />
        Estimated Maximum Temprature {info.maxTemp}&#xB0;C <br />
        Estimated Minimum Temprature {info.minTemp}&#xB0;C <br />
        </Typography>
      </CardContent>
      
    </Card>
  </div>
  
  )
}
