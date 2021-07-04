import Home from '../page/Home';
import About from '../page/About';
import Portfolio from '../page/Portfolio';


const configRouting = [
    {
        path: '/',
        exact: true,
        page: Home
    },
    {
        path: '/about',
        exact: true,
        page: About
    },
    {
        path: '/portfolio',
        exact: true,
        page: Portfolio
    }
]

export default configRouting; 