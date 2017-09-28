import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <h1 class="text-center">Redux Chat</h1>
      <div className="main-app">
        <div className="channels">
          <ChannelList />
        </div>
        <div className="chat">
          <MessageList />
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default App;
