import logo from "../../assets/frontview/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navigations = () => {
  return (
    <div>
      <section className="md:px-side-padding px-12">
        <div className="flex justify-between items-center py-4 text-primary-194E8A font-bold gap-8 md:gap-0">
          <div>
            <IoIosArrowBack />
          </div>
          <p className="md:text-p3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore !
          </p>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </section>
      <nav className="flex items-center justify-between bg-primary-194E8A p-4  md:px-side-padding px-12">
        <div className="flex items-center text-white">
          <img className="md:w-full w-3/4" src={logo} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:w-auto">
          <div className="relative">
            <input
              type="text"
              name="q"
              className="w-full border h-12 shadow p-4 px-20 md:pe-52 rounded-full outline-none"
              placeholder="Example: Wallet"
            />
            <div className="absolute top-0 p-4 font-bold text-xl text-primary-194E8A">
              <IoIosSearch />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center md:gap-8 gap-4">
          <div className="flex flex-row items-start gap-2">
            <button className="text-white capitalize hidden lg:block">sign in</button>
            <div className="w-4 md:text-2xl text-md h-4 text-white">
              <FiUser />
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <button className="text-white capitalize hidden lg:block">Cart</button>
            <div className="w-4 md:text-2xl text-md h-4 text-white">
              <BiCart />
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-white py-4">
        <div className="md:px-side-padding px-12">
          <div className="md:flex justify-between items-center  text-primary-194E8A gap-1 md:gap-4 font-semibold grid grid-cols-8">
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
