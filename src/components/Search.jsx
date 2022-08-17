import React, { useState, useCallback } from "react";
import InputPopup from "./InputPopup";
import UseAutocomplete from "./Autocomplete";

const Search = function ({ isSaveEvent, setDate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [inputSearchData, setInputSearchData] = useState("");

  //==========================================================================
  // Обработчик изменения инпута обновляет стейт
  const handleInputSearch = (evt) => {
    setInputSearch(evt.target.value);
  };

  //==========================================================================
  const handlerClickInput = () => {
    setIsOpen(true);
  };

  //==========================================================================
  const resetFrom = useCallback(() => {
    setInputSearch("");
  }, []);

  //==========================================================================
  const filterInputData = useCallback(
    (event) => {
      if (
        event.title
          .toLowerCase()
          .trim()
          .includes(inputSearch.toLowerCase().trim())
      ) {
        return true;
      }
      return false;
    },
    [inputSearch]
  );

  let resultSearch = isSaveEvent.filter(filterInputData);

  //==========================================================================
  //компонент InputPopup
  const searchInput = (
    <InputPopup
      className='header__input'
      placeholder='Placeholder'
      type='search'
      name='search'
      value={inputSearch}
      onChange={handleInputSearch}
      onClick={handlerClickInput}
    />
  );

  return (
    <>
      {searchInput}
      {!!resultSearch && resultSearch.length > 0 && !!inputSearch && isOpen && (
        <div className='autocomplete'>
          <div className='autocomplete__wrap'>
            <ul className='autocomplete__search'>
              {resultSearch.map((item) => (
                <UseAutocomplete
                  key={item.id}
                  item={item}
                  onClick={() => {
                    setInputSearch(item.title || "");
                    setInputSearchData(item.data);
                    setIsOpen(false);
                    setDate(new Date(item.data));
                    setTimeout(() => {
                      resetFrom();
                    }, 3000);
                  }}></UseAutocomplete>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
