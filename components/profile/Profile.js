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
                <Container maxWidth="lg" className={styles.container}>
                    <Box sx={{ width: '100%' }} />
                    <h1 className={styles.title} id={props.id}>profile</h1>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.row1}>
                        <Grid item xs={12} md={6} className={styles.grid1}>
                            <Item className={styles.item1}>
                                <h1>My Profile</h1>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.grid2}>
                            <Item className={styles.item2}>
                                <div className={styles.details}>
                                    <p className={styles.pt}>Name :</p>
                                    <p className={styles.pd}>Muhammatsorin Hawae</p>
                                </div>
                                <div className={styles.details}>
                                    <p className={styles.pt}>Date of Birth :</p>
                                    <p className={styles.pd}>December 13, 1997</p>
                                </div>
                                <div className={styles.details}>
                                    <p className={styles.pt}>Email :</p>
                                    <p className={styles.pd}>sorin.13122540@gmail.com</p>
                                </div>
                                <div className={styles.details}>
                                    <p className={styles.pt}>Phone :</p>
                                    <p className={styles.pd}>+669 8029 3887</p>
                                </div>
                            </Item>
                            <Item className={styles.item3}>
                                <p>I have gone through many stages in my career and each has informed my current work ethic and philosophy.
                                    I excel in many page design roles in a variety of needs and believe my number one asset is the ability to adapt to any
                                    challenges thrown away.</p>
                                <Stack direction="row" spacing={0}>
                                    <Button variant="contained" className={styles.btn}>Download CV</Button>
                                </Stack>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.row1}>
                        <Grid item xs={12} md={6} className={styles.grid1}>
                            <Item className={styles.item1}>
                                <h1>Education</h1>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.grid2}>
                            <Item className={styles.my_educate}>
                                <div className={styles.education}>
                                    <div className={styles.university}>
                                        <h3 >2018 - 2022</h3>
                                        <p>Prince of Songkla University, Phuket Campus</p>
                                    </div>
                                    <div className={styles.major}>
                                        <p>Faculty of Engineering, Major Computer Engineer, Phuket, Thailand</p>
                                    </div>
                                </div>
                                <div className={styles.education}>
                                    <div className={styles.university}>
                                        <h3 >2013 - 2018</h3>
                                        <p>Darunsat Witya School</p>
                                    </div>
                                    <div className={styles.major}>
                                        <p>Science - Mathematics Programme, Pattani, Thailand</p>
                                    </div>
                                </div>
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
    backgroundColor: '#E0E0E0'
})


export default Profile