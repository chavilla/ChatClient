import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/404/NotFound';
import ChatScreen from './components/chat/ChatScreen';
import JoinComponent from './components/join/JoinComponent';

const ChatApp = () => {
    return (
        <Router>
        <div>
          <Switch>
             <Route path='/' exact component={ JoinComponent } />
             <Route path='/chat' component={ ChatScreen } />
             <Route path='/404' component={ NotFound } />
             <Redirect to='/404' />
          </Switch>
        </div>
    </Router>
    );
}

export default ChatApp;
