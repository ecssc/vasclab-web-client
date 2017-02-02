import React from 'react';
import { Grid } from 'react-flexbox-grid/lib/index';

const Main = ({ children }) => (
    <Grid>
        {children}
    </Grid>
);

Main.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Main;
