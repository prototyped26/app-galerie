import '../styles/Gallery.css';
import {useState} from "react";

function Gallery ({ formIsOpen, photos, setPhotos }) {

    const handleDeletePhoto = (e, index) => {
        e.preventDefault();
        //console.log("Index " + index);
        let p = photos.find((item, i) => i === index);
        p.isDelete = true;
        let newItems = photos.slice();

        newItems[index] = p;

        setPhotos(newItems);
    };

    const handleConfirmationDelete = (e, index) => {
        e.preventDefault();
        let filteredItems = photos.filter((item, i) => i !== index);

        setPhotos([...filteredItems]);
    }

    return !formIsOpen ?(
        <div className="MainGallery">

            <div className="Gallery">
                {photos.map((item, index) => (
                    <div className="GalleryItem" key={`item-${index}`}>
                        <img src={item.src} alt="image1"
                             key={`image-${index}`}
                             className="GalleryImg"/>
                        {
                            item.isDelete ?
                                (<a href="#" className="ImgDelConfirm" onClick={(event) => handleConfirmationDelete(event, index)}>cliquez pour confirmer la suppression</a>) :
                                (<a href="#" className="ImgDel" onClick={(event) => handleDeletePhoto(event, index)} >Supprimer</a>)
                        }

                    </div>
                ))}
            </div>
        </div>
    ) : null;
}

export default Gallery;