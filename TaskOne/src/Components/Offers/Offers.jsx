import offer1 from "../../assets/Offer/image 55.png";
import offer2 from "../../assets/Offer/image 58.png";
import offer3 from "../../assets/Offer/image 59.png";
import offer4 from "../../assets/Offer/image 60.png";
import offer5 from "../../assets/Offer/image 61.png";
import offer6 from "../../assets/Offer/image 62.png";

const Offers = () => {
    return (
        <div className="md:px-side-padding px-12 md:pb-24">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            <div>
                <img src={offer1} alt="offer1" />
            </div>
            <div>
                <img src={offer2} alt="offer2" />
            </div>
            <div>
                <img src={offer3} alt="offer3" />
            </div>
            <div>
                <img src={offer4} alt="offer4" />
            </div>
            <div>
                <img src={offer5} alt="offer5" />
            </div>
            <div>
                <img src={offer6} alt="offer6" />
            </div>
        </div>
    </div>
    );
};

export default Offers;