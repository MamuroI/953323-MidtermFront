import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { withController } from "../../../hoc/withController";
import { HomeProvider } from "../controller/";

function Home() {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.body}>
                <Grid container item className={classes.header}>
                    <Grid container item className={classes.availableBox}>
                        <Typography>Available coins :</Typography>
                        <Typography>25</Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={12} className={classes.userInfo}>
                    <Grid container item xs={12} className={classes.userOwned}>
                        <Typography>Owned :</Typography>
                        <Typography>10</Typography>
                    </Grid>
                    <Grid container item xs={12} className={classes.userLimit}>
                        <Typography>Today's buy limits :</Typography>
                        <Typography>5</Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.userBalance}
                    >
                        <Typography>Balance :</Typography>
                        <Typography>500</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.userAction}>
                    <Grid container item xs={6} className={classes.buyGroup}>
                        <Grid container item xs={12}>
                            <Typography variant="h5">Buy</Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={1}
                            className={classes.btnContainer}
                        >
                            <Button
                                variant="contained"
                                className={classes.minusBtn}
                                //onClick={() => controller.handleRegister()}
                            >
                                -
                            </Button>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={1}
                            className={classes.userSelectNumBox}
                        >
                            <Typography className={classes.selectNum}>
                                5
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={1}
                            className={classes.btnContainer}
                        >
                            <Button
                                variant="contained"
                                className={classes.plusBtn}
                                //onClick={() => controller.handleRegister()}
                            >
                                +
                            </Button>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid
                                container
                                item
                                xs={4}
                                className={classes.priceBox}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography className={classes.price}>
                                    price:{" "}
                                </Typography>
                                <Typography className={classes.price}>
                                    {" "}
                                    100 bth{" "}
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={3}
                                className={classes.confirmBox}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.confirmBtn}
                                    //onClick={() => controller.handleRegister()}
                                >
                                    Confirm
                                </Button>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={3}
                                className={classes.cancelBox}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.cancelBtn}
                                    //onClick={() => controller.handleRegister()}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}></Grid>
                </Grid>
            </Grid>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    body: {},
    header: {
        justifyContent: "center",
        marginTop: 30,
    },
    availableBox: {
        border: "2px solid black",
        width: 300,
        height: 50,
        background: "lightyellow",
        borderRadius: 15,
    },
    userInfo: {
        border: "1px solid black",
        borderRadius: 20,
        background: "lightblue",
        width: 500,
    },
    userSelectNumBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    selectNum: {
        fontSize: 18,
    },
    btnContainer: {
        justifyContent: "center",
    },
    plusBtn: {
        borderRadius: "50%",
        minWidth: 40,
        height: 40,
        background: "green",
        color: "white",
        fontSize: 20,
    },
    minusBtn: {
        borderRadius: "50%",
        minWidth: 40,
        height: 40,
        background: "orange",
        color: "white",
        fontSize: 20,
    },
    price: {},
}));

export default withController(HomeProvider)(Home);
