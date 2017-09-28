import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';


class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.user, this.state.value);
    this.setState({value: ''});
  }

  render() {
    return(
      <form className="form-inline" onSubmit={this.handleSubmit} >
        <textarea
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className="btn btn-default" type="submit" value="Send!" />
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
