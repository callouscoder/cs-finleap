import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as getLocations from "../actions/locations";

import ToggleButton from "./ToggleButton"

class LocationsUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            votesA: 0,
            votesB: 0,
            votesC: 0
        }
    }

    componentWillMount() {
        this.props.getLocations.getLocations("Berlin");
    }

    handleSearch = () => {
        const searchInput = document.getElementById('searchinput')
        this.props.getLocations.getLocations(searchInput.value);
    }

    addParticipant = () => {
        const targetParticipantNames = document.getElementById('participantNames');
    
        const itemNode = document.createElement('li');
        const itemContent = `<span><input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" /></span>
        <ul>
          <li>
            <button className="option-a"></button>
          </li>
          <li>
            <button className="option-b"></button>
          </li>
          <li>
            <button className="option-c"></button>
          </li>
        </ul>`;
        itemNode.innerHTML = itemContent;
        targetParticipantNames.appendChild(itemNode);
      }
    
      renderLocations = locations => {
          if (locations.items) {              
              return locations.items.response.venues.map((item, i) => {                  
                return (
                    <li key={i}>
                        <article className="location">
                            <h1 className="location-title">{item.name}</h1>

                            <h2 className="location-type">{item.categories[0].pluralName}</h2>

                            <span className="total-votes">
                                {i === 0 ? this.state.votesA : ''}
                                {i === 1 ? this.state.votesB : ''}
                                {i === 2 ? this.state.votesC : ''}</span>
                        </article>
                    </li>
                )
              }
            );
          } else {
            return (<strong>Loading Berlin based initially...</strong>)
          }

          
      }

    handleClick = (option, status) => {
        if (option === "a" && status === true) {
            this.setState({
                votesA: this.state.votesA + 1
            })
        } else if (option === "a" && status === false) {
            this.setState({
                votesA: this.state.votesA - 1
            })
        }

        if (option === "b" && status === true) {
            this.setState({
                votesB: this.state.votesB + 1
            })
        } else if (option === "b" && status === false) {
            this.setState({
                votesB: this.state.votesB - 1
            })
        }

        if (option === "c" && status === true) {
            this.setState({
                votesC: this.state.votesC + 1
            })
        } else if (option === "c" && status === false) {
            this.setState({
                votesC: this.state.votesC - 1
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <header className="app-header">
                    <h1 className="app-title">Lunchplace</h1>
                </header>

                <main className="main-content">
                    <section className="search-form">
                        <div className="search">
                        <input id="searchinput" type="text" placeholder="Search..." />

                        <button className="search-button" onClick={() => this.handleSearch()}>Search</button>
                        </div>
                    </section>

                    <section className="places-table">
                        <div className="table-outer">
                        <section className="participants-list">
                        <header className="list-header">
                            <h1 className="list-title">Participants</h1>

                            <ul className="suggested-locations" id="locations">
                                {this.renderLocations(this.props.locations)}
                            </ul>
                        </header>

                            <ul id="participantNames" className="participant-names">
                            <li>
                                <span><input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" /></span>

                                <ul>
                                <li>
                                    <ToggleButton option="a" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="b" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="c" handleClick={this.handleClick} />
                                </li>
                                </ul>
                            </li>
                            <li>
                                <span><input type="text" className="participant-name" placeholder="Type here" value="Kevin Müller" /></span>

                                <ul>
                                <li>
                                    <ToggleButton option="a" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="b" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="c" handleClick={this.handleClick} />
                                </li>
                                </ul>
                            </li>
                            <li>
                                <span><input type="text" className="participant-name" placeholder="Type here" value="Dennis Mustermann" /></span>

                                <ul>
                                <li>
                                    <ToggleButton option="a" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="b" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="c" handleClick={this.handleClick} />
                                </li>
                                </ul>
                            </li>
                            <li>
                                <span><input type="text" className="participant-name" placeholder="Type here" value="Donald Trump" /></span>

                                <ul>
                                <li>
                                    <ToggleButton option="a" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="b" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="c" handleClick={this.handleClick} />
                                </li>
                                </ul>
                            </li>
                            <li>
                                <span><input type="text" className="participant-name" placeholder="Type here" value="" /></span>

                                <ul>
                                <li>
                                    <ToggleButton option="a" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="b" handleClick={this.handleClick} />
                                </li>
                                <li>
                                    <ToggleButton option="c" handleClick={this.handleClick} />
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </section>

                        <section className="suggestions">

                        </section>
                        </div>

                        <footer className="table-footer">
                        <button className="add-participant" onClick={() => this.addParticipant()}>Add participant</button>
                        </footer>
                    </section>
                    </main>
            </React.Fragment>
        )
    }
}

LocationsUI.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

function mapStateToProps(state, ownProps) {    
    return {
      locations: state.locations
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getLocations: bindActionCreators(getLocations, dispatch)
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LocationsUI);