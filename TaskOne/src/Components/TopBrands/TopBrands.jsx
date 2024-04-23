import Slider from "react-slick";
import brand1 from "../../assets/Brands/Faluda.png";
import brand2 from "../../assets/Brands/Jambura.png";
import brand3 from "../../assets/Brands/Halua.png";
import brand4 from "../../assets/Brands/Dalia.png";
import brand5 from "../../assets/Brands/Babui.png";
import brand6 from "../../assets/Brands/Badam.png";
import brand7 from "../../assets/Brands/Anarosh.png";
import brand8 from "../../assets/Brands/Biye.png";
const TopBrands = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-side-padding pb-6">
      <div>
        <h4 className="text-h4 font-medium">Top Brands</h4>
      </div>
      <div id="slider">
        <div className="slider-container py-4">
          <Slider {...settings}>
            <div className="text-center">
              <div className="bg-neutral-50">
                <img className="p-8" src={brand1} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand2} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand3} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand4} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand5} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand6} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand7} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand8} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand3} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-50 ">
                <img className="p-8" src={brand5} alt="" />
              </div>
              <div>
                <p className="capitalize pt-2 font-semibold">Brand name</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
