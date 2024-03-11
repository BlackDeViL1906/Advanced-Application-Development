import React, { useState } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/css/ManageUsers.css";

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Abi", role: "User", phone_no: "123456789" },
    { id: 2, name: "Hari", role: "User", phone_no: "9360244678" },
    { id: 3, name: "Gs", role: "User", phone_no: "123456789" },
    { id: 4, name: "Harshid", role: "User", phone_no: "123456789" },
    { id: 5, name: "Arun", role: "User", phone_no: "123456789" },
    {
      id: 6,
      name: "Ameen",
      role: "User",
      phone_no: "123456789",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MDBContainer>
      <h2 className="text-center mb-5" style={{ marginTop: "5%" }}>
        User Management
      </h2>
      <MDBCard>
        <MDBCardBody className="user-card">
          <div className="usr-manage-head">
            <h3 className="mb-4">Users List</h3>
            <p className="usr-search-text">Search : </p>
            <div className="usr-search-bar">
              <MDBInput
                className="search-bar-input"
                onChange={handleSearch}
                value={searchQuery}
                label={<SearchIcon className="search-bar-icon" />}
                size="sm"
                style={{ height: "35px" }}
              />
            </div>
          </div>

          <MDBTable responsive className="usr-list-table">
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Phone No.</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.phone_no}</td>
                  <td>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => deleteUser(user.id)}
                      className="usr-del-button"
                    >
                      <MDBIcon icon="trash" />
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default UserManagementPage;
