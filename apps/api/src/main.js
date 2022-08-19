import * as express from 'express';
const multer = require('multer');
const upload = multer();
var cors = require('cors');
const {
  RekognitionClient,
  DetectLabelsCommand,
} = require('@aws-sdk/client-rekognition');

const client = new RekognitionClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.NX_ACCESS_KEY_ID,
    secretAccessKey: process.env.NX_SECRET_ACCESS_KEY,
  },
});

const app = express();
app.use(cors());
app.post('/api', upload.single('image'), async (req, res) => {
  const command = new DetectLabelsCommand({
    Image: {
      Bytes: Uint8Array.from(req.file.buffer),
    },
  });
  const data = await client.send(command);
  res.send({ labels: data.Labels.map((label) => label['Name']) });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
