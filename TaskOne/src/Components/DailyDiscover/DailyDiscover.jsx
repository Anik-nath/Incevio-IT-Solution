import product1 from "../../assets/daily/daily (5).png";
import product2 from "../../assets/daily/daily (1).png";
import product3 from "../../assets/daily/daily (3).png";
import product4 from "../../assets/daily/daily (4).png";
import product5 from "../../assets/daily/daily (6).png";
import product6 from "../../assets/daily/daily (11).png";
import product7 from "../../assets/daily/daily (12).png";
import product8 from "../../assets/daily/daily (9).png";
import product9 from "../../assets/daily/daily (2).png";
import product10 from "../../assets/daily/daily (7).png";
import product11 from "../../assets/daily/daily (8).png";
import product12 from "../../assets/daily/daily (10).png";
import ProductCard from "../SharedComponent/ProductCard/ProductCard";


const DailyDiscover = () => {
  const DailyDiscover = [
    {
      id: 1,
      image: product1,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.5,
      review: 120,
      originalPrice: 17,
    },
    {
      id: 2,
      image: product2,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.2,
      review: 85,
      originalPrice: 39.99,
    },
    {
      id: 3,
      image: product3,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.8,
      review: 150,
      originalPrice: 24.99,
    },
    {
      id: 4,
      image: product4,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.6,
      review: 110,
      originalPrice: 49.99,
    },
    {
      id: 5,
      image: product5,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.3,
      review: 95,
      originalPrice: 29.99,
    },
    {
      id: 6,
      image: product6,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.7,
      review: 130,
      originalPrice: 59.99,
    },
    {
      id: 7,
      image: product7,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.9,
      review: 180,
      originalPrice: 69.99,
    },
    {
      id: 8,
      image: product8,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.4,
      review: 105,
      originalPrice: 44.99,
    },
    {
      id: 9,
      image: product9,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.6,
      review: 115,
      originalPrice: 39.99,
    },
    {
      id: 10,
      image: product10,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.5,
      review: 125,
      originalPrice: 59.99,
    },
    {
      id: 11,
      image: product11,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.8,
      review: 140,
      originalPrice: 49.99,
    },
    {
      id: 12,
      image: product12,
      title: "Wireless Bluetooth Headset Single Ear ...",
      rating: 4.7,
      review: 135,
      originalPrice: 34.99,
    },
  ];

  return (
    <div className="md:px-side-padding px-12 md:pb-6">
      <div className="flex flex-row justify-between">
        <h4 className="text-h4 font-medium">Daily Discover</h4>
        <div>See more items</div>
      </div>
      <div id="card-container" className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-3 gap-2 py-4">
        {DailyDiscover.map((item) => (
          <ProductCard  key={item.id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default DailyDiscover;
