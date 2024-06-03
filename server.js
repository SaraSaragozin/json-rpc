const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// JSON-RPC handler
app.post('/rpc', (req, res) => {
    const { id, method, params } = req.body;

    if (method === 'add') {
        const result = params.reduce((a, b) => a + b, 0);
        res.json({ jsonrpc: '2.0', result, id });
    } else {
        res.json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id });
    }
});

app.listen(port, () => {
    console.log(`JSON-RPC server running at http://localhost:${port}`);
});
