import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { accessProduct, addProduct, deleteProducts, editProducts } from '../Service/allApis';
import Pagination from 'react-bootstrap/Pagination';
import { Link, useNavigate } from 'react-router-dom';
import EditProducts from '../Components/Editappoinment';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editProduct,setEditProduct]=useState([])

  const [products, setProducts] = useState({
    name: "",
    age: "",
    drname: "",
    
    reason: "",
    
    appoinmentDate: "",
  
  });

  const getProducts = (e) => {
    let { value, name, type, files } = e.target;
    if (type === 'file') {
      setProducts({ ...products, [name]: files[0] });
    } else {
      setProducts({ ...products, [name]: value });
    }
  };

  const addProducts = async () => {
    const { name, age, drname, reason, appoinmentDate } = products;

    if (name === "" || age === "" || drname === "" ||  reason === "" || appoinmentDate === "") {
      alert('Please fill all fields');
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('drname', drname);
      
      formData.append('reason', reason);
      
      formData.append('appoinmentDate', appoinmentDate);

      try {
        const out = await addProduct(products);
        if (out.status >= 200 && out.status < 300) {
          alert('Appoinment  Added Successfully');
          handleClose();
          displayProducts()
          
          const newProduct =
           {
            id: out.data.id, 
            name,
            age,
            drname,
            
            reason,
          
            appoinmentDate
          };
          setAllProducts([...allProducts, newProduct]);
          
          setProducts({
            name: "",
            age: "",
            drname: "",
            
            reason: "",
          
            appoinmentDate: ""
          });
          
          paginate(currentPage);
        } else {
          alert('Product Adding Failed');
        }
      } catch (error) {
        console.error("Error adding product:", error);
        alert('Product Adding Failed');
      }
    }
  };

  const displayProducts = async () => {
    try {
      const result = await accessProduct();
      console.log('Fetched Products:', result.data);

    
      const validProducts = result.data.filter(i =>
        i.name &&
        i.age &&
        i.drname &&
        
        i.reason &&
      
        i.appoinmentDate
      );

      if (Array.isArray(validProducts)) {
        setAllProducts(validProducts);
      } else {
        console.error("Unexpected API Response Structure:", result);
        alert("Appoinment access failed");
      }
    } catch (error) {
      console.error("Error in displayAppoinment:", error);
      alert("Appoinment access failed");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const result = await deleteProducts(id);
      if (result.status >= 200 && result.status < 300) {
        alert('Appoinment Deleted Successfully');
        setAllProducts(allProducts.filter(i => i.id !== id));
      
        if (allProducts.length % productsPerPage === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } else {
        alert('Appoinmentt Deletion Failed');
      }
    } catch (error) {
      console.error("Error in delete Appoinment:", error);
      alert("Appoinment Deletion Failed");
    }
  };

  useEffect(() => {
    displayProducts();
  }, []);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProducts.length / productsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>
    );
  }


  

  return (
    <div>
      <h2 className='text-center'>All Appoinments</h2>
      <div>
        <Row>
          <Col>
            <Button className='me-1' onClick={handleShow}>New Appoinment</Button>
            <Button id='btn' onClick={displayProducts}>Refresh</Button>
          </Col>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Appoinment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <FloatingLabel controlId='floatingInput' label="Patient Name" className="mb-3">
                  <Form.Control name='name' onChange={getProducts} type='text' placeholder='Patient Name' value={products.name} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingInput' label="Age" className="mb-3">
                  <Form.Control name='age' onChange={getProducts} type='text' placeholder='age' value={products.age} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingInput' label="Cunsulting Doctor" className="mb-3">
                  <Form.Control name='drname' onChange={getProducts} type='text' placeholder='Dr: ' value={products.drname} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingInput' label="Reason " className="mb-3">
                  <Form.Control name='reason' onChange={getProducts} type='text' placeholder='Reason ' value={products.reason} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingInput' label="Appoinment Date" className="mb-3">
                  <Form.Control name='appoinmentDate' onChange={getProducts} type='date' placeholder='Appoinment Date' value={products.appoinmentdate} />
                </FloatingLabel>
              </>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={addProducts}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
          <div className='ms-2 p-3 my-2'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Dr:Name</th>
                  <th>Reason</th>
                  <th>Appoinment Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts?.length > 0 ? (
                  currentProducts?.map((i) => (
                    <tr key={i.id}>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.drname}</td>
                      <td>{i.reason}</td>
                      <td>{i.appoinmentDate}</td>
                      <td style={{ width: '10px', whiteSpace: "nowrap" }}>
{/* <Link to={'/edit'}> */}
<Link className='btn btn-primary btn-sm me-1' to={`/edit/${i.id}`} >Edit</Link>

  
{/* {/* </Link>                        */}
 <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(i.id)}>Delete</button> 
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No Appoinments added yet</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <Pagination>{pageNumbers}</Pagination>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Products;
