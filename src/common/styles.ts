import styled from 'styled-components';
import Color from '../enums/Color';

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const StyledList = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 15rem;
  background-color: ${Color.gold};
  padding: 1rem;
`;

export const StyledListItem = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 0.5rem 0;
  width: 100%;
  color: ${Color.text};
`;

export const StyledBackButton = styled.button`
  padding: 1rem;
  width: 9rem;
  font-size: 1rem;

  background: ${Color.orange};
  border: none;
  border-radius: 0.25rem;
  color: ${Color.white};
  cursor: pointer;
  font-weight: 600;
  text-align: center;
`;


export const StyledPage = styled.div`
  diplay: flex; 
`;