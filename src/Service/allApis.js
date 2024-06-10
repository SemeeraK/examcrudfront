import axios from "axios";
import { base_url } from "./base_url";
import { commonRequest } from "./commonStructure";

 
 export const addProduct=async(bodyData)=>{
   return await commonRequest('POST',`${base_url}/appoinment`,bodyData)
 }


 export const accessProduct=async()=>{
    return await commonRequest('GET',`${base_url}/appoinment`,{})
  }

  export const deleteProducts=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/appoinment/${id}`,{})
 }
 

  export const  editAppoinments=async(id,updatedAppoinment)=>{
    return await commonRequest('PUT',`${base_url}/appoinment/${id}`,updatedAppoinment)
  }
  // export const editProducts = (id, updatedProduct) => {
  //   return axios.put(`http://localhost:7000/appoinment/${id}`, updatedProduct);
  // };
  export const editProducts = (id, data) => {
    return axios.put(`${base_url}/appoinment/${id}`, data);
};

