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
                this.setState({isSignedIn: this.auth.isSignedIn.get()}) 
                this.auth.isSignedIn.listen(this.onAuthChange);  
           })                                                          
        });
    }

    onAuthChange = () =>{
            this.setState({isSignedIn: this.auth.isSignedIn.get()}) // update state with function from google aouth object
    }                                                           // that is checking is user sign in
    
    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" /> 
                    Sign out
                </button>
            )
            
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )
            
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