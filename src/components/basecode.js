import React from 'react';
import styled from 'styled-components';

// Create a styled component
const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Basecode() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Use the StyledButton component */}
      <StyledButton>Click Me</StyledButton>
    </div>
  );
}

export default Basecode;
