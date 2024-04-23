import apple1 from "../../assets/Apple/(6).png";
import apple2 from "../../assets/Apple/(1).png";
import apple3 from "../../assets/Apple/(2).png";
import apple4 from "../../assets/Apple/(3).png";
import apple5 from "../../assets/Apple/(4).png";
import apple6 from "../../assets/Apple/(5).png";

const Apple = () => {
  const apples = [
    { image: apple1, name: "Bleuets" },
    { image: apple2, name: "Aneth" },
    { image: apple3, name: "Aubergines" },
    { image: apple4, name: "Fraises" },
    { image: apple5, name: "Radis" },
    { image: apple6, name: "Feves Vertes" },
  ];

  return (
    <div className="px-side-padding pb-6">
      <div className="flex flex-row justify-between">
        <h4 className="text-h4 font-medium">Apple</h4>
        <div>See more items</div>
      </div>
      <div id="card-container" className="grid md:grid-cols-6 gap-3 py-4">
        {apples.map((apple, index) => (
          <div className="text-center" key={index}>
            <div className="bg-neutral-50">
              <img className="w-full" src={apple.image} alt="image" />
            </div>
            <div>
              <p className="capitalize pt-2 font-semibold">{apple.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apple;
