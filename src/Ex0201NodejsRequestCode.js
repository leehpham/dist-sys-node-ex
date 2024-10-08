const fetch = require("node-fetch");

(async () => {
  const req = await fetch("http://localhost:3002/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `nodejs/${process.version}`,
      Accept: "application/json",
    },
    body: JSON.stringify({
      foo: "bar",
    }),
  });

  const payload = await req.json();
  console.log(payload);
})();

// The HTTP request that was generated by the previous node application.
/*
POST /data HTTP/1.1               # The request line
Content-Type: application/json    # Header/value pairs, separated by colons.
User-Agent: nodejs/v20.16.0
Accept: application/json
Content-Length: 13
Accept-Encoding: gzip, deflate
Connection: close
Host: localhost:3002

{"foo":"bar"}                     # 2 new lines then the (optional) request body.
 */

// The corresponding HTTP response.
/*
HTTP/1.1 403 Forbidden                          # The response line.
Server: nginx/1.16.0                            # Header/value pairs, separated by colons.
Date: Tue, 29 Oct 2019 15:29:31 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 33
Connection: keep-alive
Cache-Control: no-cache
Vary: accept-encoding

{"error":"must_be_authenticated"}               # 2 new lines then the response body (also optional).
 */
