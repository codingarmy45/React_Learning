import React from 'react'
import Todo from './components/Todo'
import Calculator from './components/02_Calculator/Calculator'
import Weather from './components/04_Weather/Weather'
// import Toggle from './components/03_Toggle/Toggle'
import Movie from './components/05_MovieSearch/Movie'
import Notes from './components/06_Notes_App/Notes'
import LocalStorage from './components/07_Local_Stroage/LocalStorage'
import PropDrilling from './components/08_Prop_Drilling/PropDrilling'
import Login from './components/09_useContext/Login'
import { useContext } from 'react'
import AuthContext from './components/09_useContext/AuthContext'
import Pagination from './components/10_Pagination/Pagination'
import Store from './components/10_Pagination/Store'
import Counter from './Hooks/01_useEffect/Counter'
import WindowResizeTracker from './Hooks/01_useEffect/WindowResizeTracker'
import Timer from './Hooks/01_useEffect/Timer'
import ApiFetching from './Hooks/01_useEffect/ApiFetching'
import SearchwithDebounce from './Hooks/01_useEffect/SearchwithDebounce'
import Toggle from './Hooks/01_useEffect/Toggle'
import Upload from './components/11_FileUpload/Upload'
import FileUpload from './components/11_FileUpload/FileUpload'
import SingleFile from './components/11_FileUpload/SingleFile'
import MultipleFile from './components/11_FileUpload/MultipleFile'
import MulterFileUpload from './components/11_FileUpload/MulterFileUpload'
import Lifecycle from './components/12_ReactLifecycle/Lifecycle'
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
      {/* <Pagination/> */}
      {/* <Store/> */}
      {/* <Upload/> */}
      {/* <FileUpload/> */}
      {/* <SingleFile/> */}
      {/* <MultipleFile/> */}
      {/* <MulterFileUpload/> */}
      <Lifecycle/>


      {/* Hooks */}
      {/* <Counter/> */}
      {/* <WindowResizeTracker/> */}
      {/* <Timer/> */}
      {/* <ApiFetching/> */}
      {/* <SearchwithDebounce/> */}
      {/* <Toggle/> */}
      
    </div>
  )
}

export default App
