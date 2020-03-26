 import React from 'react';

 class GoogleAuth extends React.Component {
    
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '861991510996-un7t04v8gg5equ299kauhu44c7upus4g.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    
    render(){
         return (
             <div>
                GoogleAuth
             </div>
         )
     }
 }

 export default GoogleAuth