import React from 'react';
import { PageContainer, Card, Image, CardContent, Timestamp, DeleteIcon } from './Images.styled';

function Images() {
  const handleDelete = (timestamp) => {
    alert(`Delete image with timestamp: ${timestamp}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1rem', backgroundColor: '#f9f9f9', height: '100vh' }}>
      <PageContainer>
        <Card>
          <Image src="https://images.unsplash.com/photo-1606050309588-741702cceb9b?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyfHxkYW18ZW58MHx8fHwxNjg3MjQ2NDg0fDA&ixlib=rb-4.0.3&fm=jpg&w=4000&h=3000&fit=max" alt="Sample" />
          <CardContent>
            <Timestamp>12:30 PM - 20 May 2025</Timestamp>
            <DeleteIcon onClick={() => handleDelete('12:30 PM - 20 May 2025')} />
          </CardContent>
        </Card>
        <Card>
          <Image src="https://imtech.imt.fr/wp-content/uploads/2017/10/Visuel_Une_barrage.jpg" alt="Sample" />
          <CardContent>
            <Timestamp>10:15 AM - 19 May 2025</Timestamp>
            <DeleteIcon onClick={() => handleDelete('10:15 AM - 19 May 2025')} />
          </CardContent>
        </Card>
      </PageContainer>
    </div>
  );
}

export default Images;
