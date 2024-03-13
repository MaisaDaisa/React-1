import React from 'react'
import "./InputForm.css"

export default function InputForm({ inputTypes}) {
  return (
    <form>
      {inputTypes.map((inputType, index) => {
        return (
          <div key={index}>
            <label htmlFor={inputType.name}>{inputType.label}</label>
            <input type={inputType.type} id={inputType.name} name={inputType.name} />
          </div>
        )
      })}
    </form>
  )
}
