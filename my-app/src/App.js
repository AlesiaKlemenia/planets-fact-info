import { Route, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import EarthPage from './pages/Earth';
import JupiterPage from './pages/Jupiter';
import MarsPage from './pages/Mars';
import MercuryPage from './pages/Mercury';
import NeptunePage from './pages/Neptune';
import SaturnPage from './pages/Saturn';
import UranusPage from './pages/Uranus';
import VenusPage from './pages/Venus';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<EarthPage />} />
        <Route path="earth" element={<EarthPage />} />
        <Route path="jupiter" element={<JupiterPage />} />
        <Route path="mars" element={<MarsPage />} />
        <Route path="mercury" element={<MercuryPage />} />
        <Route path="neptune" element={<NeptunePage />} />
        <Route path="saturn" element={<SaturnPage />} />
        <Route path="uranus" element={<UranusPage />} />
        <Route path="venus" element={<VenusPage />} />
        <Route path="*" element={<EarthPage />} />
      </Routes>
    </div>
  );
};

export default App;
