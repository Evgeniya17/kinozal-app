import React from "react";
import './SearchForm.css';

function SearchForm(){
        return(
        <div id="search-block">
            <h2 className="search-title ">Поиск</h2>
            <form className="searchr-form" action="#">
                 <input type="text" name="search" id="search" placeholder="Поиск по сайту"/>
                 <button className="search-btn" type="button"><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default SearchForm;