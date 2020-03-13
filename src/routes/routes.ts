import { RouteProps } from 'react-router-dom'
import Characters from '~Screens/characters'
import Episodes from '~Screens/Episodes'
import Home from '~Screens/Home'
import Locations from '~Screens/Locations'

export interface RouteType extends RouteProps {
  name: string
  path: string
}

const createRoutes = <T extends object>(
  item: Record<keyof T, RouteType>
): Record<keyof T, RouteType> => item

const routes = createRoutes({
  baseUrl: {
    component: Home,
    name: 'Home',
    path: '/',
  },
  characters: {
    component: Characters,
    name: 'Characters',
    path: '/characters',
  },
  episodes: {
    component: Episodes,
    name: 'Episodes',
    path: '/episodes',
  },
  locations: {
    component: Locations,
    name: 'Locations',
    path: '/locations',
  },
})

export default routes
