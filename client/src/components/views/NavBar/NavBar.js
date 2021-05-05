import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
const Logo = require('../../../assets/images/Logo.png');

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="menu__logo">
        <a href="/"><img src="data:image/jpeg;base64,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" alt="Logo" style={{ width: '100%', marginTop: '-5px' }} /></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar