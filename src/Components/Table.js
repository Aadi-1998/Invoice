import React from 'react';
import './Table.css'

// Example of a data array that
// you might receive from an API
const data = [
  {
    Id : 1,
    product : "Medicine",
    Unit_Price : "100",
    Tax:30,
    Qty:2,
Total:230

},
{
  Id : 1,
  product : "Medicine",
  Unit_Price : "100",
  Tax:30,
  Qty:2,
Total:230

},
{
  Id : 1,
  product : "Medicine",
  Unit_Price : "100",
  Tax:30,
  Qty:2,
Total:230

},
{
  Id : 1,
  product : "Medicine",
  Unit_Price : "100",
  Tax:30,
  Qty:2,
Total:230

},
{
  Id : 1,
  product : "Medicine",
  Unit_Price : "100",
  Tax:30,
  Qty:2,
Total:230

},
{
  Id : 1,
  product : "Medicine",
  Unit_Price : "100",
  Tax:30,
  Qty:2,
Total:230

},


]

const Table =()=> {
 
return (
	<div >
	<table className='table' >
  <tr>
                <th>#</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Tax</th>
                <th>Qty</th>
                <th>Total</th>
        
            </tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.Id}</td>
			<td>{val.product}</td>
			<td>{val.Unit_Price}</td>
      <td>{val.Tax}</td>
      <td>{val.Qty}</td>
      <td>{val.Total}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}


export default Table;
