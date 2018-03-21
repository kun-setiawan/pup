import React from 'react';

const ChatDirect = () => (
  <div className="box box-warning direct-chat direct-chat-warning">
    { /* DIRECT CHAT */ }
    <div className="box-header with-border">
      <h3 className="box-title">Direct Chat</h3>

      <div className="box-tools pull-right">
        <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
        </button>
        <button
          type="button"
          className="btn btn-box-tool"
          data-toggle="tooltip"
          title="Contacts"
          data-widget="chat-pane-toggle"
        >
          <i className="fa fa-comments" />
        </button>
        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" />
        </button>
      </div>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      { /* Conversations are loaded here */ }
      <div className="direct-chat-messages">
        { /* Message. Default to the left */ }
        <div className="direct-chat-msg">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-left">Alexander Pierce</span>
            <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
          </div>
          { /* /.direct-chat-info */ }
          <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
          { /* /.direct-chat-img */ }
          <div className="direct-chat-text">
                              Is this template really for free? That's unbelievable!
          </div>
          { /* /.direct-chat-text */ }
        </div>
        { /* /.direct-chat-msg */ }

        { /* Message to the right */ }
        <div className="direct-chat-msg right">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-right">Sarah Bullock</span>
            <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
          </div>
          { /* /.direct-chat-info */ }
          <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
          { /* /.direct-chat-img */ }
          <div className="direct-chat-text">
                              You better believe it!
          </div>
          { /* /.direct-chat-text */ }
        </div>
        { /* /.direct-chat-msg */ }

        { /* Message. Default to the left */ }
        <div className="direct-chat-msg">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-left">Alexander Pierce</span>
            <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
          </div>
          { /* /.direct-chat-info */ }
          <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
          { /* /.direct-chat-img */ }
          <div className="direct-chat-text">
                              Working with AdminLTE on a great new app! Wanna join?
          </div>
          { /* /.direct-chat-text */ }
        </div>
        { /* /.direct-chat-msg */ }

        { /* Message to the right */ }
        <div className="direct-chat-msg right">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-right">Sarah Bullock</span>
            <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
          </div>
          { /* /.direct-chat-info */ }
          <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
          { /* /.direct-chat-img */ }
          <div className="direct-chat-text">
                              I would love to.
          </div>
          { /* /.direct-chat-text */ }
        </div>
        { /* /.direct-chat-msg */ }

      </div>
      { /* /.direct-chat-messages */ }

      { /* Contacts are loaded here */ }
      <div className="direct-chat-contacts">
        <ul className="contacts-list">
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date pull-right">2/28/2015</small>
                </span>
                <span className="contacts-list-msg">How have you been? I was...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date pull-right">2/23/2015</small>
                </span>
                <span className="contacts-list-msg">I will be waiting for...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date pull-right">2/20/2015</small>
                </span>
                <span className="contacts-list-msg">I'll call you back at...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date pull-right">2/10/2015</small>
                </span>
                <span className="contacts-list-msg">Where is your new...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date pull-right">1/27/2015</small>
                </span>
                <span className="contacts-list-msg">Can I take a look at...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
          <li>
            <a href="#">
              <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Image" />

              <div className="contacts-list-info">
                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date pull-right">1/4/2015</small>
                </span>
                <span className="contacts-list-msg">Never mind I found...</span>
              </div>
              { /* /.contacts-list-info */ }
            </a>
          </li>
          { /* End Contact Item */ }
        </ul>
        { /* /.contatcts-list */ }
      </div>
      { /* /.direct-chat-pane */ }
    </div>
    { /* /.box-body */ }
    <div className="box-footer">
      <form action="#" method="post">
        <div className="input-group">
          <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
          <span className="input-group-btn">
            <button type="button" className="btn btn-warning btn-flat">Send</button>
          </span>
        </div>
      </form>
    </div>
    { /* /.box-footer */ }
    { /* /.direct-chat */ }
  </div>
);

ChatDirect.defaultProps = {
};

ChatDirect.propTypes = {
};

export default ChatDirect;
