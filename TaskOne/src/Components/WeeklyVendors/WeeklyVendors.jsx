import vendorsPro1 from "../../assets/vendors/1325876.png";
import vendorsPro2 from "../../assets/vendors/1092360.png";
import vendorsPro3 from "../../assets/vendors/1338928.png";
import vendorsPro4 from "../../assets/vendors/1590.png";
import vendorsPro5 from "../../assets/vendors/937988.png";
import vendorsPro6 from "../../assets/vendors/1169007.png";
import vendorsPro7 from "../../assets/vendors/1374906 (1).png";
import vendorsPro8 from "../../assets/vendors/630664.png";
import vendorsPro9 from "../../assets/vendors/888831.png";
import vendorsPro10 from "../../assets/vendors/937988 (1).png";
import vendorsPro11 from "../../assets/vendors/1331919.png";
import vendorsPro12 from "../../assets/vendors/1225330.png";
import vendorsPro13 from "../../assets/vendors/1082806.png";
import vendorsPro14 from "../../assets/vendors/635899.png";
import vendorsPro15 from "../../assets/vendors/11572.png";
import ReactStars from "react-rating-stars-component";
import frame1 from "../../assets/vendors/Frame 26865.png";
import frame2 from "../../assets/vendors/Frame 27865.png";
import frame3 from "../../assets/vendors/Frame 28865.png";
import frame4 from "../../assets/vendors/Frame 29865.png";
import frame5 from "../../assets/vendors/Frame 36865.png";




const WeeklyVendors = () => {
  const vendorsProduct = [
    {
      title: "Pizza Hut",
      total_items: 400,
      rating: 5,
      total_reviews: 121,
      logo: frame1,
      product_image1: vendorsPro1,
      product_image2: vendorsPro2,
      product_image3: vendorsPro3,
    },
    {
      title: "McDonald's",
      total_items: 300,
      rating: 4.5,
      total_reviews: 98,
      logo: frame2,
      product_image1: vendorsPro4,
      product_image2: vendorsPro5,
      product_image3: vendorsPro6,
    },
    {
      title: "Subway",
      total_items: 250,
      rating: 4.8,
      total_reviews: 85,
      logo: frame3,
      product_image1: vendorsPro7,
      product_image2: vendorsPro8,
      product_image3: vendorsPro9,
    },
    {
      title: "Burger King",
      total_items: 350,
      rating: 4.7,
      total_reviews: 102,
      logo: frame4,
      product_image1: vendorsPro10,
      product_image2: vendorsPro11,
      product_image3: vendorsPro12,
    },
    {
      title: "Pasta King",
      total_items: 350,
      rating: 4.7,
      total_reviews: 102,
      logo: frame5,
      product_image1: vendorsPro13,
      product_image2: vendorsPro14,
      product_image3: vendorsPro15,
    },
  ];
  return (
    <div className="md:px-side-padding px-12 pb-6">
      <div className="text-left">
        <h4 className="text-h4 font-medium">Weekly Top Vendors</h4>
      </div>
      <div id="card-container" className="grid md:grid-cols-5 grid-cols-2 gap-3 py-4">
        {
            vendorsProduct.map(item => 
        
        <div key={item.name} className="flex flex-col justify-between bg-white p-2">
          <div
            id="top-part"
            className="mb-4 flex flex-row gap-x-2 w-full justify-between items-center "
          >
            <div
              style={{ width: "80px", height: "80px" }}
              className="flex flex-row justify-center items-center"
            >
              <img className="w-full" src={item.logo} alt="frame1" />
            </div>
            <div className="w-full">
              <div>
                <h5 className="font-bold text-h5">{item.title}</h5>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="w-1/2 flex flex-col items-start text-sm">
                  <span>Items</span>
                  <span>({item.total_items})</span>
                </div>
                <div className="w-full flex flex-col items-end text-sm">
                  <ReactStars
                    count={5}
                    value={item.rating}
                    isHalf={true}
                    size={22}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <span className="text-interface-676E6E">({item.total_reviews}) Reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div id="image-part" className="grid grid-cols-2 gap-2">
            <div className="w-full flex items-center">
              <img
                className="w-full h-full shadow"
                src={item.product_image1}
                alt="vendorsPro1"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <img
                className="w-full h-1/2 shadow"
                src={item.product_image3}
                alt="vendorsPro2"
              />
              <img
                className="w-full h-1/2 shadow"
                src={item.product_image2}
                alt="vendorsPro3"
              />
            </div>
          </div>
        </div>
    
)
}
      </div>
    </div>
  );
};

export default WeeklyVendors;
