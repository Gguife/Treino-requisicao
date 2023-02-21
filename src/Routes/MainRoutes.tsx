import {useRoutes} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Album } from '../Pages/Album'
import { Photo } from '../Pages/Photo'

export const MainRoutes = () => {
  return useRoutes([
    {path: '/', element: <Home/>},
    {path: '/album/:id', element: <Album/>},
    {path: '/photos/:id', element: <Photo/>},
  ])
}
