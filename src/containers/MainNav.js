import { connect } from 'react-redux';

import BaseMainNav from '../components/MainNav';

const mapStateToProps = state => ({
    ...state.user.organisation,
});

const MainNav = connect(mapStateToProps)(BaseMainNav);

export default MainNav;
