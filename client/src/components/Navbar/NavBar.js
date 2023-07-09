import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { memories } from '../../images'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LOGOUT } from '../../constants/actionTypes';
import useStyles from './styles'
import decode from 'jwt-decode'



const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT });
        setUser(null);
        localStorage.removeItem('profile');
        setTimeout(() => {
            console.log(localStorage.getItem('profile')); // Check if the item is removed
        }, 100);
        setTimeout(() => {
            navigate('/auth');
        }, 100);
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));

        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
                setUser(null);
            }

        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Golden Time</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" width="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Log In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar