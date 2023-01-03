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

const Profile = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#F5F5F5',
        fontFamily: 'Montserrat',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '0px',
        boxShadow: 'none',
    }));

    return (
        <>
            <Profile_Wrapper>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }} />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.row1}>
                        <Grid item xs={12} md={6} className={styles.grid1}>
                            <Item className={styles.item1}>
                                <h1>My Profile</h1>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.grid2}>
                            <Item className={styles.item2}>
                                <p>I have gone through many stages in my career and each has informed my current work ethic and philosophy.
                                    I excel in many page design roles in a variety of needs and believe my number one asset is the ability to adapt to any
                                    challenges thrown away.</p>
                                <Stack direction="row" spacing={0}>
                                    <Button variant="contained" className={styles.btn}>Download CV</Button>
                                </Stack>
                            </Item>
                        </Grid>
                    </Grid>
                    <Box />
                </Container>
            </Profile_Wrapper>
        </>
    )
}

const Profile_Wrapper = styled('div')({
    backgroundColor: '#F5F5F5'
})


export default Profile