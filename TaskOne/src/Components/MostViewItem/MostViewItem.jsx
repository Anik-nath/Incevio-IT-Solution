import ProductCard from "../SharedComponent/ProductCard/ProductCard";
import product1 from "../../assets/mostviewed/most (3).png";
import product2 from "../../assets/mostviewed/most (1).png";
import product3 from "../../assets/mostviewed/most (2).png";
import product4 from "../../assets/mostviewed/most (6).png";
import product5 from "../../assets/mostviewed/most (5).png";
import product6 from "../../assets/mostviewed/most (4).png";
import product7 from "../../assets/mostviewed/most (1).png";
import product8 from "../../assets/mostviewed/most (3).png";
import Slider from "react-slick";
const MostViewItem = () => {
  const DailyDiscover = [
    {
      id: 1,
      image: product1,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating:5,
      review: 120,
      originalPrice: 17,
    },
    {
      id: 2,
      image: product2,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 85,
      originalPrice: 39.99,
    },
    {
      id: 3,
      image: product3,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 150,
      originalPrice: 24.99,
    },
    {
      id: 4,
      image: product4,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 110,
      originalPrice: 49.99,
    },
    {
      id: 5,
      image: product5,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 95,
      originalPrice: 29.99,
    },
    {
      id: 6,
      image: product6,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 130,
      originalPrice: 59.99,
    },
    {
      id: 7,
      image: product7,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 180,
      originalPrice: 69.99,
    },
    {
      id: 8,
      image: product8,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 5,
      review: 105,
      originalPrice: 44.99,
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
          slidesToShow: 2,
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
    <div className="md:px-side-padding px-12 pb-6">
      <div className="flex flex-row justify-between">
        <h4 className="text-h4 font-medium">Most Viewed Items</h4>
        <div>
          <a className="" href="#">See more items</a>
        </div>
      </div>
      <div className="py-4">
        <Slider {...settings}>
          {DailyDiscover.map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MostViewItem;
