import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as getLocations from "../actions/locations";

class LocationsUI extends Component {
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
        const itemContent = `<input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" />
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
              console.log(locations.items);
              
              return locations.items.response.venues.map((item, i) => {
                return (
                    <li key={i}>
                        <article className="location">
                            <h1 className="location-title">{item.name}</h1>

                            <h2 className="location-type">{item.categories[0].pluralName}</h2>

                            <span className="total-votes">6</span>
                        </article>
                    </li>
                )
              }
            );
          } else {
            return (<strong>Loading Berlin based initially...</strong>)
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
                                <input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" />

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
                                </ul>
                            </li>
                            <li>
                                <input type="text" className="participant-name" placeholder="Type here" value="Kevin Müller" />

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
                                </ul>
                            </li>
                            <li>
                                <input type="text" className="participant-name" placeholder="Type here" value="Dennis Mustermann" />

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
                                </ul>
                            </li>
                            <li>
                                <input type="text" className="participant-name" placeholder="Type here" value="Donald Trump" />

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
                                </ul>
                            </li>
                            <li>
                                <input type="text" className="participant-name" placeholder="Type here" value="" />

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