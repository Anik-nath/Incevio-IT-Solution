import catagory1 from "../../assets/catagories/catagories (1).png";
import catagory2 from "../../assets/catagories/catagories (2).png";
import catagory3 from "../../assets/catagories/catagories (3).png";
import catagory4 from "../../assets/catagories/catagories (4).png";
import catagory5 from "../../assets/catagories/catagories (5).png";
import catagory6 from'../../assets/catagories/catagories (15).png'
import catagory7 from "../../assets/catagories/catagories (6).png";
import catagory8 from "../../assets/catagories/catagories (7).png";
import catagory9 from "../../assets/catagories/catagories (8).png";
import catagory10 from "../../assets/catagories/catagories (9).png";
import catagory11 from "../../assets/catagories/catagories (10).png";
import catagory12 from "../../assets/catagories/catagories (11).png";
import catagory13 from "../../assets/catagories/catagories (12).png";
import catagory14 from "../../assets/catagories/catagories (13).png";
import catagory15 from "../../assets/catagories/catagories (14).png";


const Catagories = () => {
  const catagories = [
    {
      catagoryImg: catagory1,
      catagoryName: "Portrait",
    },
    {
      catagoryImg: catagory2,
      catagoryName: "Space",
    },
    {
      catagoryImg: catagory3,
      catagoryName: "Texture",
    },
    {
      catagoryImg: catagory4,
      catagoryName: "Minimal",
    },
    {
      catagoryImg: catagory5,
      catagoryName: "Food",
    },
    {
      catagoryImg: catagory6,
      catagoryName: "Art",
    },
    {
      catagoryImg: catagory7,
      catagoryName: "Architecture",
    },
    {
      catagoryImg: catagory8,
      catagoryName: "Nature",
    },
    {
      catagoryImg: catagory9,
      catagoryName: "Colorful",
    },
    {
      catagoryImg: catagory10,
      catagoryName: "Interior",
    },
    {
      catagoryImg: catagory11,
      catagoryName: "Colorful",
    },
    {
      catagoryImg: catagory12,
      catagoryName: "Business",
    },
    {
      catagoryImg: catagory13,
      catagoryName: "Plant",
    },
    {
      catagoryImg: catagory14,
      catagoryName: "Animal",
    },
    {
      catagoryImg: catagory15,
      catagoryName: "Technology",
    },
  ];
  return (
    <div className="px-side-padding pb-6">
      <div>
        <h4 className="text-h4 font-medium capitalize">Shop by catagories</h4>
      </div>
      <div className="grid grid-cols-5 gap-4 py-4">
        {catagories.map((item) => (
          <div
            key={item.catagoryImg}
            className="flex flex-row justify-between items-center bg-neutral-200"
          >
            <div className="w-full">
              <img src={item.catagoryImg} alt="" />
            </div>
            <div className="w-full text-center font-bold">Portrait</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
