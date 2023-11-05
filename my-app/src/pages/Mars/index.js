import Layout from './../../components/layout/Layout.js';
import MarsImageOverview from './../../assets/images/planets/mars-planet-overview.png';
import MarsImageInternalStructure from './../../assets/images/planets/mars-planet-internal-structure.png';
import MarsImageSurfaceGeology from './../../assets/images/planets/mars-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function MarsPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.mars);
  }, []);

  const MarsData = {
    planetImageOverview: MarsImageOverview,
    planetImageInternalStructure: MarsImageInternalStructure,
    planetImageSurfaceGeology: MarsImageSurfaceGeology,
    planetName: 'Mars',
    planetInfoOverview:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    planetInfoInternalStructure:
      'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
    planetInfoSurfaceGeology:
      'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
    planetWikiLink: 'https://en.wikipedia.org/wiki/Mars',
    rotationTime: '1.03',
    revolutionTime: '1.88',
    radius: '3,389.5',
    averageTemp: '-28',
  };

  return <Layout {...MarsData} />;
}

export default MarsPage;
