import CoinUnited_Logo from "../images/Academy_Logo.png";
import ArrowDown from "../images/LookDown.jpg";
import flag from "../images/uk_perfect.jpg";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-between items-center header w-100 ">
        <div className="space-x-3 d-flex items-center w-70">
          <span className="">
            {" "}
            <img src={CoinUnited_Logo} alt="CoinUnited Academy Logo" />{" "}
          </span>
          <span>
            <button className="button-nav1 items-center">Get 120 USD</button>
          </span>
          <nav>
            <ul>
              <li className="dropdown">
                <a href="#" className="dropbtn">
                  Buy Crypto <img src={ArrowDown} alt="arrowdown" />
                </a>
                <div className="dropdown-content">
                  <a href="#">Bitcoin</a>
                  <a href="#">Ethereum</a>
                  <a href="#">Tether</a>
                </div>
              </li>
              <li>
                <a href="#">Markets</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropbtn">
                  Trade <img src={ArrowDown} alt="arrowdown" />
                </a>
                <div className="dropdown-content">
                  <a href="#">Spot</a>
                  <a href="#">Futures</a>
                  <a href="#">Smart</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" className="dropbtn">
                  Earn <img src={ArrowDown} alt="arrowdown" />
                </a>
                <div className="dropdown-content">
                  <a href="#">Savings</a>
                  <a href="#">Staking</a>
                  <a href="#">Pool</a>
                </div>
              </li>
              <li>
                <a href="#">NFT</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="space-x-3 d-flex items-center w-30 p-l">
          <nav>
            <ul>
              <li className="p-t">
                <a href="#">Log In</a>
              </li>
              <li>
                <button className="button-nav2 items-center">Register</button>
              </li>
              <li className="p-t">
                <a href="#">Wallet</a>
              </li>
              <li className="dropdown p-t">
                <a href="#" className="dropbtn">
                  Download <img src={ArrowDown} alt="arrowdown" />
                </a>
                <div className="dropdown-content">
                  <a href="#">App</a>
                  <a href="#">Desktop</a>
                  <a href="#">App</a>
                  <a href="#">Desktop</a>
                </div>
              </li>
            </ul>
          </nav>
          <span className="img-container ">
            {" "}
            <img src={flag} alt="British Flag" />{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
