import React, { Component } from 'react';

class App extends Component {
    /**
     * Component will mount event handler.
     *
     * Checks the authentication status of the current user.
     */
    componentWillMount() {
        this.props.dispatch(() => {});
    }

    /**
     * Renders the application.
     *
     * @return {XML}
     */
    render() {
        return (this.props.children);
    }
}

App.defaultProps = {
    dispatch: () => {},
    children: (<div />),
};

App.propTypes = {
    dispatch: React.PropTypes.func,
    children: React.PropTypes.element,
};

export default App;
