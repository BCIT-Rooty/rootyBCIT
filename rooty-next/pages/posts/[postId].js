import { categoryList } from "../../server/database";
import CategoryCard from "../../components/categoryCard";
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { prisma } from "../../server/db/client";
import { Icon } from "semantic-ui-react";
import ReviewHorizontalScroll from "../../components/reviews/reviewCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useRouter } from "next/router";
import ItemDescNavbar from "../../components/navbar/itemDescNavbar";
import ReviewActiveStars from "../../components/reviews/reviewActiveStars";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Button from "../../components/button";
import LeaveReview from "../../components/reviews/leaveReview";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function ItemDescript({ parsedItems, thisSession }) {
  let userName =
    parsedItems[0].author.name + " " + parsedItems[0].author.lastName;
  let description = parsedItems[0].description;
  let title = parsedItems[0].title;
  let image = parsedItems[0].image;
  let rating = parsedItems[0].rating;
  let compensation = parsedItems[0].compensation;
  let authorImage = parsedItems[0].author.image;
  let authorId = parsedItems[0].authorId;
  let postId = parsedItems[0].postId;
  let postPhoto = parsedItems[0].Photos[0].postPhotoUrl;

  let categoryText = parsedItems[0].category.categoryName;
  let authorName = parsedItems[0].author.name;
  const router = useRouter();
  function handleLinkClick() {
    const link = `/categories/${parsedItems[0].categoryId}`;
    router.push(link);
  }
  async function startChat() {
    await axios.post("/api/startChat", {author: parsedItems[0].author, thisUserEmail: thisSession.user.email, postId: parsedItems[0].postId }).then(result => {
      if (result.data.name) {
        return
      }
      console.log(result.data)
      const link = `/chat/${result.data.theChat}`;
      router.push(link);
    })
    return
  }
  const [value, setValue] = useState(4);
  const [showModal, setShowModal] = useState("default");

  function onPublish() {
    const link = `/home`;
    r.push(link);
  }

  function onClose() {
    const link = `/categories/${parsedItems[0].postId}`;
    router.push(link);
  }
  return (
    <Wrapper
      alignItems="flex-start"
      height="fit-content"
      dir="column"
      padding="0 0 50px 0"
    >
      {/* <FlexBox dir="column" width="100%"> */}
      <FlexBox
        width="100%"
        top="0px"
        bgImage={postPhoto}
        height="300px"
        boxShadow=""
      >
        <FlexBox position="relative" top="-100px" left="-160px">
          <ArrowBackIosIcon
            fontSize="large"
            onClick={() => handleLinkClick()}
          ></ArrowBackIosIcon>
        </FlexBox>
        {/* <ImgPlaceholder bgImage={postPhoto} width="100%" height="328px"></ImgPlaceholder> */}
      </FlexBox>
      <FlexBox width="100%" dir="column">
        <ReviewActiveStars
          name={userName}
          nameSize="20px"
          comment=""
          program=""
          boxWidth="73px"
          image="/camera-man.jpg"
        ></ReviewActiveStars>
        <FlexBox
          dir="column"
          alignItems="left"
          width="100%"
          padding="0 30px 0 30px"
          minHeight="100px"
          border="0.5px solid rgba(191, 191, 191, 1)"
        >
          <Text txt={title} size="21px" weight="600"></Text>
          <Text size="15px" txt={categoryText} color="grey"></Text>
        </FlexBox>
        <FlexBox
          dir="column"
          alignItems="left"
          width="100%"
          padding="0 30px 0 30px"
          minHeight="100px"
          border="0.5px solid rgba(191, 191, 191, 1)"
        >
          <Text txt={description}></Text>
        </FlexBox>
        <FlexBox dir="column" width="100%">
          <FlexBox
            dir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            padding="20px 30px 0 30px"
          >
            <FlexBox padding="0 0 15px 0">
              <Rating name="read-only" value={value} max={4} readOnly />
              <Text txt="4.0" weight="bold" size="19px" padding="0 10px"></Text>
            </FlexBox>
            <FlexBox justifyContent="space-between" width="100%">
              <Text txt="Service Satisfaction"></Text>
              <FlexBox alignItems="flex-start">
                <Icon className="star"></Icon>
                <Text txt="4.0"></Text>
              </FlexBox>
            </FlexBox>
            <FlexBox justifyContent="space-between" width="100%">
              <Text txt="Seller Response"></Text>
              <FlexBox alignItems="flex-start">
                <Icon className="star"></Icon>
                <Text txt="4.0"></Text>
              </FlexBox>
            </FlexBox>
            <FlexBox
              justifyContent="space-between"
              width="100%"
              padding="0 2px 0 0"
            >
              <Text txt="Would Recommend"></Text>
              <FlexBox alignItems="flex-start">
                <Icon className="star"></Icon>
                <Text txt="4.5"></Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <ReviewHorizontalScroll
          bgImage1="/face5.jpg"
          bgImage2="/face4.jpg"
          bgImage3="/face3.jpg"
          bgImage4="/face2.jpg"
          bgImage5="/face1.jpg"
        ></ReviewHorizontalScroll>
      </FlexBox>

      <FlexBox width="100%" margin="0 0 30px 0px" dir="column">
        <Button
          onClick={() => setShowModal("show")}
          width="fit-content"
          padding="0px 20px"
          type="add"
          iconName="write"
          txt="Write a review"
          bgColor="#4F4DB0"
          borderRadius="16px"
          border="2px solid #232323"
        ></Button>
      </FlexBox>

      <AnimatePresence exitBeforeEnter>
        {showModal === "show" && (
          <FlexBox position="absolute" bottom="-290px" left="0vw" width="100vw">
            <motion.div
              initial={{ y: 900 }}
              animate={{ y: 0, transition: { duration: 0.7, delay: 0 } }}
              exit={{ y: 900 }}
            >
              <LeaveReview
                onClose={() => setShowModal("default")}
                //onPublish use this for a publish function
              ></LeaveReview>
            </motion.div>
          </FlexBox>
        )}
      </AnimatePresence>

      <ItemDescNavbar
        priceOfTheService={parsedItems[0].price}
        isItNegotiable={parsedItems[0].isNegotiableActive}
        position="fixed"
        top="92vh"
        onClick={() => startChat()}
      ></ItemDescNavbar>
    </Wrapper>
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

  let items = await prisma.post.findMany({
    where: {
      postId: +context.params.postId,
    },
    include: {
      author: true,
      category: true,
      Photos: true,
    },
  });

  let parsedItems = JSON.parse(JSON.stringify(items));
  let thisSession = JSON.parse(JSON.stringify(session));
  console.log("look at this" ,parsedItems);
  // console.log("look at this" ,thisSession);
  return {
    props: { parsedItems, thisSession },
  };
}
