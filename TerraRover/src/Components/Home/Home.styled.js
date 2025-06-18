import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color:white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subheading = styled.h2`
  font-size: 1.8rem;
  color: #eaeded;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;