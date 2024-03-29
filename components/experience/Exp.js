import React from 'react'
import styles from '../experience/Exp.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ExplicitIcon from '@mui/icons-material/Explicit';
import Divider from '@mui/material/Divider';

const Exp = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#F5F5F5',
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        borderRadius: '0px',
        boxShadow: 'none',
    }));

    return (
        <>
            <Exp_wrapper>
                <CssBaseline />
                <Container maxWidth="lg" className={styles.container}>
                    <h1 className={styles.title} id={props.id}>Experience</h1>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.grid_container}>
                            <Grid item xs={12}>
                                <div className={styles.item_wrap}>
                                    <Item className={styles.item_icon}>
                                        <ExplicitIcon sx={{ fontSize: 40 }} />
                                    </Item>
                                    <Item className={styles.item_des}>
                                        <div>
                                            <p>2020 - 2021</p>
                                            <h3>Prepare Project & Project I</h3>
                                        </div>
                                        <div className={styles.nature_of_work}>
                                            <p className={styles.p1}>Full - Stack Developer</p>
                                            <p>Develop a web application about storing product data
                                                that personnel within the university use to withdraw.
                                                Developed with React js, Express Js and MySQL. ( 30%
                                                progress </p>
                                        </div>
                                    </Item>
                                </div>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.item_wrap}>
                                    <Item className={styles.item_icon}>
                                        <ExplicitIcon sx={{ fontSize: 40 }} />
                                    </Item>
                                    <Item className={styles.item_des}>
                                        <div>
                                            <p>2021</p>
                                            <h3>Project II</h3>
                                        </div>
                                        <div className={styles.nature_of_work}>
                                            <p className={styles.p1}>Full - Stack Developer</p>
                                            <p>Developed a web application about storing product
                                                data that personnel within the university used to
                                                withdraw. Developed with React Js, Express Js and
                                                MySQL. ( 100% progress )</p>
                                        </div>
                                    </Item>
                                </div>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.item_wrap}>
                                    <Item className={styles.item_icon}>
                                        <ExplicitIcon sx={{ fontSize: 40 }} />
                                    </Item>
                                    <Item className={styles.item_des}>
                                        <div>
                                            <p>2022</p>
                                            <h3>Practical Training</h3>
                                        </div>
                                        <div className={styles.nature_of_work}>
                                            <p className={styles.p1}>Full - Stack Developer</p>
                                            <p>Develop a website about selling products
                                                ( Ecommerce ). Developed with Angular and Firebase
                                            </p>
                                        </div>
                                    </Item>
                                </div>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.item_wrap}>
                                    <Item className={styles.item_icon}>
                                        <ExplicitIcon sx={{ fontSize: 40 }} />
                                    </Item>
                                    <Item className={styles.item_des}>
                                        <div>
                                            <p>2023</p>
                                            <h3>Personal Web Portfolio</h3>
                                        </div>
                                        <div className={styles.nature_of_work}>
                                            <p className={styles.p1}>Front - End Developer</p>
                                            <p>Develop a personal portfolio website using React Js</p>
                                        </div>
                                    </Item>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Exp_wrapper>
        </>
    )
}

const Exp_wrapper = styled('div')({
    backgroundColor: '#E0E0E0'
})

export default Exp
