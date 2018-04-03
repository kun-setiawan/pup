import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Box from '../../../components/AdminLTE/Box/Box';
import BoxSmall from '../../../components/AdminLTE/Box/BoxSmall';
import BoxInfo from '../../../components/AdminLTE/Box/BoxInfo';
import SocialChat from '../../../components/AdminLTE/Social/SocialChat';
import SocialArticle from '../../../components/AdminLTE/Social/SocialArticle';

const PageBox = () => (
  <section>
    { /*  Main content */ }
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          iconBoxClass="bg-aqua"
          iconClass="fa fa-envelope-o"
          title="Messages"
          desc="1,410"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          iconBoxClass="bg-green"
          iconClass="fa fa-flag-o"
          title="Bookmarks"
          desc="410"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          iconBoxClass="bg-yellow"
          iconClass="fa fa-files-o"
          title="Uploads"
          desc="13,648"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          iconBoxClass="bg-red"
          iconClass="fa fa-star-o"
          title="Likes"
          desc="93,139"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          boxClassStyle="bg-aqua"
          iconClass="fa fa-bookmark-o"
          title="Bookmarks"
          desc="41,410"
          progress={{
              value: 70,
              limit: ' 30 Days',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          boxClassStyle="bg-green"
          iconClass="fa fa-thumbs-o-up"
          title="Likes"
          desc="41,410"
          progress={{
              value: 70,
              limit: ' 30 Days',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          boxClassStyle="bg-yellow"
          iconClass="fa fa fa-calendar"
          title="Events"
          desc="41,410"
          progress={{
              value: 70,
              limit: ' 30 Days',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          boxClassStyle="bg-red"
          iconClass="fa fa-comments-o"
          title="Comments"
          desc="41,410"
          progress={{
              value: 70,
              limit: ' 30 Days',
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxSmall
          boxClassStyle="bg-aqua"
          title="150"
          desc="New Orders"
          iconClass="ion ion-bag"
          link={{
              url: '#',
              iconClass: 'fa fa-arrow-circle-right',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxSmall
          boxClassStyle="bg-green"
          title="53 %"
          desc="Bounce Rate"
          iconClass="ion ion-stats-bars"
          link={{
              url: '#',
              iconClass: 'fa fa-arrow-circle-right',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxSmall
          boxClassStyle="bg-yellow"
          title="44"
          desc="User Registrations"
          iconClass="ion ion-person-add"
          link={{
              url: '#',
              iconClass: 'fa fa-arrow-circle-right',
          }}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxSmall
          boxClassStyle="bg-red"
          title="65"
          desc="Unique Visitors"
          iconClass="ion ion-pie-graph"
          link={{
              url: '#',
              iconClass: 'fa fa-arrow-circle-right',
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <Box
          title="Expandable"
          boxClass={{
            style: 'box-default',
            collapsed: true,
            solid: true,
          }}
          boxHeader={{
            collapsable: true,
          }}
        >
            The body of the box
        </Box>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <Box
          title="Collapsable"
          boxClass={{
            style: 'box-warning',
            solid: true,
          }}
          boxHeader={{
            collapsable: true,
          }}
        >
            The body of the box
        </Box>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <Box
          title="Removable"
          boxClass={{
            style: 'box-success',
          }}
          boxHeader={{
            removable: true,
          }}
        >
            The body of the box
        </Box>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <Box
          title="Loading state"
          boxClass={{
            style: 'box-danger',
            solid: true,
          }}
          boxHeader={{
            loading: true,
          }}
        >
            The body of the box
        </Box>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <SocialChat
          title="Direct Chat"
          users={[{
                userId: Meteor.userId(),
                nickname: 'Green Arrow',
                avatarUrl: '/AdminLTE/img/user1-128x128.jpg',
                status: 'I am Oliver Queen',
                lastUpdated: new Date(),
            }, {
                userId: '12345678901234abc',
                nickname: 'Sarah Bullock',
                avatarUrl: '/AdminLTE/img/user3-128x128.jpg',
                status: 'To be or not to be',
                lastUpdated: new Date(),
            }]}
          chats={[{
                _id: '12345678901234567',
                userId: Meteor.userId(),
                message: 'Hello World !!!',
                timestamp: new Date(),
            }, {
                _id: '12345678901234568',
                userId: '12345678901234abc',
                message: 'Hallo juga Green Arrow',
                timestamp: new Date(),
            }]}
          tooltipClass="badge bg-aqua"
          newMessageCount={3}
          boxClass="box-info"
          chatClass="direct-chat-info"
          btnClass="btn-info"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <SocialChat
          title="Direct Chat"
          users={[{
                    userId: Meteor.userId(),
                    nickname: 'Green Arrow',
                    avatarUrl: '/AdminLTE/img/user1-128x128.jpg',
                    status: 'I am Oliver Queen',
                    lastUpdated: new Date(),
                }, {
                    userId: '12345678901234abc',
                    nickname: 'Sarah Bullock',
                    avatarUrl: '/AdminLTE/img/user3-128x128.jpg',
                    status: 'To be or not to be',
                    lastUpdated: new Date(),
                }]}
          chats={[{
                    _id: '12345678901234567',
                    userId: Meteor.userId(),
                    message: 'Hello World !!!',
                    timestamp: new Date(),
                }, {
                    _id: '12345678901234568',
                    userId: '12345678901234abc',
                    message: 'Hallo juga Green Arrow',
                    timestamp: new Date(),
                }]}
          tooltipClass="badge bg-green"
          newMessageCount={3}
          boxClass="box-success"
          chatClass="direct-chat-success"
          btnClass="btn-success"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <SocialChat
          title="Direct Chat"
          users={[{
                    userId: Meteor.userId(),
                    nickname: 'Green Arrow',
                    avatarUrl: '/AdminLTE/img/user1-128x128.jpg',
                    status: 'I am Oliver Queen',
                    lastUpdated: new Date(),
                }, {
                    userId: '12345678901234abc',
                    nickname: 'Sarah Bullock',
                    avatarUrl: '/AdminLTE/img/user3-128x128.jpg',
                    status: 'To be or not to be',
                    lastUpdated: new Date(),
                }]}
          chats={[{
                    _id: '12345678901234567',
                    userId: Meteor.userId(),
                    message: 'Hello World !!!',
                    timestamp: new Date(),
                }, {
                    _id: '12345678901234568',
                    userId: '12345678901234abc',
                    message: 'Hallo juga Green Arrow',
                    timestamp: new Date(),
                }]}
          tooltipClass="badge bg-yellow"
          newMessageCount={3}
          boxClass="box-warning"
          chatClass="direct-chat-warning"
          btnClass="btn-warning"
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <SocialChat
          title="Direct Chat"
          users={[{
                    userId: Meteor.userId(),
                    nickname: 'Green Arrow',
                    avatarUrl: '/AdminLTE/img/user1-128x128.jpg',
                    status: 'I am Oliver Queen',
                    lastUpdated: new Date(),
                }, {
                    userId: '12345678901234abc',
                    nickname: 'Sarah Bullock',
                    avatarUrl: '/AdminLTE/img/user3-128x128.jpg',
                    status: 'To be or not to be',
                    lastUpdated: new Date(),
                }]}
          chats={[{
                    _id: '12345678901234567',
                    userId: Meteor.userId(),
                    message: 'Hello World !!!',
                    timestamp: new Date(),
                }, {
                    _id: '12345678901234568',
                    userId: '12345678901234abc',
                    message: 'Hallo juga Green Arrow',
                    timestamp: new Date(),
                }]}
          tooltipClass="badge bg-red"
          newMessageCount={3}
          boxClass="box-danger"
          chatClass="direct-chat-danger"
          btnClass="btn-danger"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-xs-12">
        <SocialArticle
          poster={{
              name: 'Jonathan Burke Jr.',
              imgUrl: 'AdminLTE/img/user1-128x128.jpg',
              profileUrl: '#',
              description: 'Shared publicly - 7:30 PM Today',
          }}
          contents={[{
              _id: '12345678901234abc',
              imgUrl: 'AdminLTE/img/photo2.png',
              text: 'I took this photo this morning. What do you guys think?',
          }]}
          comments={[{
              _id: '12345678901234abcd',
              nickname: 'Maria Gonzales',
              avatarUrl: 'AdminLTE/img/user3-128x128.jpg',
              content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              lastUpdated: '8:03 PM Today',
          }, {
              _id: '12345678901234abce',
              nickname: 'Luna Stark',
              avatarUrl: 'AdminLTE/img/user4-128x128.jpg',
              content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              lastUpdated: '8:03 PM Today',
          }]}
          status="127 likes - 3 comments"
          avatarImgUrl="AdminLTE/img/user4-128x128.jpg"
        />
      </div>
      <div className="col-lg-6 col-xs-12">
        <SocialArticle
          poster={{
              name: 'Jonathan Burke Jr.',
              imgUrl: 'AdminLTE/img/user1-128x128.jpg',
              profileUrl: '#',
              description: 'Shared publicly - 7:30 PM Today',
          }}
          contents={[{
              _id: '12345678901234abcd',
              text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at',
            }, {
              _id: '12345678901234abce',
              text: 'the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
            }]}
          attachment={{
              _id: 70,
              title: 'Lorem ipsum text generator',
              linkUrl: '#',
              imgUrl: 'AdminLTE/img/photo1.png',
              text: 'Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
          }}
          comments={[{
              _id: '12345678901234abcd',
              nickname: 'Maria Gonzales',
              avatarUrl: 'AdminLTE/img/user3-128x128.jpg',
              content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              lastUpdated: '8:03 PM Today',
          }, {
              _id: '12345678901234abce',
              nickname: 'Nora Havisham',
              avatarUrl: 'AdminLTE/img/user5-128x128.jpg',
              content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              lastUpdated: '8:03 PM Today',
          }]}
          status="45 likes - 2 comments"
          avatarImgUrl="AdminLTE/img/user4-128x128.jpg"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxSmall />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <Box />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <SocialChat />
      </div>
    </div>
  </section>
);

PageBox.defaultProps = {
};

PageBox.propTypes = {
};

export default withTracker(() => ({
}))(PageBox);
