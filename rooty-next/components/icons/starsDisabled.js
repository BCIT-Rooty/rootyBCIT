import { Icon } from "semantic-ui-react";
import { FlexBox } from "../../styles/globals";


export default function DisabledStars({ 
    one="active icon", 
    second="active icon", 
    third="active icon", 
    fourth="active icon", 
    fifth="icon"
}) {

return(
    <div className="ui disabled rating" role="radiogroup" tabIndex="0">
    <i tabIndex="-1" aria-checked="false" aria-posinset="1" aria-setsize="5" className={one} role="radio"></i>
    <i tabIndex="-1" aria-checked="false" aria-posinset="2" aria-setsize="5" className={second} role="radio"></i>
    <i tabIndex="-1" aria-checked="true" aria-posinset="3" aria-setsize="5" className={third} role="radio"></i>
    <i tabIndex="-1" aria-checked="false" aria-posinset="4" aria-setsize="5" className={fourth} role="radio"></i>
    <i tabIndex="-1" aria-checked="false" aria-posinset="5" aria-setsize="5" className={fifth} role="radio"></i>
    </div>
)
}