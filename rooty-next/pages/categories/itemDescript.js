import CategoryCard from "../../components/categoryCard";
import {useRouter} from 'next/router';
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import DisabledStars from "../../components/icons/starsDisabled";
import { HorizontalScrollContainer } from "../../styles/globals";
import ReviewHorizontalScroll from "../../components/reviews/reviewCards";
import { Icon } from "semantic-ui-react";
import ItemDescription from "../../components/itemDescript";

export default function ItemDescript() {

    
  return (
    <Wrapper alignItems="flex-start">
        <ItemDescription></ItemDescription>
    </Wrapper>
    )


}
