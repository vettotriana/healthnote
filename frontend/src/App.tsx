import React from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import MappingForm from './components/Mappings/MappingForm';
import './i18n';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MappingForm />
    </ErrorBoundary>
  );
};

export default App;
