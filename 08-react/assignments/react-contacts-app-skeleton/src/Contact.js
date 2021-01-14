import './Contact.css'
import React, {Component} from 'react';

export default class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <h3 className="name">
                    {this.props.name}
                </h3>
                <img className="profileImage" src={this.props.imgUrl}/>
                <div className="deleteIcon" onClick={this.props.onDelete}
                >Delete
                </div>
            </div>
        );
    }
};
