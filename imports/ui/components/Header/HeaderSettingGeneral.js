import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderSettingGeneral = ({ data, id, active }) => (
  <div className={classNames('tab-pane', { active })} id={id}>
    { /* Settings tab content */ }
    <form method="post">
      {data.map(setting => (
        <div>
          <h3 className="control-sidebar-heading">{setting.title}</h3>
          {setting.items.map(item => (
            <div className="form-group">
              <label className="control-sidebar-subheading">
                {item.item}
                <input type="checkbox" className="pull-right" defaultChecked />
              </label>
              {item.desc ? <p>item.desc</p> : ''}
              { /* /.form-group */ }
            </div>
                    ))}
        </div>
            ))}
    </form>
    { /* /.tab-pane */ }
  </div>
);

HeaderSettingGeneral.defaultProps = {
  active: false,
};

HeaderSettingGeneral.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default HeaderSettingGeneral;
