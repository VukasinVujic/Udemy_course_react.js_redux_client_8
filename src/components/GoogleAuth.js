 import React from 'react';
 import {connect} from 'react-redux';
 import {signIn, signOut} from '../actions';

 class GoogleAuth extends React.Component {
        // state = { isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => { // load gapi library
            window.gapi.client.init({       // when it loadas, it will call this arrow function and 
                                            // initialize with oauth client id 
                clientId: '861991510996-un7t04v8gg5equ299kauhu44c7upus4g.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{   // since '.init' is async func. and return promise, use then to
                this.auth = window.gapi.auth2.getAuthInstance(); // put an google aouth object in this class
               
               
                // this.setState({isSignedIn: this.auth.isSignedIn.get()}) 
                this.onAuthChange(this.auth.isSignedIn.get()) // change auth state inside redux store
                this.auth.isSignedIn.listen(this.onAuthChange);  // waiting for a user to click
           })                                                          
        });
    }

    onAuthChange = (isSignedIn) =>{ //we get boolean by default as argument,that we get from 'listen'
                            //isSignedIn is a property in state
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId()); //signIn is action creater
        } else {
            this.props.signOut(); // //signOut is action creater
        }     
    
        /* old version , not need since we get boolean by default of isSignedIn    
        this.setState({isSignedIn: this.auth.isSignedIn.get()}) // update state with function from google aouth object
                                                                // that is checking is user sign in
        */                                                                
    }                                                           
    
    onSignInClick = () => {
        this.auth.signIn();//built in method from Google auth object
    }

    onSignOutClick = () => {
        this.auth.signOut();//built in method from Google auth object
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null ) {
            return null;
        } else if (this.props.isSignedIn){
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

 const mapStateToProps = (state) =>{
    return  {isSignedIn: state.auth.isSignedIn}
 }

 export default connect(
     mapStateToProps,
    {signIn,signOut}
    )(GoogleAuth);