import React, { useState, useEffect } from "react";

function Pagination({pages = 10, setCurrentPage}) {
    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
    const numberOfPages = [];
    for(let i = 1; i <= pages; i++){
    numberOfPages.push(i);
    }
    useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';
    // tempNumberOfPages = tempNumberOfPages.slice(0, 4);
    if(currentButton >= 1 && currentButton <= 3) {
    tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
    const sliced = numberOfPages.slice(0, 5);
    tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
    const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
    const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
    tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
    } else if(currentButton > numberOfPages.length - 3) {
    const sliced = numberOfPages.slice(numberOfPages.length - 4);
    tempNumberOfPages = ([1, dotsLeft, ...sliced]);
    } else if (currentButton === dotsInitial){
    setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
    setCurrentButton(arrOfCurrButtons[3] + 2)
    } else if (currentButton === dotsLeft) {
    setCurrentButton(arrOfCurrButtons[3] - 2)
    }
    setArrOfCurrButtons(tempNumberOfPages);  
    setCurrentPage(currentButton);
    }, [currentButton]);
    return (
    <div>
    <div className="pagination-container">
    <a href="#" className={`${currentButton === 1 ? 'disabled' : ''}`} 
    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Prev</a>
    {arrOfCurrButtons.map((page, index) => {
    return (
    <a key={index}
    onClick={() => setCurrentButton(page)}
    href="#" 
    className={currentButton === page ? 'active' : ''}>
    {page}
    </a>
    )
    })}
    <a href="#" 
    className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`} 
    onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}>Next</a>
    </div>
    </div>
    )
}

export default Pagination ;