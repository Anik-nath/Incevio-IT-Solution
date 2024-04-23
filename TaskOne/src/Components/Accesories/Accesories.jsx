import accesories1 from '../../assets/Accesories/accesories (1).png';
import accesories2 from '../../assets/Accesories/accesories (2).png';
import accesories3 from '../../assets/Accesories/accesories (3).png';
import accesories4 from '../../assets/Accesories/accesories (4).png';
import accesories5 from '../../assets/Accesories/accesories (5).png';
import accesories6 from '../../assets/Accesories/accesories (6).png';
import accesories7 from '../../assets/Accesories/accesories (7).png';
import accesories8 from '../../assets/Accesories/accesories (8).png';
import accesories9 from '../../assets/Accesories/accesories (9).png';


const Accesories = () => {
    const Accesories = [
        {
          id: 1,
          image: accesories1,
          title: "Wireless Bluetooth Headset Single",
          description: "Wireless Bluetooth Headset Single",
          review: 120,
          originalPrice: 17,
        },
        {
          id: 2,
          image: accesories2,
          title: "Wireless Bluetooth Headset Single",
          description: "Wireless Bluetooth Headset Single",
          review: 85,
          originalPrice: 39.99,
        },
        {
          id: 3,
          image: accesories3,
          title: "Wireless Bluetooth Headset Single",
          description: "Wireless Bluetooth Headset Single",
          review: 150,
          originalPrice: 24.99,
        },
        {
          id: 4,
          image: accesories4,
          title: "Wireless Bluetooth Headset Single",
          description: "Wireless Bluetooth Headset Single",
          review: 110,
          originalPrice: 49.99,
        },
        {
          id: 5,
          image: accesories5,
          title: "Wireless Bluetooth Headset Single Ear ...",
          description: "Wireless Bluetooth Headset Single Ear",
          review: 95,
          originalPrice: 29.99,
        },
        {
          id: 6,
          image: accesories6,
          title: "Wireless Bluetooth Headset Single",
          description: "Wireless Bluetooth Headset Single",
          review: 130,
          originalPrice: 59.99,
        },
        {
            id: 7,
            image: accesories7,
            title: "Wireless Bluetooth Headset Single",
            description: "Wireless Bluetooth Headset Single",
            review: 180,
            originalPrice: 69.99,
          },
          {
            id: 8,
            image: accesories8,
            title: "Wireless Bluetooth Headset Single",
            description: "Wireless Bluetooth Headset Single",
            review: 105,
            originalPrice: 44.99,
          },
          {
            id: 9,
            image: accesories9,
            title: "Wireless Bluetooth Headset Single",
            description: "Wireless Bluetooth Headset Single",
            review: 115,
            originalPrice: 39.99,
          },
        
      ];
    return (
        <div className="px-side-padding pb-6">
            <div>
                <h4 className="text-h4 font-medium">On Sellign Accesories</h4>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4">
                {
                    Accesories.map(item => 
                    
            <div key={item.id} className="grid grid-cols-3 bg-white">
              <div className="div">
                <img className='w-full' src={item.image} alt="accesories1" />
              </div>
              <div className="col-span-2 flex flex-col justify-center items-start p-4">
                <p className='text-p3 font-semibold'>{item.title}</p>
                <p className='text-p3 py-2'>{item.description}</p>
                <div className="flex flex-row gap-2 justify-center">
                <span className="font-bold">${(item.originalPrice * 0.5).toFixed(2)}</span>{" "}
                <span>
                  $<s>{item.originalPrice}</s>
                </span>{" "}
                50%
              </div>
              </div>
            </div>
            )
        }
            </div>
        </div>
    );
};

export default Accesories;