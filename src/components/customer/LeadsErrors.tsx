import React from 'react';

interface leadsErrorInterface {
  leadsErrors: any;
}

const LeadsErrors = ({ leadsErrors }: leadsErrorInterface) => {
  console.log('leadsErrors', leadsErrors);
  return <div>LeadsErrors</div>;
};

export default LeadsErrors;
