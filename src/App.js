import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Data from './Components/Data';
import { UserProvider } from './Components/Contextform';

function App(){
  return(
    <UserProvider> 
   <Router>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/Data' element={<Data/>}/>
    </Routes>
   </Router>
   </UserProvider> 
  )
}
 export default App;