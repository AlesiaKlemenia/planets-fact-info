import Layout from './../../components/layout/Layout.js';
import MercuryImageOverview from './../../assets/images/planets/mercury-planet-overview.png';
import MercuryImageInternalStructure from './../../assets/images/planets/mercury-planet-internal-structure.png';
import MercuryImageSurfaceGeology from './../../assets/images/planets/mercury-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function MercuryPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.mercury);
  }, []);

  const MercuryData = {
    planetImageOverview: MercuryImageOverview,
    planetImageInternalStructure: MercuryImageInternalStructure,
    planetImageSurfaceGeology: MercuryImageSurfaceGeology,
    planetName: 'Mercury',
    planetInfoOverview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    planetInfoInternalStructure:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    planetInfoSurfaceGeology:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    planetWikiLink: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    rotationTime: '58.6',
    revolutionTime: '87.97',
    radius: '2,439.7',
    averageTemp: '430',
  };

  return <Layout {...MercuryData} />;
}

export default MercuryPage;
