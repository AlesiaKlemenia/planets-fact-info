import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { observer } from 'mobx-react-lite';
import themeStore from '../../stores/ThemeStrore';
import { StyledLi } from './styles';

const Header = observer(() => {
  const { themeColor } = themeStore;
  return (
    <header>
      <div>
        <span>THE PLANETS</span>
        <svg
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="3" fill="white" />
          <rect y="7" width="24" height="3" fill="white" />
          <rect y="14" width="24" height="3" fill="white" />
        </svg>
        <nav>
          <ul>
            <StyledLi bgColor={themeColor}>
              <Link to="/mercury">MERCURY</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/venus">VENUS</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/earth">EARTH</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/mars">MARS</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/jupiter">JUPITER</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/saturn">SATURN</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/uranus">URANUS</Link>
            </StyledLi>
            <StyledLi bgColor={themeColor}>
              <Link to="/neptune">NEPTUNE</Link>
            </StyledLi>
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
