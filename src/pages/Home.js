import PaperBox from '../components/PaperBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json'
import Typography from '@mui/material/Typography';

const Home = () => (
    <div className="App">
      <Container sx={{marginY: 5}}>
        {cities.map((city) => (
          <>
            <Typography
            variant='h4'
            component='h2'
            marginTop={5}
            marginBottom={3}
            >
              Destinasi tebaik di {city.nama}
            </Typography>
            <Grid container spacing={3}>
              {city.destinasi.map((tujuan, index) => <PaperBox tujuan={tujuan} key={index} /> )}
            </Grid>
          </>
        ))}
      </Container>
    </div>
)

export default Home;