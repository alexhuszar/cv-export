/**
 * Created by Alexandru Huszar on 3/19/2021.
 */
import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, TextField, Grid, Button} from '@material-ui/core';

export const styles = theme => ({
    login: {
        padding: theme.spacing(2),
    },
})

/**
 * Login
 */
function Login(props) {
    const {classes, count } = props;
    const handleSubmit = event => {
        console.log(event);
    }
    /**
     * Render the component
     *
     * @return {JSX.Element}
     */
    return (
        <div className={classes.login}>
            {count}
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={8}>
                    <TextField
                        id="outlined-username"
                        label="Username"
                        type="text"
                        autoComplete="current-username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="outlined-username"
                        label="Password"
                        type="password"
                        autoComplete="current-username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Submit
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )

}

Login.propTypes = {
    classes: PropTypes.object,
    count: PropTypes.string,
};

Login.defaultProps = {
    classes: {},
};

export default withStyles(styles)(Login);
