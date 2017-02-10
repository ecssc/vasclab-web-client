import React from 'react';
import { Grid } from 'react-flexbox-grid/lib/index';

import MainAppBar from '../../components/MainAppBar';

const Main = ({ children }) => (
    <div>
        <MainAppBar />
        <Grid>
            {children}
        </Grid>
    </div>
);

Main.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Main;
