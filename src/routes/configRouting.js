import Home from '../page/Home';
import About from '../page/About';
import Projects from '../page/Projects';


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
        path: '/projects',
        exact: true,
        page: Projects
    }
]

export default configRouting; 