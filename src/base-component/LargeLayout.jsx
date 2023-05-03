import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

const LargeLayout = ({ intl }) => (
  <div className=" d-flex">
    
    {/* <div className="col-md-3 bg-white p-0">
      <svg className="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
        <g transform="skewX(171.6)">
          <rect x="0" y="0" height="100%" width="100%" />
        </g>
      </svg>
    </div> */}
  </div>
);

LargeLayout.propTypes = {
  intl: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectIntl(LargeLayout);
