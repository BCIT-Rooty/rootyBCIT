import CategoryCard from "../../components/categoryCard";
import { useRouter } from 'next/router';
import { FlexBox, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { Search } from 'semantic-ui-react';
// import Review from "../../components/review";
import { ImgPlaceholder } from "../../styles/globals";
import axios from 'axios';
import { useEffect, useState, useMemo } from "react";
import {prisma} from "../../server/db/client";
import Input from "../../components/inputs";
import { motion } from "framer-motion";



export default function Categories({jsonCategories}) {
  const r = useRouter();

  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
  // console.log(jsonCategories);
  const searchedCategories = jsonCategories.filter(item => {
    return item.categoryName.toLowerCase().includes(query.toLocaleLowerCase())
  })
  setCategories(searchedCategories)
  }, [query])




  function getCategories(categories) {
    return (
      categories.map(category => (

        <CategoryCard onClick={
          () => r.push({
            pathname: `categories/${category.categoryId}`,
          })}
          key={category.categoryId} name={category.categoryName} image={category.image}>
        </CategoryCard>

      ))
      )
  };


  return (
    <>
      <motion.Wrapper alignItems="start"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <FlexBox dir="column" width="100%" padding="0 0 70px 0">
          <FlexBox width="100%" justifyContent="start" alignItems="flex-end" border="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 7px 40px" minHeight="100px">
            <Text txt="Search" size="24px" weight="bold"></Text>
          </FlexBox>
          <FlexBox padding="30px 0px 13px 0px">
            {/* <Search size="big"
              placeholder='Search...'
              onSearchChange={(e, data) => {
                setQuery(data.value)
              }}
              onResultSelect={(e, data) => 
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })} /> */}
                {/* delete the input if anything wrong */}
          <Input bgImage="/icons8-search-48.png" bgSize="30px" onChangingTheText={(e) => setQuery(e)} type="email" placeholder='Search services' margin="0px 20px 0px 20px" padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
          </FlexBox>
          <FlexBox flexWrap="wrap" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
            {getCategories(categories)}
          </FlexBox>
        </FlexBox>
      </motion.Wrapper>
    </>
  )
}


export async function getStaticProps() {
  const categoriesBE = await prisma.category.findMany();
      const jsonCategories = JSON.parse(JSON.stringify(categoriesBE));
      return {
        props: {
          jsonCategories
        }
      }
}