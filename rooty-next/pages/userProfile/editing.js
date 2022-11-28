import { Wrapper } from "../../styles/globals";
import TitlePage from "../../components/titlePage";
import { useRouter } from "next/router";
import { useState } from "react";
import InputWithText from "../../components/inputWithText";
import AddPortfolio from "../../components/addPortfolio";
import axios from "axios";
import { useEffect } from "react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { prisma } from "../../server/db/client";

export default function EditProfile({ sessionUserObj }) {
  const [firstName, setFirstName] = useState(sessionUserObj.name);
  const [lastName, setLastName] = useState(sessionUserObj.lastName);
  const [program, setProgram] = useState(sessionUserObj.program);
  const [aboutMe, setAboutMe] = useState(sessionUserObj.aboutMe);

  const r = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/editUserProfile", {
      firstName,
      lastName,
      program,
      aboutMe,
    });
    r.push(`/userProfile/${sessionUserObj.userId}`);
  }

  return (
    <Wrapper
      dir="column"
      width="100vw"
      alignItems="start"
      height="fit-content"
      padding="0 0 80px 20px"
    >
      <form onSubmit={handleSubmit}>
        <TitlePage
          txt="Edit Profile"
          type="Done"
          margin="0 0 0 -20px"
          onClick={() => {
            r.push(`/userProfile/${sessionUserObj.userId}`);
          }}
        />
        <InputWithText
          txt="Profile Image"
          type="file"
          bgImage="/face2.jpg"
          margin="0 0 0 -20px"
        ></InputWithText>
        <InputWithText
          txt="First name"
          type="textarea"
          margin="0 0 0 -20px"
          defaultValue={firstName}
          onChangingTheText={(e) => {
            setFirstName(e);
          }}
        ></InputWithText>
        <InputWithText
          txt="Last name"
          type="textarea"
          margin="0 0 0 -20px"
          defaultValue={lastName}
          onChange={(e) => {
            setLastName(e);
          }}
        ></InputWithText>
        <InputWithText
          txt="Program"
          type="textarea"
          margin="0 0 0 -20px"
          defaultValue={program}
          onChange={(e) => {
            setProgram(e);
          }}
        ></InputWithText>
        <InputWithText
          txt="About Me / Education / Skills"
          type="textarea"
          margin="0 0 0 -20px"
          bottomBorder="0.5px solid black"
          defaultValue={aboutMe}
          onChange={(e) => {
            setAboutMe(e);
          }}
        ></InputWithText>
        {/* <AddPortfolio defaultValue="Digital Design and Development"></AddPortfolio> */}
        <button type="submit"></button>
      </form>
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const sessionUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  let sessionObj = JSON.parse(JSON.stringify(session));
  let sessionUserObj = JSON.parse(JSON.stringify(sessionUser));

  // console.log("SESSION OBJ EDITING", sessionObj);
  // console.log("SESSION USER OBJ EDITING", sessionUserObj);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionObj,
      sessionUserObj,
    },
  };
}
