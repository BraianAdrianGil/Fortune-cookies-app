import { useState } from "react";
import "./App.css";
import data from "./assets/json/phrases.json";
import images from "./assets/json/images.json";
import { getRandomNumber } from "./utils/getRandomNumber";
import Phrase from "./components/Phrase/Phrase";
import Author from "./components/Author/Author";
import Button from "./components/Button/Button";

/*
  MANEJO DE IMÁGENES EN VITE
  
  1. Lo recomendado siempre es usar un url.

  2. Guardar la imagen en alguna carpeta de src.
    - Al guardarse en src: Las imágenes deben importarse explícitamente y usarse la variable que se entrega. De lo contrario Vite, asume que no las necesita y no las incluye en el compilado final

  3. Guardar la imagen en la carpeta public.
    - Estas no se deben importar, y debe hacerse referencia a ellas asumiendo la raíz "/" como la carpeta public

*/

function App() {
  const getRandomData = () => data[getRandomNumber(data.length - 1)];
  const getRandomImage = () => images[getRandomNumber(images.length - 1)];

  const [currentData, setCurrentData] = useState(getRandomData);
  const [currentImage, setCurrentImage] = useState(getRandomImage);

  const ChangeData = () => {
    let newRandomData = getRandomData();
    while (newRandomData.phrase === currentData.phrase) {
      newRandomData = getRandomData();
    }
    setCurrentData(newRandomData);
  };

  const ChangeImage = () => {
    let newRandomImage = getRandomImage();
    while (newRandomImage === currentImage) {
      newRandomImage = getRandomImage();
    }
    setCurrentImage(newRandomImage);
  };

  const handlerClick = () => {
    ChangeData();
    ChangeImage();
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <h1 className="title">GALLETAS DE LA FORTUNA</h1>
      <div className="card__and__btn">
        <Phrase phrase={currentData.phrase} />
        <Button handlerClick={handlerClick} />
      </div>
      <Author author={currentData.author} />
    </div>
  );
}

export default App;
