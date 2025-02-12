import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MappingForm from '../Mappings/MappingForm';

test('renders and submits form', () => {
    render(<MappingForm />);
    const fieldInput = screen.getByPlaceholderText('FIELD'); // Cambiado a mayúsculas
    const valueInput = screen.getByPlaceholderText('VALUE'); // Cambiado a mayúsculas
  
    fireEvent.change(fieldInput, { target: { value: 'name' } });
    fireEvent.change(valueInput, { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByText('SUBMIT'));
  
    expect(screen.getByDisplayValue('name')).toBeInTheDocument();
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
  });
  
