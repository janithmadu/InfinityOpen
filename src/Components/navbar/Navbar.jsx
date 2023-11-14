import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1.5}} transition={{duration:1}} >InfinityOpen</motion.span>
        <div className="social">
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/public/dribbble.png" alt="" />
          </a>
          <a href="">
            <img src="/public/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
