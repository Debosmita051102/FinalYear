import { useState, useEffect } from "react";
import styled from "styled-components";
import { Trash2 } from "lucide-react"; // Importing the trash icon from lucide-react

// Outer page container
const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #00c6ff, #0072ff);
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

// Table container
const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Table layout and styling
const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Table header styling
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

// Table data cell styling
const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
    padding: 8px;
    position: relative;

    &::before {
      content: attr(data-label);
      font-weight: bold;
      display: inline-block;
      width: 100px;
    }
  }
`;

// Table row styling
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

// Delete icon styling
const DeleteIcon = styled(Trash2)`
  cursor: pointer;
  color: #ff4d4f;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

// Title styling
const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Sensor4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        dateTime: "2025-06-07 08:30",
        co2Level: "400 ppm",
        nh3Level: "1 ppm",
      },
      {
        dateTime: "2025-06-07 09:00",
        co2Level: "420 ppm",
        nh3Level: "2 ppm",
      },
      {
        dateTime: "2025-06-07 09:30",
        co2Level: "390 ppm",
        nh3Level: "1.5 ppm",
      },
      {
        dateTime: "2025-06-07 10:00",
        co2Level: "410 ppm",
        nh3Level: "1.8 ppm",
      },
      {
        dateTime: "2025-06-07 10:30",
        co2Level: "415 ppm",
        nh3Level: "2.2 ppm",
      },
    ];
    setData(dummyData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <PageContainer>
      <TableContainer>
        <Title>CO2 and NH3 Sensor Data</Title>
        {data.length ? (
          <DataTable>
            <thead>
              <TableRow>
                <TableHeader>Date-Time</TableHeader>
                <TableHeader>CO2 Level</TableHeader>
                <TableHeader>NH3 Level</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <TableRow key={i}>
                  <TableCell data-label="Date-Time">{item.dateTime}</TableCell>
                  <TableCell data-label="CO2 Level">{item.co2Level}</TableCell>
                  <TableCell data-label="NH3 Level">{item.nh3Level}</TableCell>
                  <TableCell data-label="Actions">
                    <DeleteIcon onClick={() => handleDelete(i)} />
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

export default Sensor4;
