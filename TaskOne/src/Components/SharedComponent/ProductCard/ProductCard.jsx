import ReactStars from "react-rating-stars-component";
const ProductCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const {image, title,rating,review,originalPrice} = props.item;
    return (
        <div
            id="cards"
            className="max-w-full overflow-hidden bg-white"
          >
            <div style={{ height: "160px" }}>
              <img className="w-full h-full" src={image} alt="" />
            </div>

            <div className="p-4">
              <p className="font-semibold mb-2 text-p2">{title} </p>
              <div className="flex flex-row justify-center">
              <ReactStars
                count={5}
                value={rating}
                isHalf={true}
                size={24}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              </div>
              <p className="text-gray-700 text-base text-center pb-2">
                ({review}) Review
              </p>
              <div className="flex flex-row gap-2 justify-center">
                <span className="font-bold">${(originalPrice * 0.5).toFixed(2)}</span>{" "}
                <span>
                  $<s>{originalPrice}</s>
                </span>{" "}
                50%
              </div>
            </div>
          </div>
    );
};

export default ProductCard;