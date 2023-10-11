import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QR from './components/qrcode/QR';
import Content from './components/home/Content';
import Bride from './components/bride/Bride';
import Groom from './components/groom/Groom';
import Savedate from './components/bride/savedate/Savedate';
import Carou from './components/bride/carousel/Carou';
import PreShoot from './components/bride/vedio/PreShoot';
import Poster from './components/bride/poster/Poster';
import Functions from './components/bride/functions/Functions';
import Pooja from './components/bride/functions/tabs/Pooja';
import Haldi from './components/bride/functions/tabs/Haldi';
import Mehendi from './components/bride/functions/tabs/Mehendi';
import Music from './components/bride/functions/tabs/Music';
import Reception from './components/bride/functions/tabs/Reception';
import Wedding from './components/bride/functions/tabs/Wedding';
import Invite from './components/bride/invitcard/Invite';



function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<QR />} />
          <Route path="/content" element={<Content />} />
          <Route path="/bride" element={<Bride />} />
              <Route path="/preshoot" element={<PreShoot />} />
              <Route path="/savedate" element={<Savedate />} />
              <Route path="/carou" element={<Carou />} />
              <Route path="/poster" element={<Poster />} />
              <Route path="/poster" element={<Functions />} />
                 <Route path="/pooja" element={<Pooja />} />
                 <Route path="/haldi" element={<Haldi />} />
                 <Route path="/mehendi" element={<Mehendi />} />
                 <Route path="/music" element={<Music />} />
                 <Route path="/reception" element={<Reception />} />
                 <Route path="/wedding" element={<Wedding />} />
              <Route path="/invite" element={<Invite />} />
          <Route path="/groom" element={<Groom />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
