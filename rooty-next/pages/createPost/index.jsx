import { useState } from 'react'
import { useEffect } from 'react'
import CreatePost from './CreatePost.jsx'
import {useRouter} from 'next/router';
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Home(props) {
  // const router = useRouter();
  const [showPost, setShowPost] = useState(true)
  const [posts, setPosts] = useState([{
    id: 1,
    name: "I will mix your audio"
  }])

console.log(props.thisSession.user)

  return (
    <>
      {showPost ? <CreatePost key={"createPostComponent"} thisSession={props.thisSession.user.email} /> : posts.map(m => <p key={m}>{m.name}</p>)}
    </>
  )
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

  let thisSession = JSON.parse(JSON.stringify(session));
  console.log("look at this2222" ,thisSession);
  
  return {
    props: { thisSession },
  };
}