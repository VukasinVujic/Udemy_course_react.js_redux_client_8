import React from 'react'
import {BrowserRouter,Route, Link } from 'react-router-dom'

const PageOne = () => {
    return( <div>
        Page one
        <Link to="/pageTwo"> Navigate to page two</Link>
        </div>
    )
}

const PageTWo = () => {
    return <div>Page two
         <button>click me</button>
         <Link to="/">Navigate to page one</Link>
         </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pageTwo" component={PageTWo}/>

            </div>
            </BrowserRouter>

        </div>
    )
}

export default App