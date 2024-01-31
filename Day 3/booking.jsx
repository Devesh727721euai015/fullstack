import React from 'react';
import { Panel } from 'rsuite';
import styled, { keyframes } from 'styled-components';
import CustomNavBar from './CustomNavBar';
import '../pages/booking.css'
import { WidthFull } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components for styling
const AnimatedPanel = styled(Panel)`
  margin: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
`;

const AnimatedPanel2 = styled(Panel)`
  margin: 20px;
  opacity: 0;
  animation: ${slideInRight} 1s forwards;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingStar = styled.span`
  color: #FFD700; /* Gold color for stars */
  font-size: 20px;
  margin-right: 5px;
`;

const BookNowButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Bookings = () => (
  <div>
    <header>
        <CustomNavBar />
      </header>
      <div className='animatedpanel' >

    {/* <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://img.freepik.com/free-photo/yoga-group-classes-inside-gym_1303-14788.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais" height="240" />
      <Panel header="Shiva Yoga Academy">
        <p>
          <small>
            28 Day 300 Hour Ashtanga, Hatha, and Flow Yoga Teacher Training in Varkala, Kerala
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <BookNowButton>Book Now</BookNowButton>
      </Panel>
    </AnimatedPanel> */}
    <div style={{display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
    <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://static.wixstatic.com/media/447544_0fe7ba24b6614405904e81c3473fd3ce~mv2_d_4515_3010_s_4_2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/447544_0fe7ba24b6614405904e81c3473fd3ce~mv2_d_4515_3010_s_4_2.jpg" height="240" />
      <Panel header="Joy & Shine ">
        <p>
          <small>
          From Magadheera Yoga Training -
          certified by YCB, Gov of India
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <Link to="/Book1"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>

    <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://img.freepik.com/premium-photo/sitting-lotus-pose-group-women-practicing-fitness-gym_146671-73864.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=sph" height="240" />
      <Panel header="Mantra Yoga">
        <p>
          <small>
          From Swathanthra School Of Yoga & Cultural Academy, Chennai , India
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <Link to="/Bookingregistration"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>

    <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://img.freepik.com/free-photo/group-young-yogi-people-sitting-sukhasana-exercise_1163-4945.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=sph" height="240"/>
      <Panel header="Crave Studio">
        <p>
          <small>
            27 Day 300-Hour Hatha Yoga Teacher Training in Mysore,Karnataka,India
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <Link to="/Bookingregistration"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>
    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
    <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://img.freepik.com/free-photo/fit-adult-man-standing-exercise-ball_23-2148282973.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=sph" height="240" />
      <Panel header="Astral Space">
        <p>
          <small>
          Ashtanga yoga, Karma yoga, Family yoga, Bhakti yoga, Yoga therapy
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <Link to="/Bookingregistration"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>
    <AnimatedPanel shaded bordered bodyFill className='anipan'>
      <img src="https://img.freepik.com/free-photo/fitness-man_23-2148137696.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=sph" height="240" />
      <Panel header="One Life Yoga Studio">
        <p>
          <small>
          Ashtanga yoga, Karma yoga, Family yoga, Bhakti yoga, Yoga therapy
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
          <RatingStar>&#9734;</RatingStar>
        </RatingContainer>
        <Link to="/Bookingregistration"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>
    <AnimatedPanel shaded bordered bodyFill className='anipan'> 
      <img src="https://img.freepik.com/free-photo/group-young-people-smiling-happy-training-yoga-sport-center_839833-7403.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=sph" height="240" />
      <Panel header="Octave Yoga">
        <p>
          <small>
          Ashtanga yoga, Kundalini yoga, Pregnancy yoga,
           Power yoga, Vinyasa yoga
          </small>
        </p>
        <RatingContainer>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
          <RatingStar>&#9733;</RatingStar>
        </RatingContainer>
        <Link to="/Bookingregistration"><BookNowButton className='anipan-but'>Book Now</BookNowButton></Link>
      </Panel>
    </AnimatedPanel>
    </div>
  </div>

      </div>
  </div>
);

export default Bookings;
