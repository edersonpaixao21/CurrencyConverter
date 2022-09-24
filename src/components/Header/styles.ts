import styled from 'styled-components';

export const Header = styled.header``;

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  img {
    width: 200px;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 2rem;
    }
  }
`;
