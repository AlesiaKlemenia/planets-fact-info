import Layout from './../../components/layout/Layout.js';
import planetImageOverview from './../../assets/images/planets/earth-planet-overview.png';
import planetImageInternalStructure from './../../assets/images/planets/earth-planet-internal-structure.png';
import planetImageSurfaceGeology from './../../assets/images/planets/earth-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function EarthPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.earth);
  }, []);

  const EarthData = {
    planetImageOverview: planetImageOverview,
    planetImageInternalStructure: planetImageInternalStructure,
    planetImageSurfaceGeology: planetImageSurfaceGeology,
    planetName: 'Earth',
    planetInfoOverview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    planetInfoInternalStructure:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    planetInfoSurfaceGeology:
      'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
    planetWikiLink: 'https://en.wikipedia.org/wiki/Earth',
    rotationTime: '58.6',
    revolutionTime: '87.97',
    radius: '2,439.7',
    averageTemp: '430',
  };

  return <Layout {...EarthData} />;
}

export default EarthPage;
