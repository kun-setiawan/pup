import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

BreadcrumbItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
};

function BreadcrumbItem({ icon, title, url }) {
    return (
        <li className={classNames({ active: !url })}>
            {url
                ? <a href={url}>{icon ? <i className={icon} /> : ''} {title}</a>
                : title
            }
        </li>
    );
}

export default BreadcrumbItem;
