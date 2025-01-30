import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
    return (
        <div className='py-28 px-10 flex flex-col gap-4  md:flex-row'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout