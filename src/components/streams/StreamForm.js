import React from 'react';
import {Field, reduxForm } from 'redux-form';
// Field is a component so that's whay it starts with capital letter, and 
// reduxForm is a function that will work the same way as connect function react-redux librarry

class StreamForm extends React.Component {
    
    renderError({error, touched}){
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    
    renderInput = ({input, label, meta}) => { // destruct formProps to only input
        
        const classNameAbove = `field ${meta.error && meta.touched ? 'error' : ''}`;
        
        return (
        <div className={classNameAbove}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        )
         /* 
         //basicly the same thing as the one above
         onChange={formProps.input.onChange}
         value={formProps.input.value} */
     }

     
     // if the input is valid (checked by validate method) the method onSubmit will be called 
     //form values are the obj. that contains the name of field and characters user put 
     onSubmit = (formValues) => {
        //  event.preventDefaul() //don't need it , redux form does it for us
        this.props.onSubmit(formValues)
     }
    
    render(){
    return (
        <form className=" ui error form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="title" component={this.renderInput} label="Enter title"/>
            <Field name="description" component={this.renderInput} label="Enter description"/>
            <button className="ui button primary">Submit</button>
        </form>
        )
    }
}
// validate is function that gets call every time an user try to submit the input
const validate = (formValues) => {
    
    const errors = {};
    
    if(!formValues.title){
        errors.title = "you must enter title"
    }

    if(!formValues.description){
        errors.description = "you must enter description"
    }

    return errors;
};

 export default reduxForm({ // when we want to use redux form and connect at the same file 
    form: 'streamForm',
    // validate: validate
    validate
})(StreamForm)

