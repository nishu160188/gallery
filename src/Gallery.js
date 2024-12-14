import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.shutterstock.com/v2/images/search', {
          params: {
            query: 'nature',
            per_page: 20,
          },
          headers: {
            Authorization: 'Bearer v2/bXY1UWJIWEJyeEJWc2R1TDRKSWRmRFJlNkxYTEM0ZUEvNDQ4MDUzMDAzL2N1c3RvbWVyLzQveUpEMUhZWUNsQmdabDZpRUtZcW82UWNTOURfbC1kaU1HQUk2VFVnSWZoT2NTOUJfOG95V0llUll0X01KeTk0NmllWC1hNkhPQVFCUG1vQmZjVmNValV0YkI5RG9hMlpPaWVDSkZyME1GUFZzZ0UxbktCXzMwU0EzaWZYd3N5ZzFwN1EzQVhOd1daLTlfNkdHZlVsc1J5MUk2NW1TenliQjc2SE8wTGtycWNZVm9NUERNZzR0QnZUSVFqVE5zRnlneG5sd09DX2w0QUJ4RjRPeW1Yd0dpZy9POU9CZFowcWlhRTdaNjRESUU2NDRR'
          }
        });
        setImages(response.data.data);
      } catch (error) {
        setError('Error fetching images');
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.assets.preview.url} alt={image.description} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
