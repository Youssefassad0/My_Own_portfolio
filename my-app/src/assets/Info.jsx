import React from 'react'
import { Personal_info } from './Donne'
function Info() {
  return (
    <>
    {
      Personal_info.map(({title,description},index)=>{
        return (
          <li className="info__item" key={index}>
            <span className="info__title">
              {title}
            </span>
            <span className="info__description">
              {description}
            </span>
          </li>
        )
      }
    )    }
    </>
  )
}

export default Info