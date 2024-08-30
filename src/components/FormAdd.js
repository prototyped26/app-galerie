import '../styles/FormAdd.css'
import { useState } from "react";

const FormAdd = ({formIsOpen, updateFormIsOpen, photos, setPhotos}) => {

    const [inputNameValue, setInputNameValue] = useState("");
    const [inputFileValue, setInputFileValue] = useState();
    const [inputNameError, setInputNameError] = useState(false);
    const [inputFileError, setInputFileError] = useState(false);

    const handleAddPicture = (e) =>  {
        e.preventDefault();
        //console.log("Formulaire d' ajout ! ");

        inputNameValue.length > 0 ? setInputNameError(false) : setInputNameError(true);
        inputFileValue.length > 0 ? setInputFileError(false) : setInputFileError(true);

        if (!inputNameError && !inputFileError) {
            let photo = {
                name: inputNameValue,
                src: inputFileValue,
                isDelete: false
            };

            let newPhotos = photos.slice();
            setPhotos([...newPhotos, photo]);

            //saveFileServer(photo).then(r => {});

            console.log(inputFileValue);
            alert("Enregistrement effectué !");
            updateFormIsOpen(false);
        }
    };

    /**
     * Méthode d'appel API pour charger la photo
     * @param photo
     * @returns {Promise<void>}
     */
    const saveFileServer = async (photo) => {
        try {
            let res = await fetch("https://loaded.images.com/load", {
                method: "POST",
                body: JSON.stringify(photo)
            });
            const resJson = await res.json();
            if (resJson.status === 200) {
                console.log("Fichier chargé !")
            } else {
                console.log("Fichier non chargé")
            }
        } catch (err) {
            console.log(err);
        }
    };

     return formIsOpen ? (
         <div className="FormAdd" onSubmit={handleAddPicture}>
             <form action="">
                 <div>
                     <h2>Enregistrement d'une nouvelle photo</h2>
                 </div>
                 <div>
                     <label htmlFor="name">Nom de l'image</label><br/>
                     <input
                         value={inputNameValue}
                         onChange={(e) => setInputNameValue(e.target.value)}
                         type="text" id="name" className="name"/>
                     {inputNameError ?? (<span className="FormMessage">(*) Saisir un nom pour la photo</span>)}
                 </div>
                 <div>
                 <label htmlFor="image">Charger une photo ! </label><br/>
                     <input type="file" name="image" onChange={(e) => setInputFileValue(URL.createObjectURL(e.target.files[0]))}/>
                     {inputFileError ?? (<span className="FormMessage">(*) Choisir un fichier</span>)}
                 </div>
                 <div>
                 <button type="submit">
                         Enregistrer
                     </button>
                 </div>
             </form>
             <div>
                 <button className="FormBtnClose" onClick={() => updateFormIsOpen(false)}>
                     Annuler
                 </button>
             </div>
         </div>
     ) : null
}

export default FormAdd;