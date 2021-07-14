import React from  'react';
import './Navbar.css'

const menuItems = [
    {
       title: 'Join',
       url: '',
       cName: 'nav-links'
 
    },
    {
       title: 'NHC',
       url: '',
       cName: 'nav-links'
 
    },
    {
       title: 'NHC Tour',
       url: '',
       cName: 'nav-links'
 
    },
    {
       title: 'Schedule',
       url: '',
       cName: 'nav-links'
 
    },
    {
        title: 'Leaders',
        url: '',
        cName: 'nav-links'
    },
    

     {
        title: 'NHC Player Rating System',
        url: '',
        cName: 'nav-links'
  
     },
     {
        title: 'NHC News',
        url: '',
        cName: 'nav-links'
  
     }
]

    
 


class Navbar extends React.Component {
     state = {
         clicked:false
     }
        render(){
            return (
                <React.Fragment>
                <nav className = "NavbarItems">
                   
                    <h2 className="navbar-logo"><img src="https://www.ntra.com/wp-content/uploads/ntra_header_tagline@2x.png" alt="" height="70px"></img></h2>

                    <div className="menu-icon">

                    </div>
                    <ul className="nav-menu" >
                        {menuItems.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
               </React.Fragment>
            )
        }

}

export default Navbar