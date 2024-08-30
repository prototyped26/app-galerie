import Header from './components/Header';
import Gallery from "./components/Gallery";
import FormAdd from "./components/FormAdd";
import Pagination from "./components/Pagination";
import LoadingPage from "./components/LoadingPage";
import {useEffect, useState} from "react";
import { photosList } from "./datas/photosList";
import './App.css';

function App() {

    const [formIsOpen, updateFormIsOpen] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [allPhotos, setAllPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [photoPerPage, setPhotoPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setPhotos(photosList);
            setAllPhotos(photosList);
            setLoading(false);
        }, 800);
    }, []);

    useEffect(() => {
        let photos = allPhotos.slice();
        setPhotos(photos.slice(0, photoPerPage));

    }, [currentPage, photoPerPage]);

    return (
        <div className="App">
            <Header formIsOpen={formIsOpen} updateFormIsOpen={updateFormIsOpen} />
            <FormAdd formIsOpen={formIsOpen} updateFormIsOpen={updateFormIsOpen} photos={photos} setPhotos={setPhotos}/>
            {
                loading ?
                    <LoadingPage />
                    : (<div>
                        <Pagination
                            photoPerPage={photoPerPage}  setPhotoPerPage={setPhotoPerPage}
                            size={allPhotos.length} formIsOpen={formIsOpen}
                            currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Gallery formIsOpen={formIsOpen} photos={photos} setPhotos={setPhotos} />
                    </div>)
            }


        </div>
    );
}

export default App;
