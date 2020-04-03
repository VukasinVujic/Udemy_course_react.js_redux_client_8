import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    
    // you must load information from your db on every page, just in case if user decide
    // to go directly to that page and skiping the regular loading page
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues);
    }
    
    //since render works first and then componentDidMount, just put that loading so to avoid error
    // of can't read undifeiend 
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (       
            <div>
                {/* initialValues is built in value in redux-form, we are putting title and description
                because we have to match what is in StreamForm in <Field /> component 
                 */}
                <h3>Edit a stream</h3>
                 {/* initialValues={{title: 'edit me ', description: 'change me to'}} */}
                 {/* title and description will be taken form this.props.stream, that was send
                 down, to formStream
                  */}
                  {/* .pick is used so you could send only title and description key/values
                  to the StreamForm */}
                <StreamForm
                 initialValues={_.pick(this.props.stream, 'title', 'description')}
                  onSubmit={this.onSubmit}
                />
            </div>
        )    
    }
}
    
// ownProps are the props that StreamEdit component is receiving (in this case from Route in app.js)
const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] }  
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);