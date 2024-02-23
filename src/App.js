import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import "./App.css";
function App() {
  return (
    <Router>
      <div className='container-pages'>
        <nav className='NavGlobal'>
          <Link to="/users">Lista de usuarios</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/users/:id/todos" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
