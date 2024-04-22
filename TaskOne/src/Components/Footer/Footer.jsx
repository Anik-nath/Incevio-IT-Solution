import logo from '../../assets/Essencelogo.png';
import payment1 from '../../assets/Component 14-1.png';
import payment2 from '../../assets/Component 14-2.png';
import payment3 from '../../assets/Component 14-3.png';
import payment from '../../assets/Component 14.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/X svg.png';
import googleplay from '../../assets/Badge.png';
import applystore from '../../assets/Badge-1.png';

const Footer = () => {
  return (
    <>
      <div className="px-side-padding pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full">
        <div className="grid grid-cols-4 gap-44">
          <div className="w-full">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} alt="" />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-800">
              Got Question? Call us 24/7
              </p>
              <p className="mt-4 text-sm text-gray-800">
              (+1) 84382648364
              </p>
              
              <p className="mt-4 text-sm text-gray-800">
              Register now & get you 10%
offer from first order!
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 col-span-2">
            <div>
              <p className="font-semibold text-h5 tracking-wide text-gray-800">
              Company
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Start Selling
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Order History
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold  text-h5 tracking-wide text-gray-800">
              My Account
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                  Track My Order
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                View Cart
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold  text-h5 tracking-wide text-gray-800">
              Customer Service
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Money Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Product Return
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact Seller
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                   Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-end'> 
              <p className="font-semibold text-h5 pb-4 text-gray-800  w-full mr-4" >
                Download app
              </p>
              <div className="flex flex-row gap-2 w-full justify-end">
                <img src={googleplay} alt="googleplay" />
                <img src={applystore} alt="applystore" />
              </div>
              
            </div>
        </div>
        {/* social */}
        <div className="flex flex-col justify-between pb-padding-56 sm:flex-row mr-10">
          <select className='bg-neutral-50 p-2' name="language" id="language">
            <option value="">English (USA)</option>
          </select>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             <img src={facebook} alt="facebook" />
            </a>
            
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             <img src={linkedin} alt="linkedin" />
            </a>
            
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             <img src={instagram} alt="instagram" />
            </a>
            
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             <img src={twitter} alt="twitter" />
            </a>
            
          </div>
        </div>
      </div>
      {/* copywrites & payment */}
      <div className='bg-interface-footer-bg py-4 px-side-padding'> 
        <div className="flex flex-col justify-between sm:flex-row">
          <p className="text-sm text-gray-600">
          All Rights Reserved. © 2024 zcart.com
          </p>
          <div className="flex items-center mt-4 space-x-6 sm:mt-0">
           <p>We are using for</p>
           <div>
                <img src={payment} alt="" />
           </div>
           <div>
                <img src={payment1} alt="" />
           </div>
           <div>
                <img src={payment2} alt="" />
           </div>
           <div>
                <img src={payment3} alt="" />
           </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
