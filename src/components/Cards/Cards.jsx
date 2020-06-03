import React from 'react'
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from  '@material-ui/core'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    // console.log(confirmed)
    if (!confirmed) {
        return 'loading'
    }
    // console.log(props);
    return (
        <div className={styles.container}>
           <Grid container spacing={3} justify="center">
           <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                <CardContent>
                {/* use for texts */}
                    <Typography color = "textSecondary" gutterBottom > Infected</Typography>
                    <Typography variant = "h5">
                    {/* {confirmed.value} */}
                    <CountUp
                        start = {0}
                        end = {confirmed.value}
                        duration = {2.5}
                        separator = {","}
                   />
                    </Typography>
    <Typography color = "textSecondary" > {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of active cases of COVID-19 </Typography>
                </CardContent>
            </Grid>

            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                {/* use for texts */}
                    <Typography color = "textSecondary" gutterBottom > Recoveries</Typography>
                    <Typography variant = "h5">  
                    <CountUp
                        start = {0}
                        end = {recovered.value}
                        duration = {2.5}
                        separator = {","}
                   />
                   </Typography>
                    <Typography color = "textSecondary" > {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of recoveries from of COVID-19 </Typography>
                </CardContent>
            </Grid>
            
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                {/* use for texts */}
                    <Typography color = "textSecondary" gutterBottom > Deaths</Typography>
                    <Typography variant = "h5">  
                    <CountUp
                        start = {0}
                        end = {deaths.value}
                        duration = {2.5}
                        separator = {","}
                   />
                    </Typography>
                    <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of deaths deaths from COVID-19 </Typography>
                </CardContent>
            </Grid>
           </Grid>
       </div>

    )
}

export default Cards
