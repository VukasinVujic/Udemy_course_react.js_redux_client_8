 import React from 'react';

 class GoogleAuth extends React.Component {
    
    state = { isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => { // load gapi library
            window.gapi.client.init({       // when it loadas it will call this arrow function and 
                                            // initialize with oauth client id 
                clientId: '861991510996-un7t04v8gg5equ299kauhu44c7upus4g.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{   // since '.init' is async func. and return promise, use then to
                this.auth = window.gapi.auth2.getAuthInstance(); // put an google aouth object in this class
                this.setState({isSignedIn: this.auth.isSignedIn.get()}) // update state with function from aouth object
            })                                                          // that is checking is user sign in
        });
    }
    
    renderAuthButton(){
        if(this.state.isSignedIn === null) {
            return <div>I don't know if we are sign in</div>
        } else if (this.state.isSignedIn){
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render(){
         return (
             <div>
                {this.renderAuthButton()}
             </div>
         )
     }
 }

 export default GoogleAuth