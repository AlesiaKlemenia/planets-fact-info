import styled, { css } from 'styled-components';

export const StyledAsideButton = styled.button`
  ${({ isActive, borderColor }) => css`
    border: 1px solid ${isActive ? borderColor : '#393950'};
  `}
  background-color: ${(props) =>
    props.isActive ? props.bgColor : css`rgba(0,0,0,0)`};
`;
