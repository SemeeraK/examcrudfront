import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { accessProduct, editProducts } from '../Service/allApis';


function Editappoinment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({
      name: "",
      age: "",
      drname: "",
      reason: "",
      appoinmentDate: "",
    });
  
    useEffect(() => {
      const fetchAppointment = async () => {
        try {
          const response = await accessProduct(id);
          setAppointment(response.data);
        } catch (error) {
          console.error('Error fetching appointment:', error);
        }
      };
  
      fetchAppointment();
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAppointment({
        ...appointment,
        [name]: value,
      });
    };
  
    const handleSave = async () => {
      try {
        const response = await editProducts(id, appointment);
        if (response.status >= 200 && response.status < 300) {
          alert('Appointment updated successfully');
          navigate('/productlist');
        } else {
          alert('Failed to update appointment');
        }
      } catch (error) {
        console.error('Error updating appointment:', error);
      }
    };
  
  return (
    <div>
          <div className="container">
      <h2>Edit Appointment</h2>
      <Form>
        <FloatingLabel controlId="floatingInput" label="Patient Name" className="mb-3">
          <Form.Control name="name" onChange={handleChange} type="text" placeholder="Patient Name" value={appointment.name} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
          <Form.Control name="age" onChange={handleChange} type="text" placeholder="Age" value={appointment.age} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Consulting Doctor" className="mb-3">
          <Form.Control name="drname" onChange={handleChange} type="text" placeholder="Dr: " value={appointment.drname} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Reason" className="mb-3">
          <Form.Control name="reason" onChange={handleChange} type="text" placeholder="Reason" value={appointment.reason} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Appointment Date" className="mb-3">
          <Form.Control name="appoinmentDate" onChange={handleChange} type="date" placeholder="Appointment Date" value={appointment.appoinmentDate} />
        </FloatingLabel>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Form>
    </div>

    </div>
  )
}

export default Editappoinment
