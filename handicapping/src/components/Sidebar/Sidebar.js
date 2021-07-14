import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './Sidebar.css'

const StyleSideNav = styled.div
`   
    position: absolute;     
    height: 45%;
    width: 180px;   
    z-index: 1;     
    top: 3.4em;      
    background-color:blue; 
    overflow-x: hidden;    
    padding-top: 10px;
    margin-top:15px;
    margin-left:0px;
`;

const sideItems = [
    {
       title: 'Transaction Search',
       path: '/',
       cName: 'side-text'
 
    },
    {
       title: 'Summary',
       path: '/globalsearch',
       cName: 'side-text'
 
    },
    {
       title: 'Leaderboards',
       path: '/exceptions',
       cName: 'side-text'
 
    },
    
    ]
 

class Sidebar extends React.Component {
    render(){
        return (
            <React.Fragment>
                <StyleSideNav>   
                <ul>
                        {sideItems.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={item.path} className={item.cName} href={item.url}>{item.title}</Link>
                                </li>
                            )
                        })}
                 </ul>     
                   
                </StyleSideNav>
            </React.Fragment>
        )
    }

}

export default Sidebar