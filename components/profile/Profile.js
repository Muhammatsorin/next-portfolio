import React from "react"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from './Profile.module.css'
import Button from '@mui/material/Button';

const Profile = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#E0E0E0',
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
                <Container maxWidth="lg" className={styles.container}>
                    <h1 className={styles.title} id={props.id}>profile</h1>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} className={styles.grid1}>
                            <Item className={styles.grid1_item1}>
                                <h1>My Profile</h1>
                            </Item>
                            <Item className={styles.grid1_item2}>
                                <div>
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
                                </div>
                                <div className={styles.download_cv}>
                                    <p>I have gone through many stages in my career and each has informed my current work ethic and philosophy.
                                        I excel in many page design roles in a variety of needs and believe my number one asset is the ability to adapt to any
                                        challenges thrown away.</p>
                                    <a href="Modern Professional Resume.pdf" download="Modern Professional Resume.pdf">
                                        <Button variant="contained" className={styles.btn}>Download CV</Button>
                                    </a>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} className={styles.grid2}>
                            <Item className={styles.grid2_item1}>
                                <h1>Education</h1>
                            </Item>
                            <Item className={styles.grid2_item2}>
                                <div className={styles.education}>
                                    <div className={styles.university}>
                                        <h3>2018 - 2022</h3>
                                        <p>Prince of Songkla University, Phuket Campus</p>
                                    </div>
                                    <div className={styles.major}>
                                        <p>Faculty of Engineering, Major Computer Engineer, Phuket, Thailand</p>
                                    </div>
                                </div>
                                <div className={styles.education}>
                                    <div className={styles.university}>
                                        <h3>2013 - 2018</h3>
                                        <p>Darunsat Witya School</p>
                                    </div>
                                    <div className={styles.major}>
                                        <p>Science - Mathematics Program, Pattani, Thailand</p>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Profile_Wrapper>
        </>
    )
}

const Profile_Wrapper = styled('div')({
    backgroundColor: '#E0E0E0'
})


export default Profile