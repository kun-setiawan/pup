import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Box from '../Box/Box';


const SocialArticle = props => (
  <Box
    boxClass={{
      widget: true,
    }}
    boxHeader={{
      poster: props.poster,
      removable: true,
    }}
    boxFooterComment={{
      comments: props.comments,
      avatarImgUrl: props.avatarImgUrl,
    }}
  >
    {props.contents.map(content => (
      <div key={content._id}>
        {content && content.imgUrl ? <img
          key={content._id}
          className="img-responsive pad"
          src={content.imgUrl}
          alt={content._id}
        /> : ''}
        <p>{content.text}</p>
      </div>
        ))}

    {!_.isEmpty(props.attachment) ?
      <div className="attachment-block clearfix">
        <img className="attachment-img" src={props.attachment.imgUrl} alt={props.attachment._id} />

        <div className="attachment-pushed">
          <h4 className="attachment-heading">
            <Link to={props.attachment.linkUrl}>
              {props.attachment.title}
            </Link>
          </h4>

          <div className="attachment-text">
            {props.attachment.text}
            <Link to={props.attachment.linkUrl}>more</Link>
          </div>
        </div>
      </div> : ''}

    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" />
            Share
    </button>
    <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" />
            Like
    </button>
    <span className="pull-right text-muted">{props.status}</span>
  </Box>
);

SocialArticle.defaultProps = {
  poster: {
    name: '',
    imgUrl: '',
    profileUrl: '',
    description: '',
  },
  contents: [],
  attachment: {},
  comments: [],
  status: '',
  avatarImgUrl: '',
};

SocialArticle.propTypes = {
  poster: PropTypes.object,
  contents: PropTypes.arrayOf(PropTypes.object),
  attachment: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  avatarImgUrl: PropTypes.string,
};

export default SocialArticle;

