// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { Trash2 } from "lucide-react"; // Importing the trash icon from lucide-react

// // Outer page container
// const PageContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   width: 100vw;
//   height: 100vh;
//   background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// `;

// // Table container
// const TableContainer = styled.div`
//   width: 100%;
//   max-width: 800px;
//   background: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   overflow-x: auto;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// // Table layout and styling
// const DataTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   min-width: 600px;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// // Table header styling
// const TableHeader = styled.th`
//   padding: 12px 15px;
//   border: 1px solid #ddd;
//   background-color: #333;
//   color: #fff;
//   text-align: left;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// // Table data cell styling
// const TableCell = styled.td`
//   padding: 12px 15px;
//   border: 1px solid #ddd;
//   text-align: center;

//   @media (max-width: 768px) {
//     display: block;
//     text-align: left;
//     padding: 8px;
//     position: relative;

//     &::before {
//       content: attr(data-label);
//       font-weight: bold;
//       display: inline-block;
//       width: 100px;
//     }
//   }
// `;

// // Table row styling
// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #f9f9f9;
//   }
//   &:nth-child(odd) {
//     background-color: #ececec;
//   }

//   @media (max-width: 768px) {
//     display: block;
//     margin-bottom: 10px;
//   }
// `;

// // Delete icon styling
// const DeleteIcon = styled(Trash2)`
//   cursor: pointer;
//   color: #ff4d4f;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;

// // Title styling
// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 16px;
//   color: #222;

//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const Sensor6 = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const dummyData = [
//       {
//         location: "Location A",
//         dateTime: "2025-06-07 08:30",
//         lightCondition: "Low Light",
//       },
//       {
//         location: "Location B",
//         dateTime: "2025-06-07 09:00",
//         lightCondition: "Dim Light",
//       },
//       {
//         location: "Location C",
//         dateTime: "2025-06-07 09:30",
//         lightCondition: "High Light",
//       },
//       {
//         location: "Location D",
//         dateTime: "2025-06-07 10:00",
//         lightCondition: "Dim Light",
//       },
//       {
//         location: "Location E",
//         dateTime: "2025-06-07 10:30",
//         lightCondition: "Low Light",
//       },
//     ];
//     setData(dummyData);
//   }, []);

//   const handleDelete = (index) => {
//     const updatedData = data.filter((_, i) => i !== index);
//     setData(updatedData);
//   };

//   return (
//     <PageContainer>
//       <TableContainer>
//         <Title>Light Conditions Data</Title>
//         {data.length ? (
//           <DataTable>
//             <thead>
//               <TableRow>
//                 <TableHeader>Location</TableHeader>
//                 <TableHeader>Date-Time</TableHeader>
//                 <TableHeader>Light Conditions</TableHeader>
//                 <TableHeader>Actions</TableHeader>
//               </TableRow>
//             </thead>
//             <tbody>
//               {data.map((item, i) => (
//                 <TableRow key={i}>
//                   <TableCell data-label="Location">{item.location}</TableCell>
//                   <TableCell data-label="Date-Time">{item.dateTime}</TableCell>
//                   <TableCell data-label="Light Conditions">
//                     {item.lightCondition}
//                   </TableCell>
//                   <TableCell data-label="Actions">
//                     <DeleteIcon onClick={() => handleDelete(i)} />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </tbody>
//           </DataTable>
//         ) : (
//           <p style={{ textAlign: "center" }}>No data available</p>
//         )}
//       </TableContainer>
//     </PageContainer>
//   );
// };

// export default Sensor6;


import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Trash2 } from "lucide-react"; // Importing the trash icon from lucide-react

// Styled Components (unchanged)
const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

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


const Sensor6 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios
      .get("http://144.24.116.230:8080/api/v1/ldr/getAll") 
      .then((response) => {
        setData(response.data); 
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching light condition data:", error);
        setLoading(false);
      });
  }, []);

  
  const handleDelete = (id) => {
    const deleteApiUrl = `http://144.24.116.230:8080/api/v1/ldr/delete${id}`; 

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
    return <div>Loading light condition data...</div>;
  }

  return (
    <PageContainer>
      <TableContainer>
        <Title>Light Conditions Data</Title>
        {data.length ? (
          <DataTable>
            <thead>
              <TableRow>
                <TableHeader>Location</TableHeader>
                <TableHeader>Date-Time</TableHeader>
                <TableHeader>Light Conditions</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell data-label="Location">{item.location}</TableCell>
                  <TableCell data-label="Date-Time">{item.date}</TableCell>
                  <TableCell data-label="Light Conditions">{item.ldr}</TableCell>
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

export default Sensor6;
