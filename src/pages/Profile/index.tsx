import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="diegods-ferreira"
                  reponame="be-the-hero"
                  description="Um repositório qualquer"
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={1}
                  forks={0}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;