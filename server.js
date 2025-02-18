import http from "http";
import router from "./router/index.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })

    const responseText = router[req.url] || `Route not found`;

    res.end(responseText);
})

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
})