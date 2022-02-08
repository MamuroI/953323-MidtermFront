import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { withController } from "../../../hoc/withController";
import { HomeProvider, useController } from "../controller/";
import bg from "../../../assets/image/bg.png";
import Input from "../../../components/input";

function Home() {
    const classes = useStyles();
    const controller = useController();
    return (
        <>
            <Grid container className={classes.body}>
                <Grid container item xs={12} className={classes.logoutBox}>
                    <Button
                        variant="contained"
                        className={classes.logoutBtn}
                        onClick={() => controller.handleLogout()}
                    >
                        Logout
                    </Button>
                </Grid>
                <Grid container item className={classes.header}>
                    <Grid container item className={classes.availableBox}>
                        <Typography className={classes.availableText}>
                            Available coins : {controller.stock}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={12} className={classes.userInfo}>
                    <Grid container item xs={12} className={classes.userOwned}>
                        <Typography className={classes.infoText}>
                            Owned : {controller.ownedCoin} coins
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} className={classes.userLimit}>
                        <Typography className={classes.infoText}>
                            Today's buy limits : {controller.buyLimit}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.userBalance}
                    >
                        <Typography className={classes.infoText}>
                            Balance : {controller.userBalance} THB
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.userAction}>
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.modeBtnGroup}
                    >
                        <Grid
                            container
                            item
                            xs={1}
                            className={classes.modeBtnBox}
                        >
                            <Button
                                variant="contained"
                                className={
                                    controller.actionMode == 0
                                        ? classes.modeBtnActive
                                        : classes.modeBtn
                                }
                                onClick={() => controller.setActionMode(0)}
                            >
                                Buy
                            </Button>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={1}
                            className={classes.modeBtnBox}
                        >
                            <Button
                                variant="contained"
                                className={
                                    controller.actionMode == 1
                                        ? classes.modeBtnActive
                                        : classes.modeBtn
                                }
                                onClick={() => controller.setActionMode(1)}
                            >
                                Sell
                            </Button>
                        </Grid>
                    </Grid>
                    {controller.actionMode == 0 ? (
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.actionGroupBox}
                        >
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.actionHeaderTextBox}
                            >
                                <Typography variant="h4">
                                    Buy CAMT coin
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.selectAmountGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={1}
                                    className={classes.btnContainer}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.minusBtn}
                                        onClick={() =>
                                            controller.minusBuySelect()
                                        }
                                    >
                                        -
                                    </Button>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.userSelectAmountBox}
                                >
                                    <Typography className={classes.amountText}>
                                        {controller.selectBuyAmount}
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
                                        onClick={() =>
                                            controller.addBuySelect()
                                        }
                                    >
                                        +
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.priceBox}
                            >
                                <Typography className={classes.price}>
                                    Price : {controller.totalBuyPrice} THB
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.confirmGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.confirmBox}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.confirmBtn}
                                        onClick={() => controller.handleBuy()}
                                    >
                                        Confirm
                                    </Button>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.cancelBox}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.cancelBtn}
                                        onClick={() => controller.handleCancel()}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.actionGroupBox}
                        >
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.actionHeaderTextBox}
                            >
                                <Typography variant="h4">
                                    Sell CAMT coin
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.selectAmountGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={1}
                                    className={classes.btnContainer}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.minusBtn}
                                        onClick={() =>
                                            controller.minusSellSelect()
                                        }
                                    >
                                        -
                                    </Button>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.userSelectAmountBox}
                                >
                                    <Typography className={classes.amountText}>
                                        {controller.selectSellAmount}
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
                                        onClick={() =>
                                            controller.addSellSelect()
                                        }
                                    >
                                        +
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                className={classes.perCoinGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    justifyContent="flex-end"
                                >
                                    <Typography
                                        className={classes.perCoinText}
                                        style={{ marginRight: 10 }}
                                    >
                                        Price:
                                    </Typography>
                                </Grid>
                                <Grid container item xs={2}>
                                    <Input
                                        disabled={controller.ownedCoin <=5 ? true : false}
                                        type="number"
                                        className={classes.inputPerCoin}
                                        value={controller.ownedCoin <=5 ? 10 : controller.perCoin}
                                        onChange={(e) =>
                                            e.target.value < 0
                                                ? (e.target.value = 0)
                                                : controller.setPerCoin(
                                                      e.target.value
                                                  )
                                        }
                                    />
                                </Grid>
                                <Grid container item xs={2}>
                                    <Typography
                                        className={classes.perCoinText}
                                        style={{ marginLeft: 10 }}
                                    >
                                        per coin
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.priceBox}
                            >
                                <Typography className={classes.price}>
                                    Price : {controller.totalSellPrice} THB
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.confirmGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.confirmBox}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.confirmBtn}
                                        onClick={() => controller.handleSell()}
                                    >
                                        Confirm
                                    </Button>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    className={classes.cancelBox}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.cancelBtn}
                                        onClick={() => controller.handleCancel()}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        justifyContent: "center",
    },
    header: {
        justifyContent: "center",
        marginTop: 50,
    },
    availableText: {
        fontSize: 36,
        color: "white",
        fontStyle: "normal",
        fontWeight: 500,
    },
    availableBox: {
        width: 500,
        height: 92,
        background: "#DE561C",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    userInfo: {
        border: "2px solid #DE561C",
        borderRadius: 6,
        background: "#FDA831",
        maxWidth: 678,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
    },
    userOwned: {
        justifyContent: "center",
    },
    userLimit: {
        justifyContent: "center",
    },
    userBalance: {
        justifyContent: "center",
    },
    infoText: {
        fontSize: 30,
    },
    userAction: {
        justifyContent: "center",
        marginBottom: 80,
    },
    modeBtnGroup: {
        justifyContent: "center",
    },
    modeBtnBox: {
        justifyContent: "center",
    },
    modeBtn: {
        color: "black",
        background: "#FDA831",
        width: 130,
        height: 60,
        fontSize: 24,
    },
    modeBtnActive: {
        color: "white",
        background: "#DE561C",
        width: 130,
        height: 60,
        fontSize: 24,
    },
    actionGroupBox: {
        height: 300,
        maxWidth: 670,
        background: "linear-gradient(180deg, #FFBF5F 0%, #FF9900 100%)",
        borderRadius: 10,
    },
    actionHeaderTextBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 70,
    },
    selectAmountGroup: {
        height: 60,
        justifyContent: "center",
    },
    userSelectAmountBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 150,
        background: "white",
        borderRadius: 6,
    },
    btnContainer: {
        justifyContent: "center",
    },
    plusBtn: {
        borderRadius: "50%",
        minWidth: 40,
        height: 40,
        background: "#BAFC9B",
        color: "black",
        fontSize: 20,
    },
    minusBtn: {
        borderRadius: "50%",
        minWidth: 40,
        height: 40,
        background: "#FF8080",
        color: "black",
        fontSize: 20,
    },
    priceBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    price: {
        fontSize: 30,
    },
    confirmGroup: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    confirmBox: {
        justifyContent: "center",
    },
    cancelBox: {
        justifyContent: "center",
    },
    confirmBtn: {
        background: "#BAFC9B",
        color: "black",
        borderRadius: 6,
        border: "2px solid #BAFC9B",
        "&:hover": {
            color: "white",
            background: "green",
            border: "2px solid green",
        },
    },
    cancelBtn: {
        background: "rgba(254, 157, 157, 0.25)",
        color: "black",
        borderRadius: 6,
        border: "2px solid #D30505",
        "&:hover": {
            color: "white",
            background: "red",
            border: "2px solid red",
        },
    },
    perCoinGroup: {
        justifyContent: "center",
        alignItems: "center",
    },
    perCoinText: {
        fontSize: 24,
    },
    inputPerCoin: {
        borderRadius: 6,
    },
    logoutBox: {
        height: 50,
        justifyContent: 'flex-end',
        margin: '15px 15px 0 0'
    },
    logoutBtn:{
        color: 'white',
        background: 'black',
        borderRadius: 6,
        height: 50,
        width: 100,
        
    }
}));

export default withController(HomeProvider)(Home);
