import React, { useEffect, useState } from 'react'
import './Users.css'
const Users = () => {

  const [selectedGender, setSelectedGender] = useState("All");
  const [usersList, setUsersList] = useState([]);

  const getUserData = async() =>{
    let responce = await fetch('https://randomuser.me/api/?results=50');
    let data = await responce.json();
    setUsersList(data.results);
  }
  // console.log(usersList)
  useEffect(() => {
    getUserData();
  },[])
  
  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="users-container">
      <div className="top">
        <h3>User Details</h3>
        <p>Users are the backbone of any digital platform, each bringing unique preferences, behaviors, and needs. They can be categorized based on demographics, interests, and usage patterns. Understanding user details helps in enhancing user experience, personalizing content, and improving security. Key details often include name, email, age, location, and activity history. In web applications, user authentication ensures secure access, while user roles define permissions and functionalities. Tracking user interactions allows businesses to optimize services and provide better support. Whether in an e-commerce site, social media platform, or enterprise software, user data plays a crucial role in shaping engagement and growth. 🚀</p>
      </div>

      <div className="bottom">
        <div className="filter">
            <label>
              <input type="radio" value="All" checked={selectedGender === "All"} onChange={handleChange} />
              All
            </label>
            <label>
              <input type="radio" value="Male" checked={selectedGender === "Male"} onChange={handleChange} />
              Male
            </label>
            <label>
              <input type="radio" value="Female" checked={selectedGender === "Female"} onChange={handleChange} />
              Female
            </label>
        </div>
        <table>
        <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {
              usersList
              .filter(ele => selectedGender === 'All' || ele.gender.toLowerCase() === selectedGender.toLowerCase())
              .map((ele, idx) => {
                const {picture, name, email, gender} = ele;
                return <tr key={idx}>
                    <td><img className='img' src={picture.large} alt="" /></td>
                    <td>{`${name.first} ${name.last}`}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
              </tr>
              })
            }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users