import deals1 from "../../assets/deals/deals (1).png";
import deals2 from "../../assets/deals/deals (2).png";
import deals3 from "../../assets/deals/image 42.png";
import deals4 from "../../assets/deals/image 43.png";
import preview from "../../assets/deals/scan-eye.png";
import compare from "../../assets/deals/Vector.png";
import ReactStars from "react-rating-stars-component";

const DealsOfDay = () => {
  return (
    <div className="md:px-side-padding px-12 pb-6">
      <div className="flex flex-row justify-between">
        <h4 className="text-h4 font-medium capitalize">Deals Of Day</h4>
        <div>See more items</div>
      </div>
      <div id="card-container" className="grid md:grid-cols-2 gap-4 py-4">
        <div className="flex flex-row justify-between gap-4 bg-white p-4">
          <div className="w-full flex justify-center">
            <img className="w-full" src={deals1} alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-start">
            <h1 className="font-bold md:text-justify">
              Wireless Bluetooth Headset Single Ear Earplugs Ultra...
            </h1>
            <div className="flex items-center flex-row">
              <ReactStars
                count={5}
                value={4.5}
                isHalf={true}
                size={20}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />{" "}
              <p className="mt-1">4.5 (121)</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <p className=" font-semibold">
                $<span className="text-2xl">6</span>
              </p>
              <span>$16</span>
              <span>-50%</span>
            </div>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor...
            </p>
            <div className="flex flex-row justify-between w-full bg-neutral-100 text-center">
              <button className="flex flex-row items-center justify-center gap-2 py-4 w-full">
                <span>
                  <img className="w-full" src={preview} alt="" />
                </span>
                <span>Preview</span>
              </button>
              <button className="flex flex-row items-center justify-center gap-2 py-4 w-full">
                <span>
                  <img className="w-full" src={compare} alt="" />
                </span>
                <span>Compare</span>
              </button>
            </div>
            <button className="bg-primary-194E8A w-full p-2 text-white mt-4">
              Add to Cart
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-row justify-between gap-4 bg-white p-4">
          <div className="w-full flex justify-center">
            <img className="w-full" src={deals2} alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-start">
            <h1 className="font-bold md:text-justify">
              Wireless Bluetooth Headset Single Ear Earplugs Ultra...
            </h1>
            <div className="flex items-center flex-row">
              <ReactStars
                count={5}
                value={4.5}
                isHalf={true}
                size={20}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />{" "}
              <p className="mt-1">4.5 (121)</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <p className=" font-semibold">
                $<span className="text-2xl">6</span>
              </p>
              <span>$16</span>
              <span>-50%</span>
            </div>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor...
            </p>
            <div className="flex flex-row justify-between w-full bg-neutral-100 text-center">
              <button className="flex flex-row items-center justify-center gap-2 py-4 w-full">
                <span>
                  <img className="w-full" src={preview} alt="" />
                </span>
                <span>Preview</span>
              </button>
              <button className="flex flex-row items-center justify-center gap-2 py-4 w-full">
                <span>
                  <img className="w-full" src={compare} alt="" />
                </span>
                <span>Compare</span>
              </button>
            </div>
            <button className="bg-primary-194E8A w-full p-2 text-white mt-4">
              Add to Cart
            </button>
          </div>
        </div>
        {/*  */}
        <div>
          <img className="w-full" src={deals3} alt="" />
        </div>
        <div>
          <img className="w-full" src={deals4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DealsOfDay;
