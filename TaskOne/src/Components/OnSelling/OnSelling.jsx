import selling1 from "../../assets/onselling/image 44.png";
import selling2 from "../../assets/onselling/image 46.png";

const OnSelling = () => {
  return (
    <div className="md:px-side-padding px-12 pb-6">
      <div>
        <h4 className="text-h4 font-medium">On Selling Products</h4>
      </div>
      <div className="grid grid-cols-5 md:gap-0 mt-4">
        <div className="flex items-center justify-center">
          <img className="max-w-full max-h-full" src={selling2} alt="" />
        </div>
        <div className="row-span-2 col-span-3 flex items-center justify-center">
          <img className="max-w-full max-h-full md:p-5 p-2" src={selling1} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="max-w-full max-h-full" src={selling2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="max-w-full max-h-full" src={selling2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="max-w-full max-h-full" src={selling2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnSelling;
