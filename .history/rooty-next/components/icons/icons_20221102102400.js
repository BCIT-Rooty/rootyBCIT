import { Rating } from 'semantic-ui-react'


// ------STARS
const RatingExampleDisabled = () => (
  <Rating defaultRating={3} maxRating={5} disabled />
)

export default RatingExampleDisabled;



// ------HEART
export const Heart = () => (
  <Rating icon='heart' defaultRating={0} maxRating={1} size='huge'/>
)