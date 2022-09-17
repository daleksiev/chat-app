import { Menu } from 'antd';
import items from './navItems';
import routes from './routes';
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.scss';

function App() {
    return (
        <>
            <Menu className={styles.menuWrapper} items={items} mode="horizontal" />
            <Routes>
                {routes.map(route => <Route key={route.path} {...route} />)}
            </Routes>
        </>
    )
}

export default App;
