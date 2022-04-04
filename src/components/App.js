import React from 'react'
import { LocalDataContext } from '../localDataContext';
import '../styles/App.css';
import { LocalDataViewer } from './LocalDataViewer';

const data = window.localStorage.getItem('value')
const App = () => {

  return (
  // un comment lines 13 and 17 after implementing the LocalDataContext and pass the data
  // variable as argument to value prop of LocalDataContext.Provider 
  // ex:- value={data}
  //  { <LocalDataContext.Provider  >}
      <div id="main">
        <LocalDataViewer />
      </div>
    // </LocalDataContext.Provider>

  )
}


export default App;
