import styled from 'styled-components';

export const StyledLi = styled.li`
  &:hover {
    border-top: 4px ${(props) => props.bgColor} solid;
  }
`;
