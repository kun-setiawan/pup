import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BoxInfo extends Component {
  getBoxClasses() {
    const bgColor = {};
    bgColor[`bg-${this.props.color}`] = this.hasProgress();
    return classNames('info-box', bgColor);
  }

  getIconClasses() {
    const bgColor = {};
    bgColor[`bg-${this.props.color}`] = !this.hasProgress();
    return classNames('info-box-icon', bgColor);
  }

  hasProgress() {
    return typeof this.props.progressCount === 'number';
  }

  renderProgress() {
    if (this.hasProgress()) {
      return (
        <div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${this.props.progressCount}%` }}
            />
          </div>
          <span className="progress-description">
            {this.props.progressText}
          </span>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className={this.getBoxClasses()}>
        <span className={this.getIconClasses()}>
          <i className={this.props.icon} />
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{this.props.text}</span>
          <span className="info-box-number">
            {this.props.count}<small>{this.props.countSign}</small>
          </span>
          {this.renderProgress()}
        </div>

      </div>
    );
  }
}

BoxInfo.defaultProps = {
  icon: '',
  text: '',
  count: '',
  countSign: '',
  progressCount: 0,
  progressText: 'increased in 30 days',
  color: '',
};

BoxInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  countSign: PropTypes.string.isRequired,
  progressCount: PropTypes.number.isRequired,
  progressText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default BoxInfo;
