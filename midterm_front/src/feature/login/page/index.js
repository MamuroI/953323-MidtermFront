import { makeStyles, Typography, Grid, Button, withTheme } from "@material-ui/core";
import React from "react";
import { LoginProvider, useController } from "../controller";
import { withController } from "./../../../hoc/withController";
import Input from "../../../components/input";
import bg from "../../../assets/image/bg.png";

function Login() {
    const classes = useStyles();
    const controller = useController();
    
    return (
        <>
            <Grid container className={classes.body}>
                {controller.currentForm === 0 ? (
                    <Grid container item xs={12}  className={classes.form}>
                        <Grid container item xs={12} justifyContent="center">
                            <Typography style={{fontSize:32}}>Login</Typography>
                        </Grid>
                        <Grid container item className={classes.inputContainer}>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Username
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="username"
                                        className={classes.inputBox}
                                        value={controller.userName}
                                        onChange={e => controller.setUserName(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Password
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        type="password"
                                        placeholder="password"
                                        className={classes.inputBox}
                                        value={controller.passWord}
                                        onChange={e => controller.setPassWord(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.registerTextGroup}
                        >
                            <Typography className={classes.registerText}>
                                Don't have an account?
                            </Typography>
                            <Typography
                                className={classes.registerText2}
                                onClick={() => controller.setCurrentForm(1)}
                                style={{color:'#DE561C'}}
                            >
                                Register
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.btnContainer}
                        >
                            <Button variant="contained" className={classes.btn} onClick={() => controller.handleLogin()}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container item xs={12}  className={classes.form}>
                        <Grid container item xs={12} justifyContent="center">
                            <Typography style={{fontSize:32}}>Register</Typography>
                        </Grid>
                        <Grid container item className={classes.inputContainer}>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Firstname
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="firstname"
                                        className={classes.inputBox}
                                        value={controller.firstName}
                                        onChange={e => controller.setFirstName(e.target.value)}
                                        required
                                        
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Lastname
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="lastname"
                                        className={classes.inputBox}
                                        value={controller.lastName}
                                        onChange={e => controller.setLastName(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Email
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="email"
                                        className={classes.inputBox}
                                        value={controller.email}
                                        onChange={e => controller.setEmail(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Username
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="username"
                                        className={classes.inputBox}
                                        value={controller.userName}
                                        onChange={e => controller.setUserName(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                className={classes.inputGroup}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Typography variant="h6">
                                        Password
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    className={classes.inputItem}
                                >
                                    <Input
                                        placeholder="password"
                                        className={classes.inputBox}
                                        value={controller.passWord}
                                        onChange={e => controller.setPassWord(e.target.value)}
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.registerTextGroup}
                        >
                            <Typography className={classes.registerText}>
                                Already have an account?
                            </Typography>
                            <Typography
                                className={classes.registerText2}
                                onClick={() => controller.setCurrentForm(0)}
                                style={{color:'#DE561C'}}

                            >
                                Login
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.btnContainer}
                        >
                                
                            <Button variant="contained" className={classes.btn} onClick={() => controller.handleRegister()} >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                )}
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
    form:{
        background: 'white',
        alignSelf: 'center',
        maxWidth: 350,
        minHeight: 450,
        maxHeight: 800,
        borderRadius: 5,
        padding: 25
    },
    inputGroup: {
        marginTop: "7px",
        marginBottom: "7px",
    },
    inputItem: {
        justifyContent: "center",
    },
    inputBox: {
        width: "300px",
    },
    registerTextGroup: {
        justifyContent: "center",
    },
    registerText: {
        fontSize: 12,
    },
    registerText2: {
        fontSize: 12,
        cursor: "pointer",
        "&:hover": {
            color: "green",
        },
        marginLeft: 10
    },
    btnContainer: {
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "10px",
    },
    btn: {
        background: "#FEAA2B",
        color: "black",
        "&:hover": {
            color: "black",
            background: "#FFCB3C",
        },
    },
}));

export default withController(LoginProvider)(Login);
