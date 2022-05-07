import { Route, Routes } from 'react-router-dom'
import Authentication from './routes/authentication/authentication.component'
import Home from './routes/home/home.component'
import { Navigation } from './routes/navigation/navigation.component'


const App = () => {


  const Shop = () => {
    return <h1>Desde shop</h1>
  }
  return (
    <Routes>
      <Route path= '/' element = {<Navigation />} >
        <Route index element={<Home />} />
        <Route path= 'shop' element={<Shop />} />
        <Route path= 'auth' element = {<Authentication />} />
      </Route>
    </Routes>

  )
}


export default App