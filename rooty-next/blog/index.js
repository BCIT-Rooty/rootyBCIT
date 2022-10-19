import styled from "styled-components"
import { FlexBox, ImgPlaceholder } from "../styles/globals"
import Text from "../components/text"
import GradientCard from "../components/gradientCard"
import CloseIcon from '@mui/icons-material/Close';
import IconText from "../components/iconText";
import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import DownloadPopUp from "../components/downloadPopUp";

const ClosingIcon = styled(CloseIcon)`
position: absolute;
right: 15px;
top: 15px
`

const ListItem = styled.li`
padding-left:40px;
padding-right:20px
`

export function Article1({
    onClick=()=>{}
}){

    return(
        // <AnimatePresence mode="wait">
        // <motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.2, delay:0}}}>
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
       <FlexBox width="100vw" dir="column">
         <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
         <GradientCard txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png" width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px'></GradientCard>
         <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  margin="0px 0px 55px 0px">
            <Text padding="10px 20px" txt='Just like a great headline hooks a reader, a great bio can hook your next client. In fact, your bio is one of the most important features of your CV Profile or any writer portfolio for that matter.'></Text>
            <Text padding="10px 20px" txt='And that means it better be good.'></Text>
            <Text padding="10px 20px" txt='This is where most writers suddenly remember they have houseplants to water or spices to alphabetize. No writer likes writing their bio (which is an interesting conundrum when you think about it). But if you’re wondering why brands aren’t picking you for assignments — these tips will help you write an irresistible bio that showcases your talent.'></Text>
            <Text padding="10px 20px" txt='4 ways freelancers can write a compelling bio' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Learn how to write an attention-grabbing bio that shows why you’re the perfect freelancer for the job every time.'></Text>
            <Text padding="10px 20px" txt='Your Portfolio bio should have'></Text>
            <ListItem> Summarize your skills and establish credibility </ListItem>
            <ListItem> Tell the reader a little bit about your background </ListItem>
            <ListItem> State your areas of expertise </ListItem>
            <ListItem> Focus on bringing clients value </ListItem>
            <Text padding="10px 20px" txt='1. Summarize your skills and establish credibility' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Let them know upfront you’re qualified to be here. Get right to it; prospective clients want to know why they should hire you, so tell them.'></Text>
            <Text padding="10px 20px" txt='As you can see, ClearVoicer Angela Tague starts her bio off strong by summarizing her skills and detailing the impressive brands she’s worked with in the past. Do something similar by starting your bio with two or three things that show why you’re a standout freelancer. From past clients to projects, this is the time to (concisely) toot your own horn.'></Text>
            <Text padding="10px 20px" txt='2. Tell the reader a little bit about your background' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Feel free to show some personality in your bio when you’re talking about your experience.'></Text>
            <Text padding="10px 20px" txt='Sharing a little bit about yourself should always serve a dual purpose: give the reader a glimpse of your personality and highlight that you’re good at your craft. Just don’t overshare — an original Smurf collection from 1981 is impressive, yes, but not necessarily vital information for your portfolio.'></Text>
            <Text padding="10px 20px" txt='3. State your areas of expertise' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='This one is pretty self-explanatory. Use your bio to showcase your areas of expertise, from topics to skills. If you’re trying to establish a niche, limit your bio to focus on that solely. If you’re more of a generalist, state your wide array of experience, so you appeal to a variety of clients.'></Text>
            <Text padding="10px 20px" txt='4. Focus on bringing clients value' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Odd as this may sound, your bio isn’t really about you; it’s about how you can help them. Close your ClearVoice bio by reminding prospective clients about the value they’ll receive when they hire you.'></Text>
         </FlexBox>
      </FlexBox>
    </FlexBox>
    // </motion.div>
    // </AnimatePresence>
    )
}

export function Article2({
    onClick=()=>{}
}){

    return(
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
       <FlexBox width="100vw" dir="column">
         <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
         <GradientCard txt="6 Habits of Successful Freelancers" bgImage="/tip2.jpg" width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px'></GradientCard>
         <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  margin="0px 0px 55px 0px">
            <Text padding="10px 20px" txt='There are a lot of freelancers out there, but all are not created equal. There are those who have a full book of work and they love the work they do. There are others who are perpetually looking for work and taking on work they don’t actually enjoy.'></Text>
            <Text padding="10px 20px" txt='This is where most writers suddenly remember they have houseplants to water or spices to alphabetize. No writer likes writing their bio (which is an interesting conundrum when you think about it). But if you’re wondering why clients aren’t picking you for assignments — these tips will help you write an irresistible bio that showcases your talent.'></Text>
            <Text padding="10px 20px" txt='1. Be Organized' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='It’s easy to feel lost when you work with multiple clients at the same time. Successful freelancers know how to organize their time, their space, and their life.'></Text>
            <Text padding="10px 20px" txt='Being organized allows you to make the most of your time. You have the files where they need to be, the time to do it, and the contacts you want in exactly the right place.'></Text>
            <Text padding="10px 20px" txt='Jumping between different jobs can be confusing, time-consuming, and cancerous to your productivity. The habit of organizing your life allows everything to happen, with no detriment to the work.'></Text>
            <Text padding="10px 20px" txt='It’s also important to organize your time to have a good life-work balance. In the end, you left your full-time job to have more freedom. You didn’t leave your 8-hour job to work 12 hours! Make sure to organize your time and know when to stop. And when it’s done, it’s done.'></Text>
            <Text padding="10px 20px" txt='2. Interview Clients' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='You’re not interviewing to get a job. You’re setting a meeting with the client to know their problem and determine how you can help them. So stop acting like an employee who just answers questions and starts acting like a real expert who interviews clients and asks questions.'></Text>
            <Text padding="10px 20px" txt='The process may look difficult when you’re a beginner. A good trick is to prepare a list of questions for the client.'></Text>
            <Text padding="10px 20px" txt='These questions will save you a lot of time and will let you have a general idea about the client so you can know in advance if there are any red flags.'></Text>
            <Text padding="10px 20px" txt='3. Be an Active Learners' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Successful freelancers recognize their weaknesses and try to improve themselves. Always set a weekly number of hours to work on yourself.'></Text>
            <Text padding="10px 20px" txt='Improve your design, marketing, and writing skills. You don’t know everything. So always seek knowledge and try to boost your career by being an active learner.'></Text>
            <Text padding="10px 20px" txt='You don’t have to go to college; you have Youtube, Udacity, Coursera, and books. Learn, learn, and learn.'></Text>
            <Text padding="10px 20px" txt='4. Under-promise and Over-deliver' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Don’t put a heavy rock on your shoulders unless you can lift it. A lot of freelancers, including me, fall into the trap of trying to open the doors of heaven for the clients in order to get that job.'></Text>
            <Text padding="10px 20px" txt='You will end up stressed and frustrating. You promised the client to build a world-class website, but he needs the website done in 2 weeks. You promised the client to write a perfect article that will definitely rank on page 1 of Google, but it didn’t because the client’s website has a low DA.'></Text>
            <Text padding="10px 20px" txt='Promise only what you can deliver and deliver more than you promise.' weight="bolder"></Text>
            <Text padding="10px 20px" txt='5. Have Great Communication Skills' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='As a remote worker, the level of interaction with your colleagues is mostly limited to your online capabilities. From email to instant messaging and video chat – your environment lacks the capacity to have face-to-face conversations with other people.'></Text>
            <Text padding="10px 20px" txt='Therefore, having good communication skills is essential to being a successful freelancer. Whether it’s receiving feedback from clients, requesting information from your colleagues, or keeping your employer updated on progress – you need to keep your workforce in-the-loop about your business activities.'></Text>
            <Text padding="10px 20px" txt='6. Leave Room for Play' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='A common misconception of being a freelancer, is that you have the freedom to take breaks whenever you like.'></Text>
            <Text padding="10px 20px" txt='This may be true for some people, but in reality, the desire to constantly work harder to deliver that project is also common. Therefore, it’s important to set aside time to unwind and relax in a space away from your work desk.'></Text>
            <Text padding="10px 20px" txt='Set aside short breaks throughout your day, along with an extended half-hour or one hour break. Pick an activity that you find relaxing and helps take your mind off work – so pretty soon you’ll be feeling refreshed and ready to tackle that big project.'></Text>
         </FlexBox>
      </FlexBox>
    </FlexBox>
    )
}

export function Article3({
    onClick=()=>{}
}){

    return(
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
       <FlexBox width="100vw" dir="column">
         <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
         <GradientCard txt="4 Steps to Successfully Completing Your First Gig" bgImage="/tip3.png" width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px'></GradientCard>
         <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  margin="0px 0px 55px 0px">
            <Text padding="10px 20px" txt='Congratulations on landing your first content gig! You pitched, persevered and persisted. You made your polite follow-up calls, sent those respectful emails and letters. And it finally yielded results. You landed that first freelance content assignment from a new client!'></Text>
            <Text padding="10px 20px" txt='Feel free to celebrate and tell all your friends and family about it. You’ve earned it. But also keep in mind that getting that contract is just the start. Your goal should be to successfully complete the work.'></Text>
            <Text padding="10px 20px" txt='1. Mind your manners' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='While this might be an obvious point — “Hey, I’m polite!” you might be thinking — the excitement of landing that first job can sometimes cause basic manners to fly out the window. Even if you’re the type who holds doors open for others on a frequent basis, that first-contract thrill can make you forget behavior basics.'></Text>
            <Text padding="10px 20px" txt='Such as thanking that new client for the opportunity to work with him or her. Do this before you start the job, and after you’ve submitted the final draft. In between these two milestones, be courteous and considerate, without being phony.'></Text>
            <Text padding="10px 20px" txt='2. Ask questions' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Many of us become tongue-tied when it comes to asking for information. Why? We’re afraid that the client might not think we’re very smart if we ask for clarification, or if we bring up another viewpoint. We’re fearful the client might find us ignorant, which could mean the client might second guess him or herself.'></Text>
            <Text padding="10px 20px" txt='Certainly, some clients might become impatient with questions. But, for the most part, asking questions before the process shows your intelligence, and positions you as someone who wants the right information before getting started on an assignment. It also helps eliminate potential misunderstandings, which could lead to time wasted.'></Text>
            <Text padding="10px 20px" txt='Ask questions, for example:'></Text>
            <ListItem> Deadlines and milestones </ListItem>
            <ListItem> What the client wants to avoid </ListItem>
            <ListItem> Ask if they have examples of the project expectation </ListItem>
            <Text padding="10px 20px" txt='3. Be patient' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt=' Your first draft will likely not be accepted, as is. Why? Because you’re new to the company, leading to an automatic built-in learning curve. It also means that the client will likely return that content, requesting anything from small tweaks to a total rewrite.'></Text>
            <Text padding="10px 20px" txt='If this happens, don’t take it personally. The client isn’t out to get you, nor does he or she hate your work. It’s business. So, your best bet is to accept the content gracefully, ask questions for additional clarification, rewrite, re-proof, and resubmit. Doing this with a positive attitude demonstrates your adaptability. The more adaptable you are, the more likely the client will use your skills again.'></Text>
            <Text padding="10px 20px" txt='4. Get Feedback' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Finally, once the project is completed and the client signs off on it, it’s perfectly OK to ask for any feedback he or she might have. This is not a fishing expedition to stroke your ego. Rather, it’s an opportunity to learn and improve your skills.'></Text>
            <Text padding="10px 20px" txt='Additionally, if you feel comfortable with the work you did for the client, don’t be afraid to ask for a reference, either for use on your website or on your LinkedIn page.'></Text>
         </FlexBox>
      </FlexBox>
    </FlexBox>
    )
}

export function Article4({
    onClick=()=>{}
}){

    return(
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
       <FlexBox width="100vw" dir="column">
         <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
         <GradientCard txt="5 Ways Freelancers can Improve Focus and Productivity" bgImage="/tip4.png" width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px'></GradientCard>
         <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  margin="0px 0px 55px 0px">
            <Text padding="10px 20px" txt='One of the best aspects of a full-time freelance lifestyle can also be one of the most challenging: the ability to set your own schedule.'></Text>
            <Text padding="10px 20px" txt='Without a boss in the office to check up that you’re doing your work, it’s up to freelancers to motivate themselves to meet their deadlines and be productive. You can use these tips to increase your focus and be a more productive freelancer.'></Text>
            <Text padding="10px 20px" txt='1. Use a calendar' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='If you’ve ever crossed an item off a to-do list, you know how rewarding that feeling can be. You can use a calendar to write out a visual view of your schedule, so you know exactly what’s on your plate and how to organize your time.'></Text>
            <Text padding="10px 20px" txt='Use the cloud. Putting your to-dos in the cloud is beneficial since you’ll always have a list of what’s on your plate, from any connected device. If you’re away from your workstation, you can pull up your tasks on your smartphone and gain more clarity into what your day and week are shaping up to be.'></Text>
            <Text padding="10px 20px" txt='Write a daily desire list. Writing things down on paper can be powerful. Jot down a daily “desire list,” which are things you want to accomplish by the end of the day. You could include items like, “Finish all assignments. Dust my home. Read a chapter of my book.” Reference your list throughout the day to stay on track.'></Text>
            <Text padding="10px 20px" txt='Block out unavailable time. Give yourself some breathing room to prep before a meeting and regroup after meetings. Block out time on a shared calendar so clients don’t schedule back-to-back-to-back meetings and overwhelm you.'></Text>
            <Text padding="10px 20px" txt='2. Maintain a realistic workloads' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='A steady workload is great (and often a must-have) for life as a freelancer. But taking on too much work can spread you thin. An overwhelming workload could paralyze you mentally and make you avoid your list altogether, which could lead to panic when deadlines loom.'></Text>
            <Text padding="10px 20px" txt='Time yourself with each project. Keep track of your project times so you get a better understanding of how long a typical project takes. For example, you might learn that it typically takes you 15 hours to work on an ebook. You might need five hours to work on the average email campaign.'></Text>
            <Text padding="10px 20px" txt='Budget your time. Understand how many working hours you have each day. You may need to account for work time like client meetings, marketing yourself and email communication. With what’s left over, that’s a realistic view of your time available for each day.'></Text>
            <Text padding="10px 20px" txt='Overestimate project duration. It’s always safer to overestimate how long a project will take rather than find out you have less time than you need. You might want to add in an extra hour or two to what you anticipate a project will require when you accept new projects.'></Text>
            <Text padding="10px 20px" txt='3. Tackle the least-appealing assignment first' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt=' You may have more energy when you start your day compared to later in the day. That’s why it might be best to work on your most difficult task first.'></Text>
            <Text padding="10px 20px" txt='Once that task is done, all other to-dos for the day seem a little easier to complete.'></Text>
            <Text padding="10px 20px" txt='If you do have less energy the longer your day proceeds, it will be less challenging to tick through your list since the easier tasks are what’s left.'></Text>
            <Text padding="10px 20px" txt='4. Take breaks' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='Taking breaks is good for productivity. Breaks help you avoid burnout. They give you a chance to reset. They can also energize you, especially when they support your health. For example, if you’re dehydrated, taking a break to drink water can replenish you. Using a break to walk around the block can release feel-good endorphins that positively impact your work.'></Text>
            <Text padding="10px 20px" txt='Research has shown breaks can improve concentration, enhance work mentality and even help professionals avoid injuries. But what’s the optimal way to work breaks into your schedule?'></Text>
            <Text padding="10px 20px" txt='5. Practice Self-care for Productivity' size="20px" weight="bold"></Text>
            <Text padding="10px 20px" txt='You must be physically, emotionally, and mentally well. That’s why you must not neglect yourself in exchange for laborious freelancing work. Be sure to take good care of yourself to be more productive.'></Text>
            <ListItem>Eat healthy and nutritious foods.</ListItem>
            <ListItem>Drink plenty of water.</ListItem>
            <ListItem>Exercise regularly.</ListItem>
            <ListItem>Get enough rest and sleep.</ListItem>
            <ListItem>Strive to have a work-life balance.</ListItem>
            <ListItem>Maintain social interaction with family, friends, and colleagues.</ListItem>
            <ListItem>Be mindful and stay positive.</ListItem>
            <Text padding="10px 20px" txt='Self-care is crucial to your overall health and well-being. By being physically healthy and mentally well, you’ll be more successful at your freelancing.'></Text>
         </FlexBox>
      </FlexBox>
    </FlexBox>
    )
}

export function Contest({
    onClick=()=>{}
}){
    const [showDownload, setShowDownload] = useState("default")

    return(
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
       <FlexBox width="100vw" dir="column">
         <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
         <GradientCard txt="Redesign our 'Big Info Poster' - $500" bgImage="/bigInfo.jpg" width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px'></GradientCard>
         <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  margin="0px 0px 55px 0px">
            <Text padding="10px 20px" txt="We are looking for a talented designer to recreate BCIT's largest program expo and information session. It's your chance to make an exciting eye-catching poster to attract new potential BCIT students"></Text>
            <Text padding="10px 20px" txt='Only one winner will receive $500 for their amazing poster'></Text>
            <ListItem>Include the BCIT logo.</ListItem>
            <ListItem>Use only and atleast one image from the zip folder of images attached to this post.</ListItem>
            <ListItem>Include the title: One Night. Endless Possibilities. BCIT Big Info</ListItem>
            <ListItem>Include the date: February 2, 2023</ListItem>
            <ListItem>Include the time: 4:30-7:30PM.</ListItem>
            <IconText onDownload={()=> setShowDownload("active")} txt="bcitBigInfo.zip" textDecor="underline" color="blue" onClick=""></IconText>
            <Text padding="10px 20px" txt="Inspiration for what we're looking forward" size="16px" weight="bold"></Text>
            <ImgPlaceholder bgImage="/contestInspo.png" width="100px" height="180px" margin="20px"></ImgPlaceholder>
         </FlexBox>
      </FlexBox>
      <AnimatePresence exitBeforeEnter>
      {showDownload === "active" && <FlexBox position="absolute" left="0" zIndex="30"><motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.2, delay:0}}} exit={{opacity:0}}><DownloadPopUp onClose={()=>setShowDownload("default")} txt="Successfully Downloaded 😁"></DownloadPopUp></motion.div></FlexBox>}
      </AnimatePresence>
    </FlexBox>
    )
}