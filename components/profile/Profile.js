import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from './Profile.module.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Profile = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        fontFamily: 'Montserrat',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '0px',
        boxShadow: 'none',
    }));

    return (
        <>
            
        </>
    )
}

const Profile_Wrapper = styled('div')({
    backgroundColor: '#E0E0E0'
})


export default Profile