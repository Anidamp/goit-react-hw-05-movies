import { NavLink, Outlet } from 'react-router-dom'
import s from './Navigation.module.css'


export default function Navigation() {
    return (
        <>
            <div className = 'container'>
            <nav className ={s.nav}>
                <NavLink to='/' className={s.link} activeclassname={s.activeLink}>Home</NavLink>
                <NavLink to = '/movies' className ={s.link} activeclassname ={s.activeLink}>Movie</NavLink>
                
	            <div className="animation start-home"></div>
                </nav>
                <Outlet />
                </div>
            </>
    )
}