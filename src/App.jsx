import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import FocusInput from './FocusInput';
import FilterList from './FilterList';

function App() {
  const DATA = [
    {id: 1, name: 'A'},
    {id: 2, name: 'AbIo'},
    {id: 3, name: 'AdJo'},
    {id: 4, name: 'AfLo'},
    {id: 5, name: 'AcDo'},
    {id: 6, name: 'AlSi'},
    {id: 7, name: 'ApPl'},
    {id: 8, name: 'AgLy'},
  ]
  return (
    <>
      <FocusInput />
      <FilterList users={DATA} />
    </>
  )
}

export default App
