import React from 'react';
import ReactDOM from 'react-dom';
import NoMatch from './NoMatch';

describe('NoMatch view', () => {

    it('renders', () => {
        const div = document.createElement('div');

        ReactDOM.render(<NoMatch />, div);
    });

});
