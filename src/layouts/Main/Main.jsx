import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

const Main = ({ children }) => (
    <Grid fluid>
        { children }
    </Grid>
);

Main.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Main;
