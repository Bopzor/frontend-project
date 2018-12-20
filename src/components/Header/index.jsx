import * as React from 'react';

import { hot } from 'react-hot-loader';

import Typography from '../Typography';

const Header = () => {
  return (
    <div>
      <Typography
        color="primary"
        align="center"
        variant="main-title"
        style={{
          letterSpacing: '-1.72px'
        }}
      >
        gojob
      </Typography>
    </div>
  );
}

export default hot(module)(Header);