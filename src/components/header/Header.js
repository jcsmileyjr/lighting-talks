import React from 'react';
import colors from '../../constants.js';
import './header.css';

const Header = props => {
    return(
        <main style={colors.lightingBlue}>
            <div className="primaryTitleStyle">{props.title}</div>
        </main>
    );
}

export default Header;

