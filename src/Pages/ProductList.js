import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductList() {
    const [products,setProducts]=useState([])

    function getProducts(){
        fetch("http://localhost:7000/appoinment")
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            throw new Error()
        })
        .then(data=>{
            setProducts(data)
        })
        .catch(error=>{
            alert("Unable to get the data")
        })
    }

useEffect(()=>{
    getProducts()
},[])
  return (
    <div className='container my-4'>
      <h2 className='text-center mb-4'>Appoinment</h2>
      <div>
        <Row>
            <Col>
<Link to={'/productlist'}>
                <Button className='me-1' >Add Appoinment</Button>
    
</Link>            <Button id='btn' onClick={getProducts}>Refresh</Button>

            </Col>

        </Row>
      </div>
      <Table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Dr:Name</th>
                <th>Reason</th>
                <th>Appoinment Date</th>
                <th>Action</th>

            </tr>
        </thead>
          <tbody>
{
    products?.map((i,index)=>{
        return(
            <tr key={index}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.drname}</td>
                <td>{i.reason}</td>
                <td>{i.appoinmentDate}</td>
                <td style={{width:"10px",whiteSpace:'nowrap'}}>
                <Link className='btn btn-primary btn-sm me-1' to={`/edit/${i.id}`} >Edit</Link>

                    <button className='btn btn-danger btn-sm'>Delete</button>
                </td>

            </tr>
        )
    })
}
          </tbody>
      </Table>
    </div>
  )
}

export default ProductList

