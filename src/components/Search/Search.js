import PropTypes from 'prop-types'
import { useState } from 'react'
import s from './Search.module.css'


 

export default function Searchbar ({ onSubmit }) {
    
    const [searchInput, setSearchInput] = useState("");
    
    
    const handlerChange = (e) => {
        setSearchInput(e.target.value)
    };

   const handleSubmit = (e) => {
        
        e.preventDefault()
        if (searchInput.trim() === "") {
            alert('Input something!')
            return              
        }
       onSubmit(searchInput);
       setSearchInput('');
    }

    

        return(
            <form className={s.searchForm} onSubmit={handleSubmit}>
              <button type="submit" className={s.searchFormButton}>
                Go
        </button>
    
        <input
                className={s.searchFormInput}
          value={searchInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies & TV-shows"
          onChange={handlerChange}
        />
      </form>
        )
        
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}