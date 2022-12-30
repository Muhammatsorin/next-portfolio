import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
                            click ? <i><GrClose/></i> : <i><GiHamburgerMenu /></i>
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
                </nav>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: sticky;
    top: 0;
    
    .navbar {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }

    .navbar.active {
        background-color: white;
    }

    .nav-title {
        color: #005a84;
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
        grid-gap: 50px;
        list-style: none;
        text-align: center;
        color: #005a84;
        width: 80vw;
        justify-content: end;
        margin-right: 2rem;
        font-family: "Montserrat-Bold";
    }

    .nav-link {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
    }

    .nav-link:hover {
        color: #d25a9f;
    }

    .nav-link:hover::after {
        content: "";
        width: 100%;
        border-bottom: 2px solid #333;
        border-color: #d25a9f;
        position: absolute;
        bottom: 0;
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
            top: 150px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }

        .nav-menu.active {
            left: 0;
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
            color: #005a84;
        }

        .nav-media-icons {
            display: none;
        }
    }
`

export default Navbar