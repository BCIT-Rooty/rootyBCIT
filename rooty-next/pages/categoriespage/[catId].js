import Item from '../../components/Item';
import { getItemsForEachCategory } from '../../server/database.js';
import {useRouter} from 'next/router';



export default function OneCategory({ categoryItems }) {

    const r = useRouter();

    console.log(categoryItems)
    return (
        <div>
            {
                categoryItems.map((item) => {
                    return (
                    <div key={item.id}>
                        <Item 
                            // onClick={
                            // ()=>r.push({
                            // pathname:`${item.id}/descript`,
                            // })}
                            name={item.name} rating={item.rating} description={item.description} compensation={item.compensation} image={item.image}/>
                    </div>
                    )
                })
            }
        </div>
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