import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import UserProfile from './components/Authentication/UserProfile';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import TeamList from './components/Team/TeamList';
import TeamForm from './components/Team/TeamForm';
import TeamDashboard from './components/Team/TeamDashboard';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from './localStorage';

function App() {
  const [user, setUser] = useState(null);

  // Function to handle user login
  const handleLogin = (userData) => {
    setUser(userData);
    saveToLocalStorage('user', userData);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setUser(null);
    removeFromLocalStorage('user');
  };

  useEffect(() => {
    const savedUser = loadFromLocalStorage('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/tasks">
          <TaskList />
          <TaskForm />
        </Route>
        <Route path="/teams">
          <TeamList />
          <TeamForm />
        </Route>
        <Route path="/team-dashboard" component={TeamDashboard} />
        <Route exact path="/" component={TeamList} />
      </Switch>
    </Router>
  );
}

export default App;
