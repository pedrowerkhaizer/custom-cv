import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


export const NavContainer = styled.div`
background-color: var(--background-color);
`

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px)/4); 
    z-index: 10;
`

export const NavLink = styled(Link)`
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secundaryTextColor);
    text-decoration: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        border-bottom: 3px solid var(--secundaryTextColor);
        color: var(--darkGray);
    }
    &.active{
        color: var(--textColor);
        border-bottom: none !important;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 75%) !important;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`

export const NavBtnLink = styled.a`
    font-weight:700;
    border-radius: 30px;
    background: #21ED68;
    padding: 10px 22px;
    color: #161320;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    @media screen and (max-width: 768px){
        padding: 6px 16px;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`