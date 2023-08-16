import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
const App = () => {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' }
  ];

  return (
    <div>
      <h2 className='course-goals'>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
