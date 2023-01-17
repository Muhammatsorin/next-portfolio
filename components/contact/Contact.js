import React, { useState } from 'react'
import styles from '../contact/Contact.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Contact = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        border: '2px solid white',
        borderRadius: '5px',
        boxShadow: '5px 10px 18px #888888'
    }));

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" className={styles.container}>
                <h1 className={styles.title} id={props.id}>Contact Me</h1>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} sx={{ marginTop: '20px' }}>
                            <Item>
                                <div className={styles.item_wrap}>
                                    <div className={styles.icon}>
                                        <PhoneAndroidIcon sx={{ fontSize: 70 }} />
                                    </div>
                                    <div className={styles.des}>
                                        <h3>Contact Number</h3>
                                        <p>+669 8029 3887</p>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginTop: '20px' }}>
                            <Item>
                                <div className={styles.item_wrap}>
                                    <div className={styles.icon}>
                                        <EmailIcon sx={{ fontSize: 70 }} />
                                    </div>
                                    <div className={styles.des}>
                                        <h3>Email Address</h3>
                                        <p>sorin.13122540@gmail.com</p>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                    <FormControl>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '30px' }} className={styles.form_item}>
                            <Grid item xs={12} md={6}>
                                <Item className={styles.item_form}>
                                    <p>Your Name :</p>
                                    <TextField
                                        onChange={handleChange}
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item className={styles.item_form}>
                                    <p>Your Email :</p>
                                    <TextField
                                        onChange={handleChange}
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item className={styles.item_form}>
                                    <p>Subject :</p>
                                    <TextField
                                        onChange={handleChange}
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Subject"
                                        variant="outlined"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item className={styles.item_form}>
                                    <p>Message :</p>
                                    <TextField
                                        onChange={handleChange}
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Message"
                                        variant="outlined"
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                    </FormControl>
                    <Stack spacing={2} direction="row" className={styles.btn_wrap}>
                        <Button variant="contained" className={styles.btn}>Submit</Button>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default Contact