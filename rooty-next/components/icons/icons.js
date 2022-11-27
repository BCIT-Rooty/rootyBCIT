import { Rating } from "semantic-ui-react";
import axios from "axios";

// ------STARS
const RatingExampleDisabled = () => (
  <Rating defaultRating={3} maxRating={5} disabled />
);

export default RatingExampleDisabled;

function HandleHeartClick(e) {
  e.stopPropagation();
  //put your "put into favourites" code after this line
  let item = e.target;
  console.log(
    "this is the item u want",
    item
    // .closest("div").parentNode.parentNode.parentNode.parentNode.id
  );
  console.log("Renata is nice");
}

// ------HEART
export const Heart = () => (
  <Rating
    icon="heart"
    defaultRating={0}
    maxRating={1}
    size="huge"
    link
    onClick={HandleHeartClick}
  />
);
