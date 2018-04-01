import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1>{props.children}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    );
}
Header.defaultProps = {
    subtitle: "Get active after work!"
};

export default Header;