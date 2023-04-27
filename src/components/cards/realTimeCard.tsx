import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function RealtimeCard({...donneeTempsReeel}) {
    

  
  return (
    <Card sx={{ maxWidth: 345 }}>

      {
        donneeTempsReeel && donneeTempsReeel.temp <= 35 ?
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.chauffage-aterno.com/medias/thermometre-temperature-exterieure.jpg"
          title="green iguana"
        />
        :
        <CardMedia
          sx={{ height: 140 }}
          image="data:image/jpeg;base64,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"
          title="green iguana"
        />
      }
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TEMPS RÉEL
        </Typography>
        <Typography variant='h1'>
          <Typography sx={{ fontWeight:50 }}  color="text.secondary" noWrap>
            Témperature:  {donneeTempsReeel && donneeTempsReeel.temp} °
          </Typography>
          <Typography  color="text.secondary">
            Humidité:  {donneeTempsReeel && donneeTempsReeel.hum} %
          </Typography>
        </Typography>

      </CardContent>
      
    </Card>
  );
}
