import Layout from './../../components/layout/Layout.js';
import SaturnImageOverview from './../../assets/images/planets/saturn-planet-overview.png';
import SaturnImageInternalStructure from './../../assets/images/planets/saturn-planet-internal-structure.png';
import SaturnImageSurfaceGeology from './../../assets/images/planets/saturn-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function SaturnPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.saturn);
  }, []);

  const SaturnData = {
    planetImageOverview: SaturnImageOverview,
    planetImageInternalStructure: SaturnImageInternalStructure,
    planetImageSurfaceGeology: SaturnImageSurfaceGeology,
    planetName: 'Saturn',
    planetInfoOverview:
      'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
    planetInfoInternalStructure:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    planetInfoSurfaceGeology:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
    planetWikiLink: 'https://en.wikipedia.org/wiki/Saturn',
    rotationTime: '10.8',
    revolutionTime: '29.46',
    radius: '58,232',
    averageTemp: '-138',
  };

  return <Layout {...SaturnData} />;
}

export default SaturnPage;
