import CategoryCard from "../../components/categoryCard";
import { useRouter } from 'next/router';
import { FlexBox, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { Search } from 'semantic-ui-react';
// import Review from "../../components/review";
import axios from 'axios';
import { useEffect, useState } from "react";





export default function categories() {
  const r = useRouter();

  const [categories, setCategories] = useState([]);

  let response;
  useEffect(() => {
    axios.get('/api/categories')
      .then(res => {
        response = res.data;
        setCategories(response);
        console.log('THIS IS RES DATA',response);
      })
      .catch(err => console.log('This error', err))
  }, [])


  function getCategories(categories) {
    return (
      categories.map(category => (

        <CategoryCard onClick={
          () => r.push({
            pathname: `categoriespage/${category.categoryId}`,
          })}
          key={category.categoryId} name={category.categoryName} image={category.image}>
        </CategoryCard>

      ))
      )
  };


  return (
    <>

      <Wrapper alignItems="start">
        <FlexBox dir="column" width="100%">
          <FlexBox width="100%" justifyContent="start" alignItems="flex-end" border="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 7px 40px" minHeight="100px">
            <Text txt="Search" size="24px" weight="bold"></Text>
          </FlexBox>
          <FlexBox padding="30px 0px 13px 0px">
            <Search size="big"
              placeholder='Search...'
              onResultSelect={(e, data) =>
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })} />
          </FlexBox>
          <FlexBox flexWrap="wrap" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
            {getCategories(categories)}
          </FlexBox>
        </FlexBox>
      </Wrapper>
    </>
  )
}



