import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/FacebookIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="container">
          <div className="d-flex justify-content-between mt-5">
            <ul className="list-unstyled">
            <Link className="react-link" to="/"><li className="fs-4">Voyaging Volumes</li></Link>
              <li><Link to={"/browse"} className="react-link">Browse</Link></li>
              <li><Link to={"/about"} className="react-link">About</Link></li>
              <li><Link to={"/schedule"} className="react-link">Schedule</Link></li>
              <li><Link to={"/admin"} className="react-link">Admin</Link></li>
            </ul>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>&copy; Voyagin Volumes 2024</div>
            <div className="d-flex mb-5">
              <InstagramIcon className="mx-3"/>
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
