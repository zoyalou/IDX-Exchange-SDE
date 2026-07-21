const BASE_URL = '/api';

export async function fetchProperties(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/properties?${query}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch properties: ${response.status}`);
  }

  return response.json();
}

export async function fetchPropertyDetail(id) {
  const response = await fetch(`${BASE_URL}/properties/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch property: ${response.status}`);
  }

  return response.json();
}