import { Rating } from "semantic-ui-react";
import axios from "axios";
// import { prisma } from '../../server/db/client';

// ------STARS
const RatingExampleDisabled = () => (
  <Rating defaultRating={3} maxRating={5} disabled />
);

export default RatingExampleDisabled;

let heartsItem;
function HandleHeartClick(e) {
  e.stopPropagation();
  //put your "put into favourites" code after this line
  let heart = e.target.getAttribute("aria-checked");
  heartsItem =
    e.target.closest("div").parentNode.parentNode.parentNode.parentNode.id;
  axios
    .post("/api/favourites", {
      heartsItem,
      heart,
    })
    .then((res) => {
      console.log("HOILA", res);
    })
    .catch((err) => {
      console.log("ERR MF", err);
    });
  console.log("heart", heart);
  console.log("heartsItem", heartsItem);
}
// need to send the post with the id we get from the heartsItem variable to the database

// ------HEART
export const Heart = () => (
  <Rating
    icon="heart"
    defaultRating={0}
    maxRating={1}
    size="huge"
    link="true"
    onClick={HandleHeartClick}
  />
);

//  each user will have a favourites table in the database
//  when the user clicks on the heart, the post id will be sent to the database
//  the post id will be added to the favourites table
//  the favourites table will be displayed on the favourites page
//  the favourites page will be a list of posts that the user has favourited
//  the user will be able to click on the heart again to remove the post from the favourites table
//  the user will be able to click on the post to go to the post page
