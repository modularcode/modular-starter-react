const path = require('path');
const express = require('express');

const router = express.Router();

router.get("/*", function(req, res) {
  return res.set('Content-Type', 'text/html')
    .sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
});

module.exports = router;
