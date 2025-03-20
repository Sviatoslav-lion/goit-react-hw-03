
import css from './SearchBox.module.css';
import { useState } from 'react';

const SearchBoxFunc = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <h2 className="visually-hidden">Find contact</h2>
      <label>Finde contact by name</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBoxFunc;
