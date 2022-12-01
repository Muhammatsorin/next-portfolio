import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SiFacebook, SiInstagram } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MenuItems } from './MenuItem';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const handleClose = () => {
        setClick(false)
    }

    const handleClick = () => {
        setClick(!click)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <>
            <Container>
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <div className='nav-title'>
                        <h1>Portfolio</h1>
                    </div>
                    <div className='nav-menu-icon' onClick={handleClick}>
                        {
                            click ? <i><GrClose /></i> : <i><GiHamburgerMenu /></i>
                        }
                    </div>
                    <div className='nav-list'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            {
                                MenuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a className={item.className} href={item.url} onClick={handleClose}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='nav-media-icons'>
                        <i>
                            <SiFacebook />
                        </i>
                        <i>
                            <SiInstagram />
                        </i>
                    </div>
                </nav>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: sticky;
    top: 0;
    
    .navbar {
        background: #12c2e9;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }

    .navbar.active {
        background: #12c2e9;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .nav-title {
        color: black;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 1rem;
        display: flex;
        align-items: center;
        font-family: "Lobster";
    }

    .nav-list {
        ul {
            display: flex;
            align-items: center;
        }
    }

    .nav-menu {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 20px;
        list-style: none;
        text-align: center;
        width: 60vw;
        justify-content: end;
        margin-right: 2rem;
        font-family: "Montserrat-Bold";
    }

    .nav-link {
        color: black;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
    }

    .nav-link:hover {
        background-color: white;
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }

    .nav-menu-icon {
        display: none;
    }

    .nav-media-icons {
        width: 80px;
        margin-left: 5rem;
        display: flex;
        justify-content: space-between;

        i {
            cursor: pointer;
        }
    }

    @media (max-width: 960px) {
        .navbar {
            position: relative;
        }

        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 30vh;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }

        .nav-menu.active {
            left: 0;
            background: #12c2e9;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
            margin: 0;
        }

        .nav-list {
            ul {
                padding: 0px 0px 0px 0px;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .nav-title {
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(25%, 80%);

            h1 {
                margin: 0;
            }
        }

        .nav-menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
        }

        .nav-media-icons {
            display: none;
        }
    }
`

export default Navbar