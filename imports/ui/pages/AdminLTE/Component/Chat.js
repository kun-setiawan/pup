import React from 'react';
import ChatDirect from '../../../components/AdminLTE/Chat/ChatDirect';
import ChatGroup from '../../../components/AdminLTE/Chat/ChatGroup';

const Chat = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <ChatGroup />
        </div>
        <div className="col-md-6">
          <ChatDirect />
        </div>
      </div>
    </section>
  </div>
);

Chat.defaultProps = {
};

Chat.propTypes = {
};

export default Chat;

