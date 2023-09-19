import React from 'react';

function Label({children, variantType, setSelectedVariant, labelId}) {

  return (
    <label htmlFor={labelId}>
      <input
        id = {labelId}
        type = "radio"
        name = "variant"
        value = { variantType }
        onChange = { event => {
          setSelectedVariant(event.target.value);
        }} 
      >
      </input>
      {children}
    </label>
  )
}

export default Label;
