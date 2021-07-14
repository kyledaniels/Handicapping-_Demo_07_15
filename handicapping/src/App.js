import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Fetch from './components/Fetch/Fetch';
import PersonList from './components/List/List';
import List from './components/List/PostList';
import SampleFetch from './components/Fetch/SampleFetch'
import Test from './components/NewForm'
import Table from './components/Table/Table'
import TransactionTable from './components/TransactionTable/TransactionTable'



import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect
  
} from "react-router-dom";
import PlayerSearch from './components/pages/PlayerSearch';
import GlobalSearch from './components/pages/GlobalSearch';
import Exceptions from './components/pages/Exceptions';
import LeaderBoards from './components/pages/LeaderBoards';
import NotFoundPage from './components/pages/404';




function App() {

  

  return (
    <React.Fragment>
     <Router>

    <div>
    <Navbar/>
    <Sidebar/>
    </div>
     
    
   
      
     {/* <SampleFetch/> */}
     {/* <PersonList/>   */}
    {/* <List/> */}
    {/* <Test/> */}
      <Switch>
       <Route exact path='/' component={PlayerSearch}></Route>
       <Route path='/globalsearch' component={GlobalSearch}></Route>
       <Route path='/exceptions' component={Exceptions}></Route>
       <Route path='/leaderboards' component={LeaderBoards}></Route>
       <Route path='/404' component={NotFoundPage}></Route>
       <Redirect to='404'></Redirect>
     </Switch>
     </Router>
     </React.Fragment>
  );
}

export default App;
