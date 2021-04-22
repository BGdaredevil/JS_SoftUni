function solve(input) {
  let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  //validate method
  if (validMethod.includes(input.method) == false) {
    throw new Error("Invalid request header: Invalid Method");
  }

  //validate uri
  let uriTest = /[^a-z0-9.]/gi;
  if (
    input.uri == "" ||
    uriTest.exec(input.uri) != null ||
    input.uri == undefined
  ) {
    if (input.uri != "*") {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  //validate version\
  if (validVersion.includes(input.version) == false) {
    throw new Error("Invalid request header: Invalid Version");
  }

  //validate message
  let msgTest = /[\<\>\\\&\'\"]/g;
  if (msgTest.exec(input.message) != null || input.message == undefined) {
    if (input.message != "") {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return input;
}

let tryWithThis = {
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
};
let thenWithThis = {
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
};

let lastlyWithThis = {
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
};

console.log(solve(tryWithThis));
console.log(solve(thenWithThis));
console.log(solve(lastlyWithThis));
