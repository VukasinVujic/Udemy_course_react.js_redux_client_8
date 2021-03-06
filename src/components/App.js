import React from 'react';
import {Router,Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'

// 861991510996-un7t04v8gg5equ299kauhu44c7upus4g.apps.googleusercontent.com
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                {/* we changed BrowserRouter with Router here */}
            <div>
            <Header />
                <Switch>
                 <Route path="/" exact component={StreamList} />
                 <Route path="/streams/new" exact component={StreamCreate} />
                 <Route path="/streams/edit/:id" exact component={StreamEdit} />        
                 <Route path="/streams/delete/:id" exact component={StreamDelete} />        
                 <Route path="/streams/:id" exact component={StreamShow} />        
                </Switch>

            </div>
            </Router>

        </div>
    )
}

export default App