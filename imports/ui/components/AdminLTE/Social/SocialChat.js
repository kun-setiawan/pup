import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import Box from '../Box/Box';


const SocialChat = props => (
  <Box
    title={props.title}
    boxClass={{
      style: props.boxClass,
    }}
    boxHeader={{
      collapsable: true,
      removable: true,
        span: {
            tooltip: `${props.newMessageCount} New Messages`,
            class: props.tooltipClass,
            title: props.newMessageCount,
        },
      contacts: props.users,
      chatClass: props.chatClass,
    }}
    boxFooterChat={{
      url: '#',
      class: props.btnClass,
    }}
  >
    <div className="direct-chat-messages">
      {props.chats.map((chat) => {
            const user = _.find(props.users, { userId: chat.userId });
            const position = user.userId === Meteor.userId();
            return (
              <div key={chat._id} className={`direct-chat-msg ${position ? 'right' : 'left'}`}>
                <div className="direct-chat-info clearfix">
                  <span className={`direct-chat-name pull-${position ? 'right' : 'left'}`}>
                    { user.nickname }
                  </span>

                  <span className={`direct-chat-timestamp pull-${position ? 'left' : 'right'}`}>
                    {chat.timestamp.toLocaleString()}
                  </span>
                </div>
                <img
                  className="direct-chat-img"
                  src={user.avatarUrl}
                  alt={user.nickname}
                />
                <div className="direct-chat-text">{chat.message}</div>
              </div>);
        })}
    </div>
  </Box>
);

SocialChat.defaultProps = {
  title: '',
  users: [],
  chats: [],
  newMessageCount: 0,
  tooltipClass: '',
  boxClass: '',
  chatClass: '',
  btnClass: '',
};

SocialChat.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  chats: PropTypes.arrayOf(PropTypes.object),
  tooltipClass: PropTypes.string,
  newMessageCount: PropTypes.number,
  boxClass: PropTypes.string,
  chatClass: PropTypes.string,
  btnClass: PropTypes.string,
};

export default SocialChat;

