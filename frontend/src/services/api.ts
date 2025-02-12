const API_URL = 'http://localhost:3000/api';

export const saveMapping = async (data: { field: string; value: string }) => {
  const response = await fetch(`${API_URL}/mappings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error saving mapping');
  return response.json();
};
