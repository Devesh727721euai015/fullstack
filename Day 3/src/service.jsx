import React from 'react';
import CustomNavBar from './CustomNavBar';
import { Panel } from 'rsuite';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  margin: 20px;
`;

const ServicePanel = styled(Panel)`
  margin: 20px;
`;

const Service = () => (
  <div>
    <header>
      <CustomNavBar />
    </header>
    <ServiceContainer>
      <h1>Our Services</h1>
      <ServicePanel shaded bordered>
        <h3>Hatha Yoga Classes</h3>
        <p>
          Join our Hatha Yoga classes and experience the balance of mind, body, and spirit. Our
          experienced instructors guide you through traditional Hatha poses and breathing exercises.
        </p>
      </ServicePanel>
      <ServicePanel shaded bordered>
        <h3>Ashtanga Yoga Workshops</h3>
        <p>
          Dive into the dynamic practice of Ashtanga Yoga with our specialized workshops. Learn
          sequences and techniques to enhance strength, flexibility, and focus.
        </p>
      </ServicePanel>
      <ServicePanel shaded bordered>
        <h3>Meditation Retreats</h3>
        <p>
          Discover the transformative power of meditation in our peaceful retreats. Immerse yourself
          in mindfulness practices to cultivate inner peace and clarity.
        </p>
      </ServicePanel>
      <ServicePanel shaded bordered>
        <h3>Yoga Teacher Training</h3>
        <p>
          Become a certified yoga instructor through our comprehensive teacher training programs.
          Learn the art of teaching, anatomy, philosophy, and more from seasoned yoga educators.
        </p>
      </ServicePanel>
      {/* Add more service panels as needed */}
    </ServiceContainer>
  </div>
);

export default Service;
