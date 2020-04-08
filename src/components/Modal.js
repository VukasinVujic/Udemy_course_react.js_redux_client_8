import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';


const Modal = props => {
    return ReactDom.createPortal(
        // every time the modal shows up , and user just click outside of it , he will be rerouted to home
        <div 
        onClick={ () => history.push('/')}
        className="ui dimmer modals visible active"
        >
            {/* e.stopPropagation we use to stop event onClick to posible buble up to onClick in parent element  */}
             <div
             onClick={(e)=> e.stopPropagation()}
            className="ui standard modal visible active"
              >
    {/* everything from header till ui cancel button is from Semantic-ui Modules/Modal/Actions */}
                <div className="header">Delete Stream</div>    
                <div className="content">
                    <p>Are you sure you want to delete this stream</p>
                </div>
                 <div className="actions">
                     <div className="ui primary button">Delete</div>
                     <div className="ui button">Cancel</div>
                 </div>
             </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;
