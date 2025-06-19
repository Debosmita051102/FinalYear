import styled from 'styled-components';
import { Trash } from 'lucide-react'; // Importing an icon from lucide-react

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 100vw;
  height: 70vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color:black
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: calc(100% - 60px);
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Timestamp = styled.p`
  font-size: 0.9rem;
  color: #555;
`;


export const DeleteIcon = styled(Trash)`
  width: 20px;
  height: 20px;
  color: #ff0000;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #cc0000;
  }
`;
