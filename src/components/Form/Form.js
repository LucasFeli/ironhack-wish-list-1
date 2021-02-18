import React from 'react';

const whishes = {
    whish: ""
}

function Form({onSubmit}) {
    const[formWishes, setformWishes] = React.useState(whishes)

    const handleSubimt = (e) =>{
        e.preventDefault();
        onSubmit(formWishes);
        setformWishes(whishes)

    }

  return (
    <div >
       <input
        type="text"
        placeholder="whish.."
       
      />
    </div>
  )
}

export default Form;
