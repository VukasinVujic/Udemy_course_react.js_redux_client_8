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
                <div className="header">{props.title}</div>    
                <div className="content">{props.content}</div>
                 <div className="actions">{props.actions}</div>
             </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;
