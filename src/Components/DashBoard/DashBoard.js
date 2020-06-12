import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import "./DashBoard.css";
import { DataContext } from '../Data';
const DashBoard = () => {
  const [data, setData] = useContext(DataContext);
  const [user, setUser] = useState([]);
  const [today, setToday] = useState(0);
  useEffect(() => {
    const dat = new Date().toDateString();
    const todayAppoint = data.filter(x => x.day === dat);
    setToday(todayAppoint);
  }, [data])
  useEffect(() => {
    if (data.length !== 0) {
      const uniq = [...new Set(data.map(x => x.firstname))];
      setUser(uniq);
    }
  }, [data]);
  const handleAction = (e) => {
    alert(e.target.value)
  }
  return (
    <Container fluid className="dashboard">
      <div className="ml-6 main">
        <div className="d-none d-md-block"><SideBar></SideBar></div>
        <h3 className="mt-3">DashBoard</h3>
        <Row className="my-3 text-light">
          <Col sm={6} md={3}>
            <div className="m-1 p-2 box-1">
              <h3>09</h3>
              <p> Peding Appointment</p>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="m-1 p-2 box-2">
              <h3>{today.length}</h3>
              <p> Today Appointment</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="m-1 p-2 box-3">
              <h3>{data.length}</h3>
              <p> Total Appointment</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="m-1 p-2 box-4">
              <h3>{user.length}</h3>
              <p> Total Patient</p>
            </div>
          </Col>
        </Row>
        <Table responsive="sm" >
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Contact</th>
              <th>Catagory</th>
              <th>Prescription</th>
              <th>Action</th>
            </tr>
          </thead>

          {
            data.length === 0 ? <Spinner animation="border" variant="warning" /> : data.map((x, index) => (

              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{x.firstname}</td>
                  <td>{x.day}</td>
                  <td>{x.time}</td>
                  <td>{x.phone}</td>
                  <td>{x.catag}</td>
                  <td>

                  </td>
                  <td>
                    <select id="status" onChange={handleAction} value={x.status}>
                      <option value="rejected" className="bg-light">Rejected</option>
                      <option value="pending" className="bg-light">pending</option>
                      <option value="approved" className="bg-light">Approved</option>
                    </select>
                  </td>
                </tr>
              </tbody>

            ))
          }
        </Table>


      </div>
    </Container >
  );
};

export default DashBoard;