import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 12,
                    }
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 10,
                    }
                },
            ],
        },
    },
});

const PaperBox = ({tujuan}) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={6}>
                    <img src={tujuan.gambar} className="img-sm" alt="Gambar Pemandangan"></img>
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tujuan.nama}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <AccessTime sx={{ width: 13 }}/>
                            <Typography variant="body2" component="p" marginLeft={0.4}>
                                {tujuan.durasi} Jam
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                            marginTop={3}
                        >
                            <Rating 
                                name="read-only"
                                value={tujuan.rating}
                                readOnly
                                precision={0.5}
                                size="small"
                            />
                            <Typography variant="body2" component="p" marginLeft={1}>
                                {tujuan.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1}>
                                ({tujuan.totalRating})
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From Rp{tujuan.harga},-
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}

export default PaperBox;