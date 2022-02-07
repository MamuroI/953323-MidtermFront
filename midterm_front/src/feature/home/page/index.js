import { makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { withController } from '../../../hoc/withController';
import { HomeProvider } from '../controller/';

function Home() {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' className={classes.body}>
        <Typography>This is home page</Typography>
      </Grid>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  body: {
    height: '100vh'
  }
}))

export default withController(HomeProvider)(Home)
