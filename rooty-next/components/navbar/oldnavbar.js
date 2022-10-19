import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { purple } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import Tab from '@mui/material/Tab';
// import Button from '@mui/material/Button';
// import Link from 'next/link'
// import { NextLinkComposed } from '../src/Link';
// component={NextLinkComposed}



export default function OldNavBar({ route }) {

  const pages = [
    "/homepage", "/categoriespage", "/postspage", "/chatpage", "/accountpage"
  ]
  const index = pages.findIndex(page => page == route)
  // const [value, setValue] = useState(0);
  const r = useRouter();
  // const [navBarIcon, setNavBarIcon] = useState(1);
  const HandleNavBarIcons = (name, num) => {
    r.push(name)
    // if (name === "/homepage"){
    //   //homepage is active
    //   console.log("home");
    //   // r.push(name);
    // } else 
    // if (name === "/categoriespage"){
    //   //categoriespage is active
    //   console.log("cate");
    //   // r.push(name)
    // } else 
    // if (name === "/postspage"){
    //   //postspage is active
    //   console.log("posts");
    //   // r.push(name)
    // } else 
    // if (name === "/chatpage"){
    //   //chatpage is active
    //   console.log("chat");
    //   // r.push(name)
    // } else
    // if (name === "/accountpage"){
    //   //accountpage is active
    //   console.log("account");
    //   // r.push(name)
    // }
  }

  // const showLabels = true
  // const NavBarIcons = styled(BottomNavigationAction)`
  //   font-size: large
  // ` 

  return (
    <Box sx={{ width: "100vw", color: purple[400] }}>
      <BottomNavigation
        showLabels
        value={index}
      >
        <Tab icon={<HomeIcon fontSize="large" />} to="/homepage"
          onClick={() => HandleNavBarIcons("/homepage", 1)} />
        <Tab icon={<SearchIcon fontSize="large" />} to="/categoriespage"
          onClick={() => HandleNavBarIcons("/categoriespage", 2)} />
        <Tab icon={<AddIcon fontSize="large" />} to="/postspage"
          onClick={() => HandleNavBarIcons("/postspage", 3)} />
        <Tab icon={<SmsIcon fontSize="large" />} to="/chatpage"
          onClick={() => HandleNavBarIcons("/chatpage", 4)} />
        <Tab icon={<PersonIcon fontSize="large" />} to="/accountpage"
          onClick={() => HandleNavBarIcons("/accountpage", 5)} />
      </BottomNavigation>
    </Box>
  )


  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex
  `
  const NavBarIcon = styled.img`
    width:50px;
    height: 50px;
    border: solid
  `

  return (<Container>
    <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/homepage") }}></NavBarIcon>
    <NavBarIcon src='/homefill.png' onClick={() => { HandleNavBarIcons("/categoriespage") }}></NavBarIcon>
    <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/postspage") }}></NavBarIcon>
    <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/chatpage") }}></NavBarIcon>
    <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/accountpage") }}></NavBarIcon>
  </Container>
  )
}


// import {useRouter} from 'next/router';
// import {useState} from 'react';
// import styled from 'styled-components';

// export default function NavBar(navBarNum=1) {

//   const r = useRouter();
//   const [navBarIcon, setNavBarIcon] = useState(1);
//   const HandleNavBarIcons = (navBarIcon) => {
//     if (navBarIcon === 1){
//       //homepage is active
//       r.push("/homepage");
//       setNavBarIcon(1)
//     }
//     if (navBarIcon === 2){
//       //categoriespage is active
//       r.push("/categoriespage");
//       setNavBarIcon(2)
//     }
//     if (navBarIcon === 3){
//       //postspage is active
//       r.push("/postspage")
//     }
//     if (navBarIcon === 4){
//       //chatpage is active
//       r.push("/chatpage")
//     }
//     if (navBarIcon === 5){
//       //accountpage is active
//       r.push("/accountpage")
//     }
//   }

//   const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display:flex
//   `
//   const NavBarIcon = styled.div`
//     width:20%;
//     height: fit-content;
//     padding: 10px;
//     background-color: beige;
//     font-size: 30px
//   `

//   return (
//     <Container>
//         <NavBarIcon navBarNum = {navBarNum} onClick={() =>{setNavBarIcon(1); HandleNavBarIcons(1)}}>{navBarIcon}</NavBarIcon>
//         <NavBarIcon navBarNum = {navBarNum} onClick={()=>{setNavBarIcon(2); HandleNavBarIcons(2)}}>{navBarIcon}</NavBarIcon>
//         <img src='rooty-next/public/homeoutline.png'></img>
//         <NavBarIcon onClick={()=>setNavBarIcon(3)}>{navBarIcon}</NavBarIcon>
//         <NavBarIcon onClick={()=>setNavBarIcon(4)}>{navBarIcon}</NavBarIcon>
//         <NavBarIcon onClick={()=>setNavBarIcon(5)}>{navBarIcon}</NavBarIcon>
//     </Container>
//   )

// }