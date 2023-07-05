import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/users/get");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

const handleChange = () => {
    const updatedUsers = [...users];
   console.log(updatedUsers)
  };

  return (
    <div>
      <h1>User Data</h1>
      <table border={"border"} style={{width:'500px' , border:'1px solid white'}}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th >Graph</th>
        </tr>
        {users.map(i=>{
          return <tr>
                      <td>{i.firstname}</td>
                      <td>{i.email}</td>
                      <td>{i.mobile}</td>
                      {/* <td  style={{width:'200px'}}>
                        {i.Math} {i.English} {i.Physics} {i.Chemistry}
                      </td> */}
                      <td>
                        <button type="button" style={{margin:'10px'}} onClick={handleChange}>Check</button>
                      </td>
                      
                    </tr>
        })}
      </table>
    </div>
  );
}

export default App;
