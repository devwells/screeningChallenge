import React, { Component } from 'react';
import Profile from './Profile';
import Thumbnail from './Thumbnail';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: 'slide',
                person1: {
                    name: 'Ada',
                    imgUrl: require('../img/lovelace.jpg'),
                    id: 'thumbnail8',
                },
                person2: {
                    name: 'Grace',
                    imgUrl: require('../img/hopper.jpg'),
                    id: 'thumbnail9',
                },
                person3: {
                    name: 'Sally',
                    imgUrl: require('../img/ride.jpg'),
                    id: 'thumbnail10',
                },
                person4: {
                    name: 'placeholder ',
                    imgUrl: ' ',
                    id: 'thumbnail4',
                },
                person5: {
                    name: 'Marie ',
                    imgUrl: require('../img/curie.jpg'),
                    id: 'thumbnail1',
                },
                person6: {
                    name: 'Ruthe ',
                    imgUrl: require('../img/farmer.jpg'),
                    id: 'thumbnail2',
                },
                person7: {
                    name: 'Harriet ',
                    imgUrl: require('../img/tubman.jpg'),
                    id: 'thumbnail3',
                },
                person8: {
                    name: 'Emmy ',
                    imgUrl: require('../img/noether.jpg'),
                    id: 'thumbnail4',
                },
                person9: {
                    name: 'Frida ',
                    imgUrl: require('../img/kahlo.jpg'),
                    id: 'thumbnail5',
                },
                person10: {
                    name: 'Diana ',
                    imgUrl: require('../img/Mountbatten-Windsor.jpg'),
                    id: 'thumbnail6',
                },
                person11: {
                    name: 'Maryam ',
                    imgUrl: require('../img/Mirzakhani.jpg'),
                    id: 'thumbnail7',
                },
                person12: {
                    name: 'Ada',
                    imgUrl: require('../img/lovelace.jpg'),
                    id: 'thumbnail8',
                },
                person13: {
                    name: 'Grace',
                    imgUrl: require('../img/hopper.jpg'),
                    id: 'thumbnail9',
                },
                person14: {
                    name: 'Sally',
                    imgUrl: require('../img/ride.jpg'),
                    id: 'thumbnail10',
                },

        };

        this.thumbnailClicked = this.thumbnailClicked.bind(this);
    }

    getThumbnails() {
        var personList = Object.keys(this.state);
        personList.splice(0, 5);
        return (
            personList.map((person, i) =>
                <Thumbnail index={i+1} imgUrl={this.state[person].imgUrl}
                           personNumber={person} clickHandler={this.thumbnailClicked} />)
        );
    }

    thumbnailClicked(e) {
        var selectedThumbnail = e.target;
        var targetNode = selectedThumbnail.parentElement.parentElement;
        var thirdProfilesThumbnail = document.getElementById(this.state.person3.id);

        targetNode.className = targetNode.classList + ' disabled';
        thirdProfilesThumbnail.classList.remove('disabled');

        this.setState(prevState => ({
            person4: prevState.person3,
            person3: prevState.person2,
            person2: prevState.person1,
            person1: prevState[selectedThumbnail.id],
            slide: '',
        }));

        setTimeout(function() {
        this.setState({
            slide: 'slide'
        })}.bind(this), 50); //this is long enough for the browser to register the class was removed and re-added, keep it small so the user can not see
    }
    componentDidMount() {
        var firstProfilesThumbnail = document.getElementById(this.state.person1.id);
        var secondProfilesThumbnail = document.getElementById(this.state.person2.id);
        var thirdProfilesThumbnail = document.getElementById(this.state.person3.id);
        if(!firstProfilesThumbnail.classList.contains('disabled')){
            firstProfilesThumbnail.classList.add('disabled');
        }
        if(!secondProfilesThumbnail.classList.contains('disabled')){
            secondProfilesThumbnail.classList.add('disabled');
        }
        if(!thirdProfilesThumbnail.classList.contains('disabled')){
            thirdProfilesThumbnail.classList.add('disabled');
        }
    }

  render() {
    return (
        <div id="container">
            <div id="banner">
                <img src={require("../src/FabFitFun-Logo-Black1.png")} alt="Logo" id="logo"/>
                <div id="social-media">
                    <img src={require("../img/twitter.png")} alt="twitter" />
                    <img src={require("../img/facebook.png")} alt="facebook" />
                    <img src={require("../img/instagram.png")} alt="instagram" />
                </div>
            </div>
            <div id="showcase-container">
                <h1>WHO WE ARE</h1>
            <hr />
                <div id="showcase">
                    <Profile className={this.state.slide} index="1" name={this.state.person1.name} imgUrl={this.state.person1.imgUrl} />
                    <Profile className={this.state.slide} index="2" name={this.state.person2.name} imgUrl={this.state.person2.imgUrl} />
                    <Profile className={this.state.slide} index="3" name={this.state.person3.name} imgUrl={this.state.person3.imgUrl} />
                </div>
                <Profile className={this.state.slide} index="4" name={this.state.person4.name} imgUrl={this.state.person4.imgUrl} />
            </div>
            <div id="thumbnail-container">
                {this.getThumbnails()}
            </div>
        </div>
    );
  }
}

export default App;
