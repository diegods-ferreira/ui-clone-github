import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="diegods-ferreira"
            name="Diego Ferreira"
            avatarUrl="https://avatars1.githubusercontent.com/u/62507430?v=4"
            followers={887}
            following={7}
            company="Rocketseat"
            location="São Paulo, Brazil"
            email="diegosf1705@gmail.com"
            blog="https://www.linkedin.com/in/diego-de-souza-ferreira/"
          />
        </LeftSide>

        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;