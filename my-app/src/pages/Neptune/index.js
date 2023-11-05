import Layout from './../../components/layout/Layout.js';
import NeptuneImageOverview from './../../assets/images/planets/neptune-planet-overview.png';
import NeptuneImageInternalStructure from './../../assets/images/planets/neptune-planet-internal-structure.png';
import NeptuneImageSurfaceGeology from './../../assets/images/planets/neptune-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function NeptunePage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.neptune);
  }, []);

  const NeptuneData = {
    planetImageOverview: NeptuneImageOverview,
    planetImageInternalStructure: NeptuneImageInternalStructure,
    planetImageSurfaceGeology: NeptuneImageSurfaceGeology,
    planetName: 'Neptune',
    planetInfoOverview:
      'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
    planetInfoInternalStructure:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    planetInfoSurfaceGeology:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    planetWikiLink: 'https://en.wikipedia.org/wiki/Neptune',
    rotationTime: '16.08',
    revolutionTime: '164.79',
    radius: '24,622',
    averageTemp: '-201',
  };

  return <Layout {...NeptuneData} />;
}

export default NeptunePage;
