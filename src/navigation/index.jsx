import React from 'react';

import Routes from './Routes';
import {AuthUserProvider} from '../context/AuthUserProvider';

export default function Providers() {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
}
