import React from 'react';

import Routes from './Routes';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {TicketProvider} from '../context/TicketProvider';
import {ApiProvider} from '../context/ApiProvider';

export default function Providers() {
  return (
    <ApiProvider>
      <AuthUserProvider>
        <TicketProvider>
          <Routes />
        </TicketProvider>
      </AuthUserProvider>
    </ApiProvider>
  );
}
