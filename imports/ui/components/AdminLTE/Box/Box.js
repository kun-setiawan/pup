import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// import $ from 'jquery';

const Box = props => (
  <div className={classNames(
          'box',
          { 'box-default': props.boxClass.style },
          { [`${props.boxClass.style}`]: props.boxClass.style },
          { 'collapsed-box': props.boxClass.collapsed === true },
          { 'box-widget': props.boxClass.widget === true },
          { 'box-solid': props.boxClass.solid === true },
          { 'direct-chat': props.boxHeader.contacts && props.boxHeader.contacts.length > 0 },
          { [`${props.boxHeader.chatClass}`]: props.boxHeader.chatClass },
      )}
  >
    <div className="box-header with-border">
      {props.title ?
        <h3 className="box-title">{props.title}</h3>
      : ''}

      {props.boxHeader.poster && props.boxHeader.poster.name ?
        <div className="user-block">
          <img className="img-circle" src={props.boxHeader.poster.imgUrl} alt={props.boxHeader.poster.name} />
          <span className="username"><Link to={props.boxHeader.poster.profileUrl}>{props.boxHeader.poster.name}</Link></span>
          <span className="description">{props.boxHeader.poster.description}</span>
        </div> : ''}

      <div className="box-tools pull-right">
        {props.boxHeader.span ?
              props.boxHeader.span.tooltip ?
                <span data-toggle="tooltip" title={props.boxHeader.span.tooltip} className={props.boxHeader.span.class ? props.boxHeader.span.class : ''}>
                  {props.boxHeader.span.title ? props.boxHeader.span.title : ''}
                </span> :
                <span className={props.boxHeader.span.class ? props.boxHeader.span.class : ''}>
                  {props.boxHeader.span.title ? props.boxHeader.span.title : ''}
                </span>
            : ''}

        {props.boxHeader.collapsable && !props.boxClass.collapsed ?
          <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                : ''}

        {props.boxHeader.collapsable && props.boxClass.collapsed ?
          <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus" /></button>
                : ''}

        {props.boxHeader.contacts && props.boxHeader.contacts.length > 0 ?
          <button
            type="button"
            className="btn btn-box-tool"
            data-toggle="tooltip"
            title="Contacts"
            data-widget="chat-pane-toggle"
          >
            <i className="fa fa-comments" />
          </button>
              : ''}

        {props.boxHeader.removable ?
          <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              : ''}
        { /* /.box-tools */ }
      </div>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      {props.children}

      {props.boxHeader.contacts && props.boxHeader.contacts.length > 0 ?
        <div className="direct-chat-contacts">
          <ul className="contacts-list">
            {props.boxHeader.contacts.map(user => (
              <li key={user.userId}>
                <Link to="/">
                  <img
                    className="contacts-list-img"
                    src={user.avatarUrl}
                    alt={user.nickname}
                  />
                  <div className="contacts-list-info">
                    <span className="contacts-list-name">{user.nickname}
                      <small className="contacts-list-date pull-right">
                        {user.lastUpdated.toLocaleString()}
                      </small>
                    </span>
                    <span className="contacts-list-msg">{user.status}</span>
                  </div>
                </Link>
              </li>))}
          </ul>
        </div>
            : ''}
    </div>

    {props.boxFooterComment.comments ?
      <div className="box-footer box-comments">
        {props.boxFooterComment.comments.map(comment => (
          <div key={comment._id}>
            {comment && comment.avatarUrl ?
              <div className="box-comment">
                <img className="img-circle img-sm" src={comment.avatarUrl} alt={comment._id} />
                <div className="comment-text">
                  <span className="username">
                    {comment.nickname}
                    <span className="text-muted pull-right">{comment.lastUpdated}</span>
                  </span>
                  {comment.content}
                </div>
              </div> : ''}
          </div>
          ))}
      </div> : '' }

    <div className="box-footer">
      {props.boxFooterChat.class ?
        <form action={props.boxFooterChat.url} method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              placeholder="Type Message ..."
              className="form-control"
            />
            <span className="input-group-btn">
              <button type="button" className={`btn ${props.boxFooterChat.class} btn-flat`}>Send</button>
            </span>
          </div>
        </form> : '' }
      {props.boxFooterComment.avatarImgUrl ?
        <form action="#" method="post">
          <img className="img-responsive img-circle img-sm" src={props.boxFooterComment.avatarImgUrl} alt="" />
          <div className="img-push">
            <input
              type="text"
              className="form-control input-sm"
              placeholder="Press enter to post comment"
            />
          </div>
        </form> : '' }

    </div>

    {props.boxHeader.loading ?
      <div className="overlay">
        <i className="fa fa-refresh fa-spin" />
      </div>
          : ''}

    { /* /.box-body */ }
    { /* /.box */ }
  </div>
);

Box.defaultProps = {
  boxClass: {
    style: 'box-default',
    collapsed: false,
    solid: false,
    widget: false,
  },
  boxHeader: {
    span: {
      tooltip: '',
      title: '',
      class: '',
    },
    collapsable: false,
    removable: false,
    loading: false,
    contacts: [],
    chatClass: '',
    poster: {
      name: '',
      imgUrl: '',
      profileUrl: '',
      description: '',
    },
  },
  boxFooterChat: {
    url: '',
    class: '',
  },
  boxFooterComment: {
    avatarImgUrl: '',
    comments: [],
  },
  title: '',
  children: '',
};

Box.propTypes = {
  boxClass: PropTypes.object,
  boxHeader: PropTypes.object,
  boxFooterChat: PropTypes.object,
  boxFooterComment: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
