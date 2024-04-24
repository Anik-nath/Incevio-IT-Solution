// import staricon from "../../assets/frontview/Frame 40.png";
import award from "../../assets/frontview/award.png";
import banner from "../../assets/frontview/Frame 27046.png";
import offer from "../../assets/frontview/Frame 68.png";
import Slider from "react-slick";
import brand1 from "../../assets/frontview/Frame 26929.png";
import brand2 from "../../assets/frontview/Frame 26929-1.png";
import brand3 from "../../assets/frontview/Frame 26928.png";
import brand4 from "../../assets/frontview/Frame 26928-1.png";
import brand5 from "../../assets/frontview/Frame 26928-2.png";
import brand6 from "../../assets/frontview/Frame 26928-3.png";
import brand7 from "../../assets/Brands/Anarosh.png";
const FrontView = () => {
  const catagoryname = [
    {
      name: "Cars and Motorcycles",
      image: award,
    },
    {
      name: "Music and Books",
      image: award,
    },
    {
      name: "Arts and Crafts",
      image: award,
    },
    {
      name: "Moms and Babies",
      image: award,
    },
    {
      name: "Home & Garden",
      image: award,
    },
    {
      name: "Electronics",
      image: award,
    },
    {
      name: "Kids and Toy",
      image: award,
    },
    {
      name: "Clothing and Shoes",
      image: award,
    },
    {
      name: "Beauty and Health",
      image: award,
    },
    {
      name: "Sports",
      image: award,
    },
    {
      name: "Jewellery",
      image: award,
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="md:px-side-padding px-12 pb-20 mt-8">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 pb-4">
        <div className="bg-white p-4">
          <div className="flex flex-row gap-2 mb-3">
            <img src={award} alt="" />
            <p className="text-primary-194E8A font-bold">All Catagories</p>
          </div>
          {catagoryname.map((item) => (
            <div key={item.name} className="grid md:grid-cols-1 gap-2 mb-3">
              <div className="flex flex-row gap-2">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="relative">
            <img src={banner} alt="banner" />
            <div className="absolute bottom-14 md:w-4/12 h-auto p-6">
              <h1 className="md:text-5xl pb-4 font-bold text-primary-194E8A">
                Kitchen Savings.
              </h1>
              <button className="bg-primary-194E8A text-white px-4 py-2">
                Buy Now (5% off)
              </button>
            </div>
          </div>
          <div className="bg-white p-4">
            <Slider {...settings}>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand1} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand2} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand3} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand4} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand5} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand6} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-neutral-200 p-1 rounded-full">
                  <img className="w-full" src={brand7} alt="" />
                </div>
                <div>
                  <p className="capitalize pt-2 font-semibold text-p4">
                    Brand name
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="p-4 bg-white flex justify-between flex-col">
          <h6 className="capitalize text-center md:text-left">Good Afternoon, john Smith</h6>
          <div className="flex flex-col items-center justify-cente">
            <h3 className="font-semibold mt-2 md:mt-0">Flash Sale for you!</h3>
            <p>
              <span className="text-5xl font-bold text-primary-194E8A ">
                40
              </span>
              %off
            </p>
          </div>
          <p className="md:text-left text-center mb-4 md:mb-0">
            After 12hr this offer will be end.{" "}
            <a href="#" className="text-primary-194E8A font-semibold">
              Get Now
            </a>{" "}
          </p>
          <div>
            <img className="w-full" src={offer} alt="" />
            <button className="bg-primary-194E8A w-full text-white px-4 py-2 mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="bg-neutral-50 p-4 flex flex-row items-center gap-2">
          <div>
            <img src={staricon} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Quick & Easy Store Pickup</p>
            <p>Get your order as little as 1hr</p>
          </div>
        </div>
        <div className="bg-neutral-50 p-4 flex flex-row items-center gap-2">
          <div>
            <img src={staricon} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Low Price Guarantee</p>
            <p>We won’t be beat on price </p>
          </div>
        </div>
        <div className="bg-neutral-50 p-4 flex flex-row items-center gap-2">
          <div>
            <img src={staricon} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Knowledgeable Advice</p>
            <p>Answer to your tech questions</p>
          </div>
        </div>
        <div className="bg-neutral-50 p-4 flex flex-row items-center gap-2">
          <div>
            <img src={staricon} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Lates & Greatest Tech</p>
            <p>Discover whats new & excitings</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FrontView;
