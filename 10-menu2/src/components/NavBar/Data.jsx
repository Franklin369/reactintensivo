import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const Data = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      icon: <AiIcons.AiFillHome />,
    
    },
  
    {
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav:[
        {
          title: "Reports 1",
          path: "/reports/reports1",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "Reports 2",
          path: "/reports/reports2",
          icon: <IoIcons.IoIosPaper />,
        }

      ]
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
  ];