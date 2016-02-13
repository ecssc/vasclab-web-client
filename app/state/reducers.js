import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'

import ui from './reducers/ui'
import user from './reducers/user'

export default combineReducers({
    ui,
    user,
    routing: routeReducer,
    browser: responsiveStateReducer,
})

