import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Button';

function InputCharacterCounter() {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 100;

  useEffect(() => {
    setCharacterCount(text.length);
  }, [text]);

  function handleTextChange(event) {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  }

  return (
    <div>
      <label htmlFor="text-input">Ingresar texto:</label>
      <input
        id="text-input"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <p>{characterCount}/{maxCharacters} caracteres</p>
      {text.length === maxCharacters && <Alert severity="warning"> Cuidado! Se alcanzo la cantidad maxima de caracteres!</Alert>}
    </div>
  );
}

export default InputCharacterCounter;