import React from 'react'
import Todo from './components/Todo'
import Counter from './components/01_Counter/Counter'
import Calculator from './components/02_Calculator/Calculator'
import Weather from './components/04_Weather/Weather'
import Toggle from './components/03_Toggle/Toggle'
import Movie from './components/05_MovieSearch/Movie'
import Notes from './components/06_Notes_App/Notes'
import LocalStorage from './components/07_Local_Stroage/LocalStorage'
import PropDrilling from './components/08_Prop_Drilling/PropDrilling'
import Login from './components/09_useContext/Login'
import { useContext } from 'react'
import AuthContext from './components/09_useContext/AuthContext'
import Pagination from './components/10_Pagination/Pagination'
const App = () => {
  const AuthContexts = useContext(AuthContext);
  return (
    <div>
      {/* <Todo/> */}
      {/* <Counter/> */}
      {/* <Calculator/> */}
      {/* <Toggle/> */}
      {/* <Weather/> */}
      {/* <Movie/> */}
      {/* <Notes/> */}
      {/* <LocalStorage/> */}
      {/* <PropDrilling/> */}
      {/* <Login/>
      <p>{AuthContexts.names}</p> */}
      <Pagination/>
      
    </div>
  )
}

export default App
