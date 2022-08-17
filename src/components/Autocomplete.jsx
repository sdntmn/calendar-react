const UseAutocomplete = function ({ children, onClick, item }) {
  return (
    <>
      <li onClick={onClick} className='autocomplete__result'>
        <span className='autocomplete__text-menu-title'>{item.title}</span>

        <span className='autocomplete__text'>{item.data}</span>
      </li>
    </>
  );
};

export default UseAutocomplete;
