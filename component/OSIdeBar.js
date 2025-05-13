import React from 'react';
import {Sidebar, Menu, MenuItem, SubMenu, menuClasses} from 'react-pro-sidebar';
import {
    FaList,
    FaUsers,
    FaFile,
    FaCalendarAlt,
    FaBell, FaMoneyBill,

} from 'react-icons/fa';




const OSIdeBar = ({theme="dark", children }) => {




    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#ffffff',
                color: '#607489',
            },
            menu: {
                menuContent: '#fbfcfd',
                icon: '#0098e5',
                hover: {
                    backgroundColor: '#c5e4ff',
                    color: '#44596e',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        },
        dark: {
            sidebar: {
                backgroundColor: '#000084',
                color: '#8ba1b7',
            },
            menu: {
                menuContent: '#082440',
                icon: '#59d0ff',
                hover: {
                    backgroundColor: '#00458b',
                    color: '#b6c8d9',
                },
                disabled: {
                    color: '#0a80ff',
                },
            },
        },
    };

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const menuItemStyles= {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, 1)
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
                color: themes[theme].menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };




    return (

        <>

<div className={"d-flex justify-content-between align-items-center"} style={{backgroundColor:'rgb(38,12,135)'}}>


    <h3 className={"p-2 font-monospace"} style={{color:"#4880FF"}}>
        ODG<span className="text-warning ">TAX</span>PRO
    </h3>
<div className="bg-black rounded-2 w-75">123</div>
    <div className="d-flex text-white align-items-center">


        <div className="me-2 h6" >


            Raju Haldar
            <br/>

            <div style={{fontSize:"10pt"}} className={"mt-1"}>Client id: <span className={"text-warning"}>#RH3X4R</span> </div>
        </div>

    <div className="rounded-circle bg-white me-3 p-2"  style={{width:"50px",height:"50px"}}>

        <div className="w-50 bg-info"></div>
        <div className="w-50 bg-info"></div>

        <img src="/logoog.png" alt="" className="img-fluid"/>
    </div>



    </div>

</div>
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar
                breakPoint="sm"
                backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
                rootStyles={{
                    color: themes[theme].sidebar.color,
                }}
                style={{
                    // backgroundColor: '#f0f0f0', // Light background, similar to image
                    // borderRight: '1px solid #ddd', // Subtle border
                }}

            >

                


                <Menu menuItemStyles={menuItemStyles}>


<div className="pb-1 bg-white"></div>
                    <MenuItem  icon={<FaList />} style={{ padding: '16px'}}>Services</MenuItem>
                    <MenuItem icon={<FaUsers />} style={{ padding: '16px' }}>Clients</MenuItem>
                    <MenuItem icon={<FaFile />} style={{ padding: '16px' }}>Documents</MenuItem>
                    <MenuItem icon={<FaCalendarAlt />} style={{ padding: '16px' }}>Job Calendar</MenuItem>
                    <MenuItem icon={<FaBell />} style={{ padding: '16px' }}>Notifications</MenuItem>
                    <MenuItem icon={<FaMoneyBill />} style={{ padding: '16px' }}>Invoices</MenuItem>

                </Menu>
            </Sidebar>
            <div className="w-100">

                <div className="w-100 bg-white pb-1"></div>

                {children}
            </div>

<div className="">

    <div className="">


    </div>
</div>

        </div></>
    );
};

export default OSIdeBar;
