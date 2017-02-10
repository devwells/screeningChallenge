import React, { Component } from 'react';
import './Thumbnail.css';

class Thumbnail extends Component {
    render() {
        return (
            <div className={"thumbnail "} id={'thumbnail' + this.props.index}>
                <a href="#" onClick={this.props.clickHandler}><img className="thumbnail-img" id={this.props.personNumber} src={this.props.imgUrl} alt={"image of " + this.props.name} /></a>
            </div>
        );
    }
}

export default Thumbnail;
