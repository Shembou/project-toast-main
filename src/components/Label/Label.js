import React from 'react';

function Label({children, variantType, setSelectedVariant, labelId, selectedVariant}) {

  return (
    <label htmlFor={labelId}>
      <input
        id = {labelId}
        type = "radio"
        name = "variant"
        value = { variantType }
        checked = { variantType === selectedVariant }
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
