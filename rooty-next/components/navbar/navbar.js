import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Tab from '@mui/material/Tab';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import Button from '@mui/material/Button';
// import Link from 'next/link'
// import { NextLinkComposed } from '../src/Link';
// component={NextLinkComposed}



export default function NavBar({ route }) {

  const pages = [
    "/homepage", "/categoriespage", "/postspage", "/chatpage", "/accountpage"
  ]
  const index = pages.findIndex(page => page == route)
  const r = useRouter();
  const HandleNavBarIcons = (name, num) => {
    r.push(name)
  }

  // const Boxy = styled(Box)`
  //   position:fixed;
  //   bottom:0
  // `
  const Navigation = styled(BottomNavigation)`
    min-width: 100%;
    margin: 0
    `
  const Boxy = styled(Box)`
    width: 100vw;
    color: #4F4DB0;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 10
  `

  return (
    <Boxy>
      <Navigation showLabels value={index}>
        <Tab icon={<HomeIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/homepage", 1)} />
        <Tab icon={<SearchIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/categoriespage", 2)} />
        <Tab icon={<AddIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/postspage", 3)} />
        <Tab icon={<ChatBubbleOutlineIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/chatpage", 4)} />
        <Tab icon={<PersonIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/accountpage", 5)} />
      </Navigation>
    </Boxy>
  )
}


//   const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display:flex
//   `
//   const NavBarIcon = styled.img`
//     width:50px;
//     height: 50px;
//     border: solid
//   `

//   return (<Container>
//     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/homepage") }}></NavBarIcon>
//     <NavBarIcon src='/homefill.png' onClick={() => { HandleNavBarIcons("/categoriespage") }}></NavBarIcon>
//     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/postspage") }}></NavBarIcon>
//     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/chatpage") }}></NavBarIcon>
//     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/accountpage") }}></NavBarIcon>
//   </Container>
//   )
// }


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









// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import styled from 'styled-components';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import { purple } from '@mui/material/colors';

// // import Button from '@mui/material/Button';
// // import Link from 'next/link'
// // import { NextLinkComposed } from '../src/Link';
// // component={NextLinkComposed}
// const Boxy = styled(Box)`
//   position: fixed;
//   bottom:-6px
// `

// const Navigation = styled(BottomNavigation)`
//   display:flex;
//   justify-content:space-around;
//   background-color: #AFAED9;
//   padding-top:10px
// `
// const Indicator = styled.div`
//   position:fixed;
//   bottom:-14px;
//   left:6.5%;
//   height:27px;
//   width: 25px;
//   background: #4F4DB0;
//   border-radius: 50%
// `

// export default function NavBar() {
//   // const navBar = document.querySelector("Boxy")
//   // const allIcon = document.querySelectorAll(".active")

//   return (
//   <Boxy sx={{ width: "100vw" }}>
//       <Navigation
//         // showLabels
//         // value={value}
//       >

//         <div class="active">
//             <box-icon name='home-alt-2' class="icon" color="#4F4DB0"></box-icon>
//             <box-icon name='home-alt-2' type='solid' class="activeIcon" color="#4F4DB0"></box-icon>
//         </div>
//         <div>
//             <box-icon name='search-alt-2' class="icon" color="#4F4DB0"></box-icon>
//             <box-icon name='search-alt-2' type='solid' class="activeIcon" color="#4F4DB0"></box-icon>
//         </div>
//         <div>
//             <box-icon name='plus-circle' class="icon" color="#4F4DB0"></box-icon>
//             <box-icon name='plus-circle' type='solid' class="activeIcon" color="#4F4DB0"></box-icon>
//         </div>
//         <div>
//             <box-icon name='message-dots' class="icon" color="#4F4DB0"></box-icon>
//             <box-icon name='message-dots' type='solid' class="activeIcon" color="#4F4DB0"></box-icon>
//         </div>
//         <div>
//             <box-icon name='user' class="icon" color="#4F4DB0"></box-icon>
//             <box-icon name='user' type='solid' class="activeIcon" color="#4F4DB0"></box-icon>
//         </div>
//         <Indicator></Indicator>

       
//     <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>


//       {/* <Indicator></Indicator> */}
//       </Navigation>
      
//     </Boxy>
    

//   )
// }


// // import {useRouter} from 'next/router';
// // import {useState} from 'react';
// // import styled from 'styled-components';

// // export default function NavBar(navBarNum=1) {

// //   const r = useRouter();
// //   const [navBarIcon, setNavBarIcon] = useState(1);
// //   const HandleNavBarIcons = (navBarIcon) => {
// //     if (navBarIcon === 1){
// //       //homepage is active
// //       r.push("/homepage");
// //       setNavBarIcon(1)
// //     }
// //     if (navBarIcon === 2){
// //       //categoriespage is active
// //       r.push("/categoriespage");
// //       setNavBarIcon(2)
// //     }
// //     if (navBarIcon === 3){
// //       //postspage is active
// //       r.push("/postspage")
// //     }
// //     if (navBarIcon === 4){
// //       //chatpage is active
// //       r.push("/chatpage")
// //     }
// //     if (navBarIcon === 5){
// //       //accountpage is active
// //       r.push("/accountpage")
// //     }
// //   }

// //   const Container = styled.div`
// //     width: 100vw;
// //     height: 100vh;
// //     display:flex
// //   `
// //   const NavBarIcon = styled.img`
// //     width:50px;
// //     height: 50px;
// //     border: solid
// //   `

// //   return (<Container>
// //     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/homepage") }}></NavBarIcon>
// //     <NavBarIcon src='/homefill.png' onClick={() => { HandleNavBarIcons("/categoriespage") }}></NavBarIcon>
// //     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/postspage") }}></NavBarIcon>
// //     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/chatpage") }}></NavBarIcon>
// //     <NavBarIcon src='/homeoutline.png' onClick={() => { HandleNavBarIcons("/accountpage") }}></NavBarIcon>
// //   </Container>
// //   )

// //   const Container = styled.div`
// //     width: 100vw;
// //     height: 100vh;
// //     display:flex
// //   `
// //   const NavBarIcon = styled.div`
// //     width:20%;
// //     height: fit-content;
// //     padding: 10px;
// //     background-color: beige;
// //     font-size: 30px
// //   `

// //   return (
// //     <Container>
// //         <NavBarIcon navBarNum = {navBarNum} onClick={() =>{setNavBarIcon(1); HandleNavBarIcons(1)}}>{navBarIcon}</NavBarIcon>
// //         <NavBarIcon navBarNum = {navBarNum} onClick={()=>{setNavBarIcon(2); HandleNavBarIcons(2)}}>{navBarIcon}</NavBarIcon>
// //         <img src='rooty-next/public/homeoutline.png'></img>
// //         <NavBarIcon onClick={()=>setNavBarIcon(3)}>{navBarIcon}</NavBarIcon>
// //         <NavBarIcon onClick={()=>setNavBarIcon(4)}>{navBarIcon}</NavBarIcon>
// //         <NavBarIcon onClick={()=>setNavBarIcon(5)}>{navBarIcon}</NavBarIcon>
// //     </Container>
// //   )

// // }