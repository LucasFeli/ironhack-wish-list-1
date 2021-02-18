import React from 'react';



function List({whish}) {
    //

  return (
    <div >
        {whish.map((whish)=><p>{whish.wishes}</p>)}
    </div>
  )
}

export default List;