import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getLocations from "../actions/locations";
import { default as LunchplaceUI } from "../components/LunchplaceUI";

class LocationsView extends Component {
    render() {
        const inProgress = this.props.locations.inProgress;
        const isSuccess = this.props.locations.isSuccess;

        if (inProgress) {
            return <h1 className="text-red text-lg">Loading...</h1>
        } else if (isSuccess) {
            return (
                <LunchplaceUI
                    items={this.props.locations.response.venues}
                    getLocations={this.props.getLocations}
                />
            );
        } else {
            return null;
        }
    }
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
)(LocationsView);
