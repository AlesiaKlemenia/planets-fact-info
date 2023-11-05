import React, { useCallback, useState } from 'react';
import './style.scss';
import { observer } from 'mobx-react-lite';
import themeStore from '../../stores/ThemeStrore';
import { StyledAsideButton } from './styles';

const Layout = observer((props) => {
  const { themeColor } = themeStore;
  const [stateButton1, changeStateButton1] = useState(true);
  const [stateButton2, changeStateButton2] = useState(false);
  const [stateButton3, changeStateButton3] = useState(false);

  const [planetImage, setImage] = useState(props.planetImageOverview);
  const [planetInfo, setInfo] = useState(props.planetInfoOverview);

  const handleButton1Click = useCallback(() => {
    changeStateButton1(true);
    changeStateButton2(false);
    changeStateButton3(false);

    setImage(props.planetImageOverview);
    setInfo(props.planetInfoOverview);
  });

  const handleButton2Click = useCallback(() => {
    changeStateButton1(false);
    changeStateButton2(true);
    changeStateButton3(false);

    setImage(props.planetImageInternalStructure);
    setInfo(props.planetInfoInternalStructure);
  });

  const handleButton3Click = useCallback(() => {
    changeStateButton1(false);
    changeStateButton2(false);
    changeStateButton3(true);

    setImage(props.planetImageSurfaceGeology);
    setInfo(props.planetInfoSurfaceGeology);
  });

  return (
    <main>
      <div className="wrapper">
        <section className="planet-about">
          <div className="planet-image">
            <img src={planetImage} alt={`${props.planetName} planet`} />
          </div>
          <div className="info-container">
            <div className="planet-info-container">
              <h1 className="planet-name">{props.planetName}</h1>
              <p className="planet-info">{planetInfo}</p>
              <span className="planet-source">
                {'Source: '}
                <a href={props.planetWikiLink} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <aside>
              <StyledAsideButton
                bgColor={themeColor}
                borderColor={themeColor}
                isActive={stateButton1}
                onClick={handleButton1Click}
                className={`aside-button`}
              >
                <span className="aside-button-number">01</span>
                <span className="aside-button-text">OVERVIEW</span>
              </StyledAsideButton>
              <StyledAsideButton
                bgColor={themeColor}
                borderColor={themeColor}
                isActive={stateButton2}
                onClick={handleButton2Click}
                className={`aside-button`}
              >
                <span className="aside-button-number">02</span>
                <span className="aside-button-text">INTERNAL STRUCTURE</span>
              </StyledAsideButton>
              <StyledAsideButton
                bgColor={themeColor}
                borderColor={themeColor}
                isActive={stateButton3}
                onClick={handleButton3Click}
                className={`aside-button`}
              >
                <span className="aside-button-number">03</span>
                <span className="aside-button-text">SURFACE GEOLOGY</span>
              </StyledAsideButton>
            </aside>
          </div>
        </section>

        <section className="planet-statistics">
          <div>
            <span className="statistics-title">ROTATION TIME</span>
            <span className="statistics-value">{props.rotationTime} DAYS</span>
          </div>
          <div>
            <span className="statistics-title">REVOLUTION TIME</span>
            <span className="statistics-value">
              {props.revolutionTime} DAYS
            </span>
          </div>
          <div>
            <span className="statistics-title">RADIUS</span>
            <span className="statistics-value">{props.radius} KM</span>
          </div>
          <div>
            <span className="statistics-title">AVERAGE TEMP.</span>
            <span className="statistics-value">{props.averageTemp}°C</span>
          </div>
        </section>
      </div>
    </main>
  );
});

export default Layout;
