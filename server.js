const express = require('express');
const path = require('path');
const app = express();

const isMobile = (req) => {
  const userAgent = req.headers['user-agent'] || '';
  return /mobile|android|iphone|ipad|ipod/i.test(userAgent);
};

app.use('/mobile',express.static(path.join(__dirname, 'mobile/build')));
app.use('/desktop',express.static(path.join(__dirname, 'desktop/build')));

app.get('*', (req, res) => {
  if (isMobile(req)) {
    res.sendFile(path.join(__dirname, 'mobile/build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'desktop/build', 'index.html'));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});