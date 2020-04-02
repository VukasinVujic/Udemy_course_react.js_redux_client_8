import React from 'react'
import { connect } from 'react-redux'
import {fetchStream} from '../../actions'

class StreamEdit extends React.Component {
    
    // you must load information from your db on every page, just in case if user decide
    // to go directly to that page and skiping the regular loading page
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    
    //since render works first and then componentDidMount, just put that loading so to avoid error
    // of can't read undifeiend 
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (       
            <div>
                {this.props.stream.title}
            </div>
        )    
    }
}
    
// ownProps are the props that StreamEdit component is receiving (in this case from Route in app.js)
const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] }  
}

export default connect(mapStateToProps,{fetchStream})(StreamEdit);