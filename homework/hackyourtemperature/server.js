import express from 'express';
import app from './app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`),
);
