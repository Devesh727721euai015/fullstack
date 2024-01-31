// HomePage.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { BounceLoader } from 'react-spinners';
import CustomNavBar from './CustomNavBar';
import { Panel } from 'rsuite';
import { animated, useSpring } from 'react-spring';
import { Carousel } from 'rsuite';
import { Divider, Placeholder } from 'rsuite';
import Footer from './Footer';


// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://pngimg.com/d/yoga_PNG45.png');
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-left: 350px;
  margin-bottom: 100px;
  font-family: 'YourFirstFont', cursive;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const AdditionalContent = styled.div`
  margin-left: 600px;
  font-family: 'YourSecondFont', sans-serif;
  opacity: 0;
  animation: ${slideInLeft} 1s forwards;
`;

const AnimatedText = styled(animated.h2)`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const AnimatedParagraph = styled(animated.p)`
  font-size: 1.2em;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const EmojiAnimation = styled(animated.span)`
  font-size: 2em;
  margin-right: 10px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`;

const HomePage = () => {
  // Text animations using React Spring
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const textAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const emojiAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div>
      <header>
        <CustomNavBar />
      </header>
      <Container>
        <Title style={titleAnimation}>
          Welcome to the Yoga Admission Portal
          <EmojiAnimation style={emojiAnimation}>🧘‍♂️</EmojiAnimation>
        </Title>
    
        {/* Additional Content */}
        <AdditionalContent >
          <AnimatedText style={textAnimation}>More About Yoga</AnimatedText>
          <AnimatedParagraph style={textAnimation}>
            Explore the benefits of yoga and enhance your well-being.
          </AnimatedParagraph>
          

          {/* Additional Elements */}
          <AnimatedParagraph style={textAnimation}>
            Yoga is a mind and body practice that can build strength and flexibility.
          </AnimatedParagraph>
          <AnimatedParagraph style={textAnimation}>
            It may also help manage pain and reduce stress. Various styles of yoga combine physical postures, breathing techniques, and meditation.
          </AnimatedParagraph>
          <AnimatedParagraph style={textAnimation}>
            Yoga is an ancient practice that has changed over time. Modern yoga focuses on poses designed to stimulate inner peace and physical energy. Yoga can help support a balanced, active lifestyle.
          </AnimatedParagraph>
          {/* Add more elements as needed */}
        </AdditionalContent>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: "#dedede" }}>
  <div>
    <h1 style={{
      marginLeft: '3em',
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInLeft 1s ease-in-out' // Add a fadeInLeft animation
    }}>Exhale!</h1>
  </div>
  <div>
    <h1 style={{
      marginLeft: '8em',
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInRight 1s ease-in-out' // Add a fadeInRight animation
    }}>Namaste!</h1>
  </div>
  <div>
    <h1 style={{
      marginLeft: '8em',
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInRight 1s ease-in-out' // Add a fadeInRight animation
    }}>Breathe!</h1>
  </div>
  <div>
    <h1 style={{
      marginLeft: '8em',
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInRight 1s ease-in-out' // Add a fadeInRight animation
    }}>Laugh!</h1>
  </div>
</div>

                <br></br>
                <br></br>
                <br></br>
      <div style={{justifyContent:'space-around',display:'flex'}}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/KXJeVTdZWOHKiCvXXdT7RcwHp6c=/fit-in/1584x1584/filters:format_auto():upscale()/2016/01/11/747/n/1922729/89b2ac1c_Mountain-Pose.jpg" height="240" />
  
    <Panel header="Mountain">
      <p>
        <small>
        Stand at the front of your mat, feet together, legs active, and arms by your sides.
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/qeqs_zN8GqB6un8CdNbPIWjzDFQ=/fit-in/1584x1584/filters:format_auto():upscale()/2015/08/18/901/n/1922729/25f94594_Forward-Bend-Blue.jpg" height="240" />
    <Panel header="Standing Forward Bend">
      <p>
        <small>
        Begin in Mountain Pose at the front of your mat. Inhale and reach your arms straight above you.
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/aIc7D7S9Eyz2HXXFL91vT9ibT5Q=/fit-in/1584x1584/filters:format_auto():upscale()/2015/08/18/901/n/1922729/ecd30c1a_Pink-Chaturanga.jpg" height="240" />
    <Panel header="Four-Limbed Staff">
      <p>
        <small>
        Inhale to raise your arms up and exhale to fold forward into Standing Forward Bend.
        </small>
      </p>
    </Panel>
  </Panel>
  
  </div>
  <div style={{justifyContent:'space-around',display:'flex'}}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/yiBhVI8WI8TtKYvdAVLoS0KjNCY=/fit-in/1584x1584/filters:format_auto():upscale()/2015/08/18/901/n/1922729/18ff0474_Pink-Up-Dog.jpg" height="240" />
  
    <Panel header="Four-Limbed Staff">
      <p>
        <small>
        Inhale to raise your arms up and exhale to fold forward into Standing Forward Bend. Inhale, straighten your arms and back, and look up
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/qGCD5PqEBKWjjZhmA4y0nuDWPFY=/fit-in/1584x1584/filters:format_auto():upscale()/2015/08/18/901/n/1922729/5a9d27c9_Pink-Down-Dog.jpg" height="240" />
    <Panel header="Downward Facing Dog Pose">
      <p>
        <small>
        Begin on your hands and knees. Your wrists should be underneath your shoulders, and your knees should be underneath your hips.
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
    <img src="https://media1.popsugar-assets.com/files/thumbor/8YcNP83wZ0_twTQE-jaamkLiqDU=/fit-in/1584x1584/filters:format_auto():upscale()/2015/08/18/901/n/1922729/500e1a60_3-legged-dog-green-pants-FLIP.jpg" height="240" />
    <Panel header="Three-Legged Downward Facing Dog Pose">
      <p>
        <small>
        Begin in Downward Facing Dog. Step both feet together so your big toes are touching.
        </small>
      </p>
    </Panel>
  </Panel>
  
  </div>

  <br></br>

  <>
  <div style={{textAlign:'center'}}>
    <Placeholder.Paragraph type="media" />
    <Divider>Affordable yoga class memberships provide daily opportunities to breathe, sweat, grow and increase your radiance.</Divider>
    <Placeholder.Paragraph type="media" />
  </div>
  </>


  <footer>
    <Footer/>
  </footer>
  </div>
  
 
  );
};

export default HomePage;
