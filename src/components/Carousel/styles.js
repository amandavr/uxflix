import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: 100;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 10px;
  // background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 30px;
    padding: 10px 0;
    margin-bottom: 0;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 5px;
  text-decoration: none;
  transition: opacity .3s;
  font-weight: 400;
  font-size: 13px;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
    font-size: 15px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.div`
  border-bottom: 1px solid #5d5d5d;
  margin-bottom: 30px
`;
