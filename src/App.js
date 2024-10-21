import './App.css';
import { useState } from 'react';
import T05E01 from './assets/videos/05x01.mp4';
import T05E02 from './assets/videos/05x02.mp4';
import T05E03 from './assets/videos/05x03.mp4';
import T05E04 from './assets/videos/05x04.mp4';
import T05E05 from './assets/videos/05x05.mp4';
import T05E06 from './assets/videos/05x06.mp4';
import T05E07 from './assets/videos/05x07.mp4';
import T05E08 from './assets/videos/05x08.mp4';
import T05E09 from './assets/videos/05x09.mp4';
import T05E10 from './assets/videos/05x10.mp4';
import T05E11 from './assets/videos/05x11.mp4';
import T05E12 from './assets/videos/05x12.mp4';
import T05E13 from './assets/videos/05x13.mp4';
import T05E14 from './assets/videos/05x14.mp4';
import T05E15 from './assets/videos/05x15.mp4';
import T05E16 from './assets/videos/05x16.mp4';
import T05E17 from './assets/videos/05x17.mp4';
import T05E18 from './assets/videos/05x18.mp4';
import T05E19 from './assets/videos/05x19.mp4';
import T05E20 from './assets/videos/05x20.mp4';
import T05E21 from './assets/videos/05x21.mp4';
import T05E22 from './assets/videos/05x22.mp4';
import { MenuItem, Select } from '@mui/material';
import ReactPlayer from 'react-player';

function App() {

  const [showMenu, setShowMenu] = useState(true);
  const [selected, setSelected] = useState(undefined);

  const chapters = [
    { video: T05E01, name: '01 - El cuarteto de Homero'},
    { video: T05E02, name: '02 - Cabo de miedosos' },
    { video: T05E03, name: '03 - Homero va a la universidad'},
    { video: T05E04, name: '04 - El oso de Burns'},
    { video: T05E05, name: '05 - Especial de noche de brujas IV'},
    { video: T05E06, name: '06 - Marge, la rebelde'},
    { video: T05E07, name: '07 - Filosofía bartiana'},
    { video: T05E08, name: '08 - Exploradores a fuerza'},
    { video: T05E09, name: '09 - La última tentación de Homero'},
    { video: T05E10, name: '10 - Springfield próspero o el problema del juego'},
    { video: T05E11, name: '11 - Homero detective'},
    { video: T05E12, name: '12 - Bart se hace famoso'},
    { video: T05E13, name: '13 - Homero y Apu'},
    { video: T05E14, name: '14 - Lisa contra La Baby Malibú'},
    { video: T05E15, name: '15 - Homero en el espacio profundo'},
    { video: T05E16, name: '16 - Homero ama a Flanders'},
    { video: T05E17, name: '17 - Bart gana un elefante'},
    { video: T05E18, name: '18 - El heredero de Burns'},
    { video: T05E19, name: '19 - La canción de Skinner'},
    { video: T05E20, name: '20 - El niño que sabía demasiado'},
    { video: T05E21, name: '21 - El amante de Lady Bouvier'},
    { video: T05E22, name: '22 - Secretos de un buen matrimonio'},
    
  ]

  console.log(selected);

  return (
    <div className="App">
      <Select
        id='chapter-select'
        onChange={(event) => setSelected(event.target.value)}
        style={{ margin: '25px 0', width: '90%' }}
        value={selected}
      >
      {
        chapters.map(chapter => (
          <MenuItem 
            key={chapter.name}
            value={chapter.name}
          >
            {chapter.name}
          </MenuItem>
        ))
      }
      </Select>
      {
        selected && (
          <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', width: '95%' }}>
            <ReactPlayer
              url={chapters.find(chapter => chapter.name === selected).video}
              controls='true'
            />
          </div>
        )
      }
    </div>
  );
}

export default App;

