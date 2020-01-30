import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import colors from '../../constants.js';
import './header.css';

const Header = props => {
    return(
        <main className="headerStyle" style={colors.headerColor}>
            <div className="primaryTitleStyle">Lighting Talks</div>
            <div className="secondaryTitleStyle">For Tech Meetups</div>
        </main>
    );
}

export default Header;

