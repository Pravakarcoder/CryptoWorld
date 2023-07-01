import React, { useState, useEffect } from 'react'
import {  Menu, Typography, Avatar, Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, } from '@ant-design/icons';
 
import icon from '../images/cryptocurrency.png'
 
 

const Navbar = () => {
  
  const [ activeMenu, setActiveMenu ] = useState(true);
  const [screenSize, SetScreenSize ]  = useState(null);

      useEffect(() => {
        const handleResize = () =>  SetScreenSize(window.innerWidth);

        window.addEventListener('resize',handleResize);
        handleResize();

          return () => window.removeEventListener('resize',handleResize);
        
      }, [ ]);


      useEffect(() => {
        if(screenSize < 768) {
          setActiveMenu(false);
        } else{
          setActiveMenu(true);
        }
      }, [screenSize]);

   
    const items = [
        { 
          label: 'Home', 
          key: 'item-1', 
          onClick: func1,
          icon: <HomeOutlined/>,
 
        },
        { 
          label: 'Cryptocurrencies', 
          key: 'item-2' ,
          onClick: func2,
          icon:<FundOutlined/>,
        },
        { 
          label: 'Exchanges', 
          key: 'item-3' ,
          onClick: func3,
          icon:<MoneyCollectOutlined/>,
        },
        { 
          label: 'News', 
          key: 'item-4' ,
          onClick: func4,
          icon: <BulbOutlined/>,
        },
        
      ];
     
      
   
    const navigate = useNavigate()

    function  func1() {
        navigate("/");
        setActiveMenu(!activeMenu);
      }
    function func2() {
        navigate("/cryptocurrencies");
        setActiveMenu(!activeMenu);
      }
    function  func3() {
        navigate("/exchanges");
        setActiveMenu(!activeMenu);
      }
    function func4() {
        navigate("/news");
        setActiveMenu(!activeMenu);
      }
    
   
  return (
    <div className='nav-container'> 
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className='logo'>
              <Link to="/">CryptoWorld</Link>
          </Typography.Title>

          <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}> 
            <MenuOutlined />
           </Button>
        </div>
    

     {activeMenu &&  (
 
 <Menu  theme='dark'
      
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
       
      items={items}
    />
     )}

    </div>
  )
}

export default Navbar   

 
 