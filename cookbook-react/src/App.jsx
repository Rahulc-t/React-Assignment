import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
// import MainLayout from './layouts/MainLayout'
// import HomePage from './pages/HomePage'
// import IssuePage from './pages/IssuePage'
// import ViewPage from './pages/ViewPage'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<AuthLayout/>}>
      <Route index element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      {/* <Route path="/view/:id" element={<ViewPage/>}/> */}


    </Route>
    </>
  ))
  return (

    <>
    <RouterProvider router={router}/>
   </>
    
  )
}

export default App
