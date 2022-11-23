import Head from "next/head";
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Button from "../components/button";
import { useRouter } from "next/router";


export default function Home() {

  const router = useRouter()

  async function handleClickRegister(e) {
    router.push("/register")
  }
  async function handleClickLogin(e) {
    router.push("/login")
  }
  


  return (
    <Wrapper
      dir="column"
      bgColor="#FFFDFA"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Head>
        <title>Welcome to Rooty</title>
      </Head>

      <FlexBox>
        
          <Button onClick={handleClickRegister} txt="Register" bgColor="#4F4DB0"></Button>
       

        
          <Button onClick={handleClickLogin} txt="Log In" bgColor="#4F4DB0"></Button>
        
      </FlexBox>
    </Wrapper>
  );
}
