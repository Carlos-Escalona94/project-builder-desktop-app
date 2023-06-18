import { RouterProvider, createHashRouter } from 'react-router-dom';

import { AuthenticationPage, ErrorPage, HomePage, RootLayout } from './pages';
import { tokenLoader } from './utils/auth';
import { authAction } from './pages/Authentication';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    id: 'root',
    loader: tokenLoader,
    children:[
      {index: true, element: <HomePage/>},
      {
        path: 'auth',
        element: <AuthenticationPage/>,
        action: authAction
      }
      // ,
      // { 
      //   path: 'logout',
      //   action: logoutAction
      // }
    ]
  }
])

export function App() {
  return <RouterProvider router={router}/>
}