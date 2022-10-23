import { categoryList } from "../../server/database";
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
        console.log()
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

      )))
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
      <Wrapper>
        <FlexBox dir="column" width="100%">
          <Review name="Gian" comment="Thjg! But I would make a better one..." fifth="active icon"></Review>
          <Review name="Sohrab" comment="I'm just cute" program="Full Stack WebDev"></Review>
          <Review name="Ana" comment="I would teach you better time management... dm me" fourth="icon"></Review>
          <Review name="Joyce" comment="I absolutely love the illustrations, thank you!" fifth="active icon"></Review>
          <Review name="Renata" comment="Speeeeechlesssss" fifth="active icon"></Review>
          <Review name="Murad" comment="You're so much fun girl. So get 1 star and laugh" second="icon" third="icon" fourth="icon" program="Full Stack WebDev"></Review>
          {/* <Review name="Joyce" comment="" second="icon" third="icon" fourth="icon" program="IDSP" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review> --- this is a component for the service description page */}
        </FlexBox>
      </Wrapper>
    </>
  )
}



