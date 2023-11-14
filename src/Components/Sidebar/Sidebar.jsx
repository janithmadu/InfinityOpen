import Links from './Links/Links'
import './Sidebar.scss'



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
