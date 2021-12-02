import React from "react";
import { Typography, AppBar, Card, CardContent, CardMedia, Toolbar, CssBaseline, CardActions, Grid, Container, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";


const App = () => {

    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const year = new Date().getFullYear();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        My Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth="md">
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            MEMORIES
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello my name is Ayush and I've Created this website with pain and sorrow!
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item >
                                    <Button variant="contained" color="primary">
                                        View My Photos
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" color="primary">
                                        Edit My Photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} >
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h4">
                                            MacLeodGanj
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            These photos could have been real but someone showed their AUKAT!
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="secondary">
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                    copyright&copy;{year}
                </Typography>
            </footer>
        </>
    )
}

export default App;
