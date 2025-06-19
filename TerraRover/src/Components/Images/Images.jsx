import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer, Card, Image, CardContent, Timestamp, DeleteIcon } from './Images.styled';

function Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios.get('http://141.148.196.30:8080/api/v1/image/all')
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    
    const deleteApiUrl = `http://141.148.196.30:8080/api/v1/image/delete/${id}`; 

    axios.delete(deleteApiUrl)
      .then(() => {
       
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
        alert('Image deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting image:', error);
        alert('Failed to delete image. Please try again.');
      });
  };

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1rem', backgroundColor: '#f9f9f9', height: '100vh' }}>
      <PageContainer>
        {images.map((image) => (
          <Card key={image.id}>
            <Image src={image.image} alt={image.location} />
            <CardContent>
              <Timestamp>{image.date}</Timestamp>
              <DeleteIcon onClick={() => handleDelete(image.id)} />
            </CardContent>
          </Card>
        ))}
      </PageContainer>
    </div>
  );
}

export default Images;
