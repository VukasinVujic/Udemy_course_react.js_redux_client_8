import React from 'react';
import {Field, reduxForm } from 'redux-form';
// Field is a component so that's whay it starts with capital letter, and 
// reduxForm is a function that will work the same way as connect function react-redux librarry

class StreamCreate extends React.Component {
     renderInput({input, label}) { // destruct formProps to only input
      
      
        return ( 
        <div className="field">
            <label>{label}</label>
            <input {...input} />
        </div>
        )
         /* 
         //basicly the same thing as the one above
         onChange={formProps.input.onChange}
         value={formProps.input.value} */

     }

     onSubmit(formValues){
        //  event.preventDefaul() //don't need it , redux form does it for us
        console.log(formValues)

     }
    
    render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <Field name="title" component={this.renderInput} label="Enter title"/>
            <Field name="description" component={this.renderInput} label="Enter description"/>
            <button className="ui button primary">Submit</button>
        </form>
        )
    }
}

const validate = (formValues) => {
    
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)