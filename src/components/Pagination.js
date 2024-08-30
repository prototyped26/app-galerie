import '../styles/Pagination.css';

function Pagination({ photoPerPage, size, currentPage, setCurrentPage, setPhotoPerPage, formIsOpen }) {

    let paginationNumbers = [];

    for (let i = 1 ; i <= Math.ceil(size /photoPerPage); i++) {
        paginationNumbers.push(i);
    }

    const handleNext = (e) => {
        e.preventDefault();
        if (currentPage < paginationNumbers.length) {
            let index = paginationNumbers.indexOf(currentPage);
            setCurrentPage(paginationNumbers[index +1]);
        }
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            let index = paginationNumbers.indexOf(currentPage);
            setCurrentPage(paginationNumbers[index - 1]);
        }
    }

    if (formIsOpen) {
        return null;
    }
    return (
        <div className="MainPagination">

            <div className="ChoseSize">
                <select value={`${photoPerPage}`} onChange={(e) => setPhotoPerPage(Number(e.target.value))}
                        name="numberImage" id="numberImage">
                    <option value="">Changer de taille</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                </select>
            </div>

            <div className="ChangeNumber">
                <ul className="Paginator">
                    <li><a className="" href="#" onClick={(event) => handlePrevious(event)}>Préc</a></li>
                    { paginationNumbers.map((number) => (
                        <li key={number}>
                            <a className={(number === currentPage ? "active" : "")} href="#">{number}</a>
                        </li>
                    ))}
                    <li><a href="#" onClick={(event) => handleNext(event)} >Svt</a></li>
                </ul>
            </div>


        </div>
    );
}

export default Pagination;