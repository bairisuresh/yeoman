import React from 'react';
import Header from './HeaderComponent';
import SideNavComponent from './SideNavComponent';
require('styles//App.scss');
const App = () => (
  <div id="myssApp" className="app-component">
    <Header />
    <SideNavComponent />
  </div>
)

export default App
