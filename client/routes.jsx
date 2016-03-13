import React from 'react';
import { mount } from 'react-mounter';
import { Layout, Main } from './app.jsx';
import { MainHeader } from './containers/MainHeader';

FlowRouter.route( '/', {
  action() {
    mount( Layout, {
      header: (<MainHeader />),
      content: (<Main />)
    });
  }
});