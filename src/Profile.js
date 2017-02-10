import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className={"profile " + this.props.className} id={'pane' + this.props.index}>
                <h2>{this.props.name}</h2>
                <img className="profile-img" id={'thumb' + this.props.index} src={this.props.imgUrl} alt={"image of " + this.props.name} />
                <p className="profile-desc">
                    description
                </p>
            </div>
        );
    }
}

export default Profile;
