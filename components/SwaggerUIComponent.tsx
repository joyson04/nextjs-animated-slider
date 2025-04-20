// SwaggerUIComponent.tsx
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUIComponent: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <SwaggerUI url="http://localhost:3000/swagger.json" />
    </div>
  );
};

export default SwaggerUIComponent;
