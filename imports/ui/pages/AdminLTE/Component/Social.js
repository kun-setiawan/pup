import React from 'react';
import SocialProfileVertical from '../../../components/AdminLTE/Social/SocialProfileVertical';
import SocialProfileHorizontal from '../../../components/AdminLTE/Social/SocialProfileHorizontal';
import SocialProfileList from '../../../components/AdminLTE/Social/SocialProfileList';

const Social = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-4">
          <SocialProfileVertical />
        </div>
        <div className="col-md-4">
          <SocialProfileHorizontal />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <SocialProfileList />
        </div>
      </div>
    </section>
  </div>
);

Social.defaultProps = {
};

Social.propTypes = {
};

export default Social;

