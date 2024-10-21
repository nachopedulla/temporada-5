import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const chapters = [
    { name: 'El cuarteto de Homero', url: '1HUKKq9k8HNKYdDspVhlv5nBrfjXo2Cga' },
    { name: 'Cabo de miedosos', url: '1x_7JMyfPqh5AJ1lf8FdQnEYmo6a-P89X' },
    { name: 'Homero va a la universidad', url: '1usPLLmwy4IPU2oCfvuKnxdk2jhCe3V3b' },
    { name: 'El oso de Burns', url: '1qe4SIvPLGRIRh5ohtikALAvDNIMWRJ1d' },
    { name: 'Especial de noche de brujas IV', url: '1TmiTBbp3ltFg2czOB8UdMa7jYalNjik2' },
    { name: 'Marge, la rebelde', url: '1jD2YRFdUzUz85igeGnF53Nl9HHs0tWku' },
    { name: 'Filosofía bartiana', url: '1gSvR3prZ_y-AMVtaFXN7yPlT3_alMHEt' },
    { name: 'Exploradores a fuerza', url: '1F38iLY19LL6xSp6c2Kb0LWesBtX9quX5' },
    { name: 'La última tentación de Homero', url: '1WMiE6TPhR-GKkFyUL03YoixzL8JOHo2q' },
    { name: 'Springfield próspero o el problema del juego', url: '1db31G4TT1vgnqeBk44sFQBzlNnUAkiTX' },
    { name: 'Homero detective', url: '1Z3wGrw0zjWsGppwTIkj2Fb7nz6ArCukY' },
    { name: 'Bart se hace famoso', url: '15qEXLFugAwb28Nb1fLYslOrH3PyQdT9T' },
    { name: 'Homero y Apu', url: '1yF1yS5r5vrs6366e1Ce6n-FJIztd8qHb' },
    { name: 'Lisa contra La Baby Malibú', url: '1RfbXgiWbXcRN-NDzDo-Ig2EZV1cXmJfD' },
    { name: 'Homero en el espacio profundo', url: '1E4cB2KJsuTTM9vZkpp_Y25dbhaTll0RT' },
    { name: 'Homero ama a Flanders', url: '1B4gwnYrxmpb9QFwQRjrlx8NRQJ0RvwVM' },
    { name: 'Bart gana un elefante', url: '1EcLCHM3_KrpRbCqD6BjCkol9ErQmNJyi' },
    { name: 'El heredero de Burns', url: '1EBb70mmN_KfYkvXsNfjWKVDpY4ttcjEM' },
    { name: 'La canción de Skinner', url: '1CeWiBJobIh85Boub6Y8qNiQ1GzvOM8AT' },
    { name: 'El niño que sabía demasiado', url: '1TAZHkppIc2aHuvCEWAAelfhxGxC5LKIs' },
    { name: 'El amante de Lady Bouvier', url: '1xJoi2_1Pgee5whVd7EXb3EsnP0qZKNpc' },
    { name: 'Secretos de un buen matrimonio', url: '' },
    
  ]

  return (
    <div className="App">
      {
        chapters.map(chapter => (
          <Accordion>
            <AccordionSummary>{chapter.name}</AccordionSummary>
            <AccordionDetails>
              <iframe 
                src={`https://drive.google.com/file/d/${chapter.url}/preview`}                   
                width={width > 700 ? "640" : "90%"}
                height={width > 700 ? "480" : "300"}
                allowfullscreen="true" 
                allow="fullscreen" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true"
              />  
            </AccordionDetails>
          </Accordion>
        ))
      }
      
    </div>
  );
}

export default App;
