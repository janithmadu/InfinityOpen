import Links from './Links/Links'
import './Sidebar.scss'
import ToggleButtion from './toggleButtion/toggleButtion'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="bg">
            <Links/>
        </div>
        <ToggleButtion/>
    </div>
  )
}

export default Sidebar