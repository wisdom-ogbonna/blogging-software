import React from 'react'
import { Avatar, Grid, Paper } from "@material-ui/core"
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';


function Login() {
    const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto" }
    const AvatarStyle ={ backgroundColor: "green"}
    return (


        <Grid>

            <Paper elevation={10} style={paperStyle}>

                <Grid align="center">
                    <Avatar style={AvatarStyle}>
                        <LockOpenOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>

                </Grid>



            </Paper>

        </Grid>
    )
}

export default Login