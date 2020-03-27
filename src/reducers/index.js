import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  authReducer  from './authReducer';

export default combineReducers ({
    // replaceMe: () => 'lallaalall'
    auth: authReducer,
    form: formReducer //  built in reducer
});