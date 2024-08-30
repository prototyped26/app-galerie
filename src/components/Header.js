import '../styles/Header.css';
import { useState } from "react";

function Header({ formIsOpen, updateFormIsOpen }) {

    return (
        <nav className="">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
                menu
            </label>
            <label className="title">Ma Galerie Photos</label>
            <ul>
                <li><a className="active" onClick={(event) => handleShowAddPicture(event, updateFormIsOpen, formIsOpen)} href="#">+ Ajouter Photo</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
            </ul>
        </nav>
    );
}

function handleShowAddPicture(e, updateFormIsOpen, isOpen) {
    e.preventDefault();
    if (!isOpen) updateFormIsOpen(true);
}

export default Header;