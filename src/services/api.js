const API_URL = 'http://localhost:3000/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error ${response.status}`);
  }

  return response.json();
}


export const vuelosAPI = {
  listar: () => request('/vuelos'),
  obtener: (id) => request(`/vuelos/${id}`),
  crear: (vuelo) =>
    request('/vuelos', { method: 'POST', body: JSON.stringify(vuelo) }),
  actualizar: (id, vuelo) =>
    request(`/vuelos/${id}`, { method: 'PUT', body: JSON.stringify(vuelo) }),
  eliminar: (id) => request(`/vuelos/${id}`, { method: 'DELETE' })
};


export const authAPI = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }),
  perfil: () => request('/auth/perfil')
};