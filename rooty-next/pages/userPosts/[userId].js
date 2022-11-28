import Item from "../../components/Item";
// import { getItemsForUser } from '../../../server/database.js'
import { prisma } from "../../server/db/client";
import { FlexBox, Wrapper } from "../../styles/globals";
import {useState} from "react"
import { AnimatePresence, motion } from "framer-motion";
import Text from "../../components/text";
import Button from "../../components/button";

export default function userPosts({ parsedItems }) {

  const [deleteMessage, setDeleteMessage] = useState("")

  return (
      <Wrapper padding="50px 0 0 0" height="fit-content" dir="column">
      <h1>My Posts</h1>
        <br></br>
        <br></br>
        <div>
          {parsedItems.map((item) => {
            return (
              <div key={item.postId}>
                <div key={item.id}>
                  <Item
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    rating={item.rating}
                    remove="remove"
                    description={item.description}
                    image={item.Photos[0].postPhotoUrl}
                    heart="false"
                    onNext={()=>{setDeleteMessage(true)}}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {deleteMessage && 
            <FlexBox position="fixed" width="300px" height="fit-content" borderRadius="16px" bgColor="#FFFFFF" top="30%" left="25%" boxShadow="0px 0px 8px rgba(0, 0, 0, 0.25)" justifyContent="start" alignItems="start" dir="column" padding="20px">
            <Text txt={"Are you sure you want to Delete " + "HERE IT SHOULD SAY THE POSTS NAME" + " Post?" }weight="700" size="24px" padding="0 0 30px 0"></Text>
            <Button type="cancel" txt="Delete this Post" bgColor="#F7F7FC" color="#4F4DB0" border="0.5px solid #545454" width="250px" onClose={()=>{DELETETHISPOST}}></Button>
            <Button type="cancel" txt="Cancel" color="#F7F7FC" bgColor="#4F4DB0" border="0.5px solid #545454" width="250px" onClose={()=>{setDeleteMessage(false)}}></Button>
        </FlexBox>
        }
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
  const userItems = await prisma.post.findMany({
    where: {
      authorId: +context.params.userId,
    },
    include: {
      category: true,
      Photos: true,
    },
  });
  let parsedItems = JSON.parse(JSON.stringify(userItems));
  // console.log("LOOK HERE",userItems)

  return {
    props: { parsedItems },
  };
}
