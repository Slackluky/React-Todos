import { Menu, Icon, Input,  Drawer } from 'antd';
import React, { Component } from 'react';
import Logo from './logo.svg'


const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
  state = {
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
      
  render() {
      const Menus=(
        <Menu
        className="App-menu"
        mode="horizontal"
        defaultSelectedKeys={['3']}
      >
  <Menu.Item>        
  <span style={{marginRight: '10'}}> <img src={Logo} alt="Logo"/></span>
  </Menu.Item>
  <SubMenu title={<span className="submenu-title-wrapper">Product  
  <Icon type="down"></Icon></span>}>

    <MenuItemGroup title="Item 1">
      <Menu.Item key="setting:1">Option 1</Menu.Item>
      <Menu.Item key="setting:2">Option 2</Menu.Item>
    </MenuItemGroup>
    <MenuItemGroup title="Item 2">
      <Menu.Item key="setting:3">Option 3</Menu.Item>
      <Menu.Item key="setting:4">Option 4</Menu.Item>
    </MenuItemGroup>
  </SubMenu>
  <Menu.Item disabled>
  <span>
  <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    </span>
    </Menu.Item>
        <Menu.Item key="2"
        style={{ float: 'right'
        }}
        >
        nav 2
        </Menu.Item>
        <Menu.Item key="3"
        style={{ float: 'right'
        }}>
        nav 3</Menu.Item>

      </Menu>
      );
    return (
        <div>
            {Menus}
            <span>
                
                <Icon className="buttonresp"
                 type={this.state.visible ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.showDrawer} />
              </span>


          <Drawer
		          title="Basic Drawer"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
              visible={this.state.visible}
              defaultSelectedKeys={['3']}
		        >

          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>


		        </Drawer>
            </div>
    );
  }
}

export default Navbar