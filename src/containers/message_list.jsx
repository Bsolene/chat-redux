import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import { setMessages } from '../actions';


class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }


  renderList = () => {
    return (this.props.messages.map((message) => {
      return (
        <Message
          author={message.author}
          content={message.content}
          time={message.created_at}
        />
      );
    }))
  };

  render() {
    return (
      <div className="message_list" >
          <h3>Channel #{this.props.selectedChannel}</h3>
        <div ref={(list) => { this.textList = list; }}>
        {this.renderList()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    setInterval(() => this.props.setMessages(this.props.selectedChannel),10000);
  }
  componentDidUpdate() {
    this.textList.scrollTop = this.textList.scrollHeight
  }


  componentWillUnmount() {
    clearInterval();
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

