

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { Trash2 } from "lucide-react";

// Styled Components (unchanged from before)
const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 70vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  background-color: #333;
  color: #fff;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
    padding: 8px;
    position: relative;

    &::before {
      content: attr(data-label);
      font-weight: bold;
      display: inline-block;
      width: 120px;
    }
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:nth-child(odd) {
    background-color: #ececec;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

const DeleteIcon = styled(Trash2)`
  cursor: pointer;
  color: #ff4d4f;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;


const Sensor1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios
      .get("http://144.24.116.230:8080/api/v1/dht/getAll")
      .then((response) => {
        setData(response.data); 
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    
    const deleteApiUrl = `http://144.24.116.230:8080/api/v1/dht/delete/${id}`;
    axios
      .delete(deleteApiUrl)
      .then(() => {
        
        setData((prevData) => prevData.filter((item) => item.id !== id));
        alert("Row deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting row:", error);
        alert("Failed to delete row. Please try again.");
      });
  };

  if (loading) {
    return <div>Loading sensor data...</div>;
  }

  return (
  <PageContainer>
    <TableContainer>
      <Title>Sensor Data</Title>
      {data.length ? (
        <DataTable>
          <thead>
            <TableRow>
              <TableHeader>Location</TableHeader>
              <TableHeader>Date-Time</TableHeader>
              <TableHeader>Temperature</TableHeader>
              <TableHeader>Humidity</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <TableRow key={item.id}>
                <TableCell data-label="Location">{item.location}</TableCell>
                <TableCell data-label="Date-Time">
                  {new Date(item.date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </TableCell>
                <TableCell data-label="Temperature">{item.temperature}°C</TableCell>
                <TableCell data-label="Humidity">{item.humidity}%</TableCell>
                <TableCell data-label="Actions">
                  <DeleteIcon onClick={() => handleDelete(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </DataTable>
      ) : (
        <p style={{ textAlign: "center" }}>No data available</p>
      )}
    </TableContainer>
  </PageContainer>
);
};

export default Sensor1;

