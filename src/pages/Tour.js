import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import ImageCollage from "../components/ImageCollage";
import Box from "@mui/material/Box";
import Accordions from "../components/Accordian";
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from "../components/Modal";

const Tour = () => 
    <Container
        sx={{
            width: 900
        }}
    >
        <Typography variant="h3" component="h1" marginTop={3}>
            Eksplorasi Bali
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src="https://phinemo.com/wp-content/uploads/2021/02/denpasar1-min.jpg" alt="Gambar Kota Bali" width={550}></img>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                Tentang Bali
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Ullamco irure veniam adipisicing aute sit sint minim. Tempor nostrud id proident Lorem reprehenderit ut. Cupidatat fugiat veniam Lorem in amet do elit.
                Aliquip sint aliquip nulla duis mollit ex veniam cupidatat sunt ut commodo est ullamco. Ex velit ipsum laboris ullamco pariatur aute exercitation esse sunt qui incididunt amet laborum. Quis quis do eiusmod culpa sunt.
            </Typography>
        </Box>
        <Box marginBottom={12}>
            <Typography variant="h6" component="h4" marginTop={3}>
                FAQ
            </Typography>
            <Accordions/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation><BasicModal/></BottomNavigation>
        </Paper>
    </Container>

export default Tour;