import Layout from './../../components/layout/Layout.js';
import UranusImageOverview from './../../assets/images/planets/uranus-planet-overview.png';
import UranusImageInternalStructure from './../../assets/images/planets/uranus-planet-internal-structure.png';
import UranusImageSurfaceGeology from './../../assets/images/planets/uranus-planet-surface-geolory.png';
import { useEffect } from 'react';
import themeStore from '../../stores/ThemeStrore.js';
import { PLANET_COLORS } from '../../consts/planets.js';

function UranusPage() {
  useEffect(() => {
    themeStore.setThemeColor(PLANET_COLORS.uranus);
  }, []);

  const UranusData = {
    planetImageOverview: UranusImageOverview,
    planetImageInternalStructure: UranusImageInternalStructure,
    planetImageSurfaceGeology: UranusImageSurfaceGeology,
    planetName: 'Uranus',
    planetInfoOverview:
      'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    planetInfoInternalStructure:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    planetInfoSurfaceGeology:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    planetWikiLink: 'https://en.wikipedia.org/wiki/Uranus',
    rotationTime: '17.2',
    revolutionTime: '84',
    radius: '25,362',
    averageTemp: '-195',
  };

  return <Layout {...UranusData} />;
}

export default UranusPage;
