import Item from '../../components/Item';
import { getItemsForEachCategory } from '../../server/database.js';
import {useRouter} from 'next/router';
import { FlexBox, Wrapper } from '../../styles/globals';
import { ImgPlaceholder } from '../../styles/globals';
import Text from '../../components/text';
import GradientCard from '../../components/gradientCard';
import { Search } from 'semantic-ui-react'



export default function OneCategory({ categoryItems }) {

    const r = useRouter();

    console.log(categoryItems)
    return (
        <Wrapper>
            <FlexBox dir="column" width="100%">
                <FlexBox width="100%" dir="column">
                    <GradientCard bgImage="/3081629.jpg" width="100%" height="328px" borderRadius="0px" txt="Broadcast and Media" size="24px" margin="0px"></GradientCard>
                    <FlexBox margin="12px"><Search size="large"
                        placeholder='Search...'
                        onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })}/></FlexBox>
                </FlexBox>
            <div>
                {
                    categoryItems.map((item) => {
                        return (
                        <div key={item.id}>
                            <Item 
                                onClick={
                                ()=>r.push({
                                // pathname:`categoriespage/${item.id}/itemDescript`,
                                pathname:`/categoriespage/itemDescript`,  //hardcoded
                                })}
                                name={item.name} rating={item.rating} description={item.description} compensation={item.compensation} image={item.image}/>
                        </div>
                        )
                    })
                }
            </div>
        </FlexBox>
        </Wrapper>
    )
}


export async function getServerSideProps(context) { // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
    const categoryItems = await getItemsForEachCategory(+context.params.catId)
    console.log(categoryItems)
    return {
        props: { categoryItems }
    }
}
// also what is context?