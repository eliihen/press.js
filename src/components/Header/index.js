import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Organizes all of the components in this file into a finished header.
 */
const Header = () => (
    <HeaderWrapper>
        <div is uk-grid>
            <div className="uk-width-2-3@m uk-light"><h1 className="uk-heading-primary">Press.js</h1></div>
            <div className="uk-width-1-3@m" id="nav">
                <NavBar>
                    <NavItem to="/" exact={true} >Home</NavItem>
                    <NavItem to="/posts" exact={true} >Posts</NavItem>
                </NavBar>
            </div>
        </div>
    </HeaderWrapper>
)

const HeaderWrapper = props => (
    <header className="uk-section uk-section-primary uk-preserve-color">
        <div className="uk-container">
            {props.children}
        </div>
    </header>
)

/**
 * Component for the navigation bar.
 */
const NavBar = props => (
    <nav is uk-navbar class="uk-navbar-container">
        <ul className="uk-navbar-nav">
            {props.children}
        </ul>
    </nav>
)

const NavItem = ({children, to, exact}) => (
    <Route path={to} exact={exact} children={({match}) => (
        <li className={match ? "uk-active" : null}>
            <Link to={to}>{children}</Link>
        </li>
    )}/>
);

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Header;
