import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
// connect();

app.get('/', (req, res) => {
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port} ⚡️`);
});