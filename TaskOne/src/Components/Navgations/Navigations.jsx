import logo from "../../assets/frontview/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navigations = () => {
  return (
    <div>
      <section className="px-side-padding">
        <div className="flex justify-between items-center py-4 text-primary-194E8A font-bold">
          <div>
            <IoIosArrowBack />
          </div>
          <p className="text-p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore !
          </p>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </section>
      <nav className="flex items-center justify-between flex-wrap bg-primary-194E8A p-4  px-side-padding">
        <div className="flex items-center text-white">
          <img className="w-full" src={logo} alt="" />
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full lg:flex lg:items-center lg:w-auto">
          <div className="relative">
            <input
              type="text"
              name="q"
              className="w-full border h-12 shadow p-4 px-20 pe-52 rounded-full outline-none"
              placeholder="Example: Wallet"
            />
            <div className="absolute top-0 p-4 font-bold text-xl text-primary-194E8A">
              <IoIosSearch />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-start gap-2">
            <button className="text-white capitalize">sign in</button>
            <div className="w-4 text-2xl h-4 text-white">
              <FiUser />
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <button className="text-white capitalize">Cart</button>
            <div className="w-4 text-2xl h-4 text-white">
              <BiCart />
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-white py-4">
        <div className="px-side-padding">
          <div className="flex justify-between items-center  text-primary-194E8A gap-4 font-semibold">
            <div>Brands</div>
            <div>Brands</div>
            <div>Vendors</div>
            <div>Trendy</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
            <div>Events</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigations;
