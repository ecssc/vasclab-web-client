import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

describe('Main layout', () => {

    it('renders', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Main />, div);
    });

});
