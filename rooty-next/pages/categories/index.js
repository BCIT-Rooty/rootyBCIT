import CategoryCard from "../../components/categoryCard";
import { useRouter } from "next/router";
import { FlexBox, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { Search } from "semantic-ui-react";
// import Review from "../../components/review";
import { ImgPlaceholder } from "../../styles/globals";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { prisma } from "../../server/db/client";
import Input from "../../components/inputs";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import TitlePage from "../../components/titlePage";


export default function Categories({ jsonCategories }) {
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
    return categories.map((category) => (
      <CategoryCard
        onClick={() =>
          r.push({
            pathname: `categories/${category.categoryId}`,
          })
        }
        key={category.categoryId}
        name={category.categoryName}
        image={category.image}
      ></CategoryCard>
    ));
  }

  return (
    <>
      <motion.Wrapper alignItems="start"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <FlexBox dir="column" width="100%" padding="0 0 70px 0">
          <TitlePage txt="Search"/>
            {/* <Search size="big"
              placeholder='Search...'
              onSearchChange={(e, data) => {
                setQuery(data.value)
              }}
              onResultSelect={(e, data) => 
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })} /> */}
                {/* delete the input if anything wrong */}
          <Input bgImage="/icons8-search-48.png" bgSize="30px" onChangingTheText={(e) => setQuery(e)} type="email" placeholder='Search services' margin="20px" padding='0px 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
          <FlexBox
            flexWrap="wrap"
            filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))"
          >
            {getCategories(categories)}
          </FlexBox>
        </FlexBox>
      </motion.Wrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const categoriesBE = await prisma.category.findMany();
  const jsonCategories = JSON.parse(JSON.stringify(categoriesBE));
  return {
    props: {
      jsonCategories,
    },
  };
}
