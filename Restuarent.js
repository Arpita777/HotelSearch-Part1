import React from 'react'

import Detail from './Detail'

function Restuarent(props){
  return(
    
    <table>
      <tbody>
        <tr>
          <td>
            <h1>{props.item.RestaurantName}</h1>
          </td>
          <td>
            {props.item.Cuisines}
          </td>
          
        </tr>
      </tbody>
    </table>
   
  )
}
export default Restuarent
