import {Navbar,Footer,Welcome,Item,Products} from './components';
import { useState } from 'react';

const App=()=>{
  return(
    <div className='bg'>
      <Navbar/>
      <Welcome/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App;
