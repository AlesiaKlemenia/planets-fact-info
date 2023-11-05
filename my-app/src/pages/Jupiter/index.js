import Layout from './../../components/layout/Layout.js';
import JupiterImageOverview from './../../assets/images/planets/jupiter-planet-overview.png';
import JupiterImageInternalStructure from './../../assets/images/planets/jupiter-planet-internal-structure.png';
import JupiterImageSurfaceGeology from './../../assets/images/planets/jupiter-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function JupiterPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.jupiter);
  }, []);

  const JupiterData = {
    planetImageOverview: JupiterImageOverview,
    planetImageInternalStructure: JupiterImageInternalStructure,
    planetImageSurfaceGeology: JupiterImageSurfaceGeology,
    planetName: 'Jupiter',
    planetInfoOverview:
      'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
    planetInfoInternalStructure:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    planetInfoSurfaceGeology:
      'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
    planetWikiLink: 'https://en.wikipedia.org/wiki/Jupiter',
    rotationTime: '9.93',
    revolutionTime: '11.86',
    radius: '69,911',
    averageTemp: '-108',
  };

  return <Layout {...JupiterData} />;
}

export default JupiterPage;
