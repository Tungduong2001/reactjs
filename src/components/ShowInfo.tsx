import React from 'react'
import { ProductType } from '../types/product';

type ShowInfoProps = {
  person: ProductType
}
const ShowInfo = (props: ShowInfoProps) => {
  console.log(props);

  return (
    <div>ShowInfo
      <h3>Tên: {props.person.name}</h3>
    </div>
  )
}

export default ShowInfo