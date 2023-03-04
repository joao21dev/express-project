import * as express from "express";
import * as bodyParser from "body-parser";

const loggerMiddleware = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  console.log(`${request.method} ${request.path}`);
  next();
};

const app = express();

app.use(loggerMiddleware);

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello world!");
});

console.log("app post", app.post);
console.log("app put", app.put);

app.post("/", (request, response) => {
  response.send(JSON.parse(request.body));
});

app.get("/hostInfo", (request, response) => {
  response.send({
    hostname: request.hostname,
    path: request.path,
    method: request.method,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
