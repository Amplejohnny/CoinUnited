import CoinUnited_Logo from "../images/CU-Academy-Logo-B.png";
import ArrowDown from "../images/LookDown.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar1 = () => {
  return (
    <div className="">
      <div className="d-flex items-center justify-between p-2">
        <img src={CoinUnited_Logo} alt="CoinUnited Academy Logo" />
      </div>
      <div className="d-flex items-center justify-between p-2">
        <nav>
          <ul>
            <li className="p-t">
              <a href="#">Home </a>
            </li>
            <li className="dropdown p-t">
              <a href="#" className="dropbtn">
                Articles <img src={ArrowDown} alt="arrowdown" />
              </a>
              <div className="dropdown-content">
                <a href="#">Headline</a>
                <a href="#">Gossip</a>
                <a href="#">Fact</a>
              </div>
            </li>
            <li className="p-t">
              <a href="#">Glossary </a>
            </li>
            <li className="p-t">
              <a href="#">Partnership</a>
            </li>
            <span className="d-flex items-center justify-between search-border ">
              <li className="d-flex items-center">
                <FontAwesomeIcon className="font-c w-20" icon={faMagnifyingGlass} />
                <input type="text" className="search-input w-80" placeholder=" Search article" />
              </li>
            </span>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar1;
