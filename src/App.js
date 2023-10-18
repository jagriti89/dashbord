// import Header from './Project2/Header';
// import './App.css';
// import Sidemenu from './Project2/Sidemenu';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//          <span className="spann"> 
         
//            <Sidemenu /></span> 
//     </div>
//   );
// }

// export default App;
import { useState } from 'react'
import './App.css'
import Header from './Project2/Header'
import Sidebar from './Project2/Sidemenu'
import Home from './Project2/Home'
import Productsell from './Project2/Productsell'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    
    </div>
    
  )
}

export default App