import { makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { LoginProvider } from '../controller';
import { withController } from './../../../hoc/withController';

function Login() {
    const classes = useStyles()
  return (
      <>
        <Grid container justifyContent='center' alignItems='center' className={classes.body}>
            <Typography>Test login page</Typography>
        </Grid>
        
      </>
  )
}

const useStyles = makeStyles(theme => ({
    body: {
      height: '100vh'
    }
  }))

export default withController(LoginProvider)(Login)
