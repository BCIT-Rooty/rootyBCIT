import { Rating } from 'semantic-ui-react'


// ------STARS
const RatingExampleDisabled = () => (
  <Rating defaultRating={3} maxRating={5} disabled />
)

export default RatingExampleDisabled;

function HandleHeartClick(e){
  e.stopPropagation();
  //put your "put into favourites" code after this line
  console.log("Renata is nice")
}

// ------HEART
export const Heart = () => (
  <Rating icon='heart' defaultRating={0} maxRating={1} size='huge' link onClick={HandleHeartClick}/>
)