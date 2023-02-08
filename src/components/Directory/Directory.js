import React from 'react'
import './categories.styles.scss'

function Directory (props){

    return(
    <div className='categories-container'>
    {
    props.categories.map(item=>
          <div className='directory-item-container' key={item.id}>
            <div className='background-image' style={{backgroundImage:`url(${item.imageUrl})`}}/>
          <div className='directory-item-body-container'>
            <h2>{item.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )}
  </div>
    )
}

export default Directory;