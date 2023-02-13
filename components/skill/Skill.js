import React from "react"
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import styles from '../skill/Skill.module.css'
import Img from 'next/image'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Skill = (props) => {

    const jsValue = 3.5;
    const HTMLValue = 4;
    const cssValue = 4;

    const Item = styled(Paper)(({ theme }) => ({
        fontFamily: 'Montserrat',
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        borderRadius: 'none',
        boxShadow: 'none',
    }));

    return (
        <>
            <Container maxWidth="lg" className={styles.container}>
                <Box sx={{ width: '100%' }} />
                <h1 className={styles.title} id={props.id}>Skills</h1>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={12}>
                        <div className={styles.sub_title}>
                            <h3>Programming Languages</h3>
                        </div>
                        <div className={styles.item_wrap}>
                            <Item className={styles.item}>
                                <Grid xs={12} md={6} className={styles.rating_title}>
                                    <div>
                                        <p>Javascript</p>
                                    </div>
                                    <div className={styles.img}>
                                        <Img src='/images/javascript.png'
                                            width={80}
                                            height={70}
                                            priority
                                            alt="js"
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className={styles.star_icon}>
                                    <Rating
                                        name="text-feedback"
                                        value={jsValue}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.6 }} fontSize='inherit' />}
                                    />
                                    <Box sx={{ ml: 3 }}>{labels[jsValue]}</Box>
                                </Grid>
                            </Item>
                            <Item className={styles.item}>
                                <Grid xs={12} md={6} className={styles.rating_title}>
                                    <div>
                                        <p>HTML</p>
                                    </div>
                                    <div className={styles.img}>
                                        <Img src='/images/html.png'
                                            width={80}
                                            height={70}
                                            priority
                                            alt="html"
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className={styles.star_icon}>
                                    <Rating
                                        name="text-feedback"
                                        value={HTMLValue}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.6 }} fontSize='inherit' />}
                                    />
                                    <Box sx={{ ml: 3 }}>{labels[HTMLValue]}</Box>
                                </Grid>
                            </Item>
                            <Item className={styles.item}>
                                <Grid xs={12} md={6} className={styles.rating_title}>
                                    <div>
                                        <p>CSS</p>
                                    </div>
                                    <div className={styles.img}>
                                        <Img src='/images/css.png'
                                            width={80}
                                            height={70}
                                            priority
                                            alt="css"
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className={styles.star_icon}>
                                    <Rating
                                        name="text-feedback"
                                        value={cssValue}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.6 }} fontSize='inherit' />}
                                    />
                                    <Box sx={{ ml: 3 }}>{labels[cssValue]}</Box>
                                </Grid>
                            </Item>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className={styles.sub_title}>
                            <h3>Framework</h3>
                        </div>
                        <div className={styles.item_wrap}>
                            <Item className={styles.item}>
                                <Grid xs={12} md={6} className={styles.rating_title}>
                                    <div>
                                        <p>React Js</p>
                                    </div>
                                    <div className={styles.img}>
                                        <Img src='/images/reactjs.png'
                                            width={80}
                                            height={70}
                                            priority
                                            alt="react"
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className={styles.star_icon}>
                                    <Rating
                                        name="text-feedback"
                                        value={jsValue}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.6 }} fontSize='inherit' />}
                                    />
                                    <Box sx={{ ml: 3 }}>{labels[jsValue]}</Box>
                                </Grid>
                            </Item>
                            <Item className={styles.item}>
                                <Grid xs={12} md={6} className={styles.rating_title}>
                                    <div>
                                        <p>Next Js</p>
                                    </div>
                                    <div className={styles.img}>
                                        <Img src='/images/nextjs.png'
                                            width={80}
                                            height={50}
                                            priority
                                            alt="next"
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className={styles.star_icon}>
                                    <Rating
                                        name="text-feedback"
                                        value={jsValue}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.6 }} fontSize='inherit' />}
                                    />
                                    <Box sx={{ ml: 3 }}>{labels[jsValue]}</Box>
                                </Grid>
                            </Item>

                        </div>
                    </Grid>
                </Grid>
                <Box />
            </Container>
        </>
    )
}


export default Skill