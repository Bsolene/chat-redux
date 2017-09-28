import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setChannel } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.setChannel(channel);
  }

  renderList = () => {
    return(
      this.props.channels.map((channel) => {
        if (channel === this.props.selectedChannel) {
          return(
            <div className="list-channels selected" onClick={() => this.handleClick(channel)}>
              #{channel}
            </div>
          )
        } else {
          return(
            <div className="list-channels" onClick={() => this.handleClick(channel)}>
              #{channel}
            </div>
          )
        };
      })
    )
  }

  render() {


    return (
      <div>
        {this.renderList()}
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel, setChannel: setChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
