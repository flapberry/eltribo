import axios from 'axios';

export const bkend = axios.create({
  baseURL: 'http://localhost:3000/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const db = axios.create({
  baseURL: 'http://localhost:3000/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});