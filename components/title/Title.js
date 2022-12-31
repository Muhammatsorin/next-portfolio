import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Styled from 'styled-components'
import Img from 'next/image'
import Divider from '@mui/material/Divider';
import { GrInstagram, GrFacebook } from "react-icons/gr";

const Title = () => {

    return (
        <>
            <TitleWrap>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }}>
                        <div className='grid-wrap'>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: 'flex', alignItems: 'center' }} className="row-1">
                                <Grid xs={12} md={6} className="row-1-col-1">
                                    <div className='img'>
                                        <Img src='/images/me.jpg'
                                            width={500}
                                            height={400}
                                            priority
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6} className="row-1-col-2">
                                    <div className='title-details'>
                                        <div className='my-name'>
                                            <h2>Hi, I'm </h2>
                                            <h1>SOREEN</h1>
                                        </div>
                                        <div className='job'>
                                            <h3>FRONTEND DEVELOPER</h3>
                                        </div>
                                        <p>Hello, My name is Muhammatsorin Hawae. I'm Frontend developer. Development and learning new things It's what made me grow even more.</p>
                                    </div>
                                    <Divider />
                                    <div className='social-icons'>
                                        <div className='facebook'>
                                            <GrFacebook />
                                        </div>
                                        <div className='instragram'>
                                            <GrInstagram />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </Container>
            </TitleWrap>
        </>
    )
}

const TitleWrap = Styled.div`

    .row-1-col-2 {
        padding: 0px 0px 0px 0px;
    }

    .grid-wrap {
        padding: 0;
        display: flex;
    }

    .img {
        text-align: center;
        Img {
            border: 1px solid #BFBFBF;
            background-color: white;
            box-shadow: 10px 10px 5px #aaaaaa;
            border-radius: 15%;
        }
    }

    .my-name {
        display: flex;
        align-items: center;

        h1 {
            margin: 0px 0px 0px 0px;
            font-size: 50px;
            color: #d25a9f;
        }

        h2 {
            margin: 0px 20px 0px 0px;
            font-size: 50px;
            color:  #005a84;
        }
    }

    .job {
        h3 {
            margin: 0px 0px 0px 0px;
            color:  #005a84;
        }
    }

    p {
        color:  #005a84;
    }

    .social-icons {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 20px;
        font-size: 30px;

        .facebook {
            margin-right: 40px;
            cursor: pointer;
            color:  #005a84;

            :hover {
                color: #d25a9f;
            }
        }

        .instragram {
            cursor: pointer;
            color:  #005a84;

            :hover {
                color: #d25a9f;
            }
        }
    }


    @media (min-width: 320px) {
        
        .row-1 {
            margin-top: 20px;
        }

        .row-1-col-2 {
            margin-top: 15px;
        }

        .title-details {
            text-align: center;
        }

        .img {
            Img {
                width: 250px;
                height: 200px;
            }
        }
        
        .my-name {
            display: flex;
            align-items: center;
            justify-content: center;

            h1 {
                margin: 0px 0px 0px 0px;
                font-size: 40px;
                font-weight: 900;
                color: #d25a9f;
            }

            h2 {
                margin: 0px 20px 0px 0px;
                font-size: 30px;
                color:  #005a84;
            }
        }

        .job {
            h3 {
                margin: 0px 0px 0px 0px;
                color:  #005a84;
            }
        }

        p {
            color:  #005a84;
        }
    }

    @media (min-width: 900px) {

        .row-1-col-2 {
            margin: 0;
        }

        .title-details {
            text-align: center;
        }

        .img {
            Img {
                width: 350px;
                height: 300px;
            }
        }
        
        .my-name {
            display: flex;
            align-items: center;
            justify-content: center;

            h1 {
                margin: 0px 0px 0px 0px;
                font-size: 40px;
                font-weight: 900;
                color: #d25a9f;
            }

            h2 {
                margin: 0px 20px 0px 0px;
                font-size: 30px;
                color:  #005a84;
            }
        }

        .job {
            h3 {
                margin: 0px 0px 0px 0px;
                color:  #005a84;
            }
        }

        p {
            color:  #005a84;
        }
    }

    @media (min-width: 1200px) {

        .row-1-col-2 {
            margin: 0;
        }

        .title-details {
            text-align: start;
            padding-left: 50px;
        }

        .img {
            Img {
                width: 500px;
                height: 400px;
            }
        }

        .my-name {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            h1 {
                margin: 0px 0px 0px 0px;
                font-size: 60px;
                font-weight: 900;
                color: #d25a9f;
            }

            h2 {
                margin: 0px 20px 0px 0px;
                font-size: 50px;
                color:  #005a84;
            }
        }

        .job {
            h3 {
                margin: 0px 0px 0px 0px;
                color:  #005a84;
            }
        }

        p {
            color:  #005a84;
        }
    }

    
`

export default Title