import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Task Manager</h1>
                <Switch>
                    <Route path="/" exact component={TaskList} />
                    <Route path="/tasks/new" component={TaskForm} />
                    <Route path="/login" component={LoginForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;