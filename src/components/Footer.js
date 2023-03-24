import React from 'react';

import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center bg-success">      
      <Card.Footer className="text-black p-2 fs-3">Realizado por Larisson Rivero</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;