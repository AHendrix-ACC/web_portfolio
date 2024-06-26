import React, { Component } from 'react';
import { Link, useLocation, usedLocation } from 'react-router-dom';
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "ABOUT";
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    }

    const NavPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === getNavPositionClass;
    }; 
    
    const renderNavLink = (to, imgSrc, atlText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent? "nav-link current" : "nav-link";
        
        return(
            <Link to={to} className ={linkClass}>
            <img src={imgSrc} alt={atlText} />
            {isCurrent && <h1 className="page-title">{pageTitle}</h1>}

            </Link>
        );
    };
    
    return (
        <nav className={`nav ${NavPositionClass}`}>
            {renderNavLink(
                "/",
                astronautHelmet,
                "astronaut helmet icon",
                "nav-about"
            )}

        </nav>
    );
}
