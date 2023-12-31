var http = require("http")

var courses = [
    {
        id : 1,
        name : "Html & css",
        Fees : 5000
    },
    {
        id : 2,
        name : "js & Es6",
        Fees : 10000
    },
    {
        id : 1,
        name : "MernStack",
        Fees : 50000
    }
]

http.createServer((request , response) => {
    console.log(" Got a request" , request.url);

    if(request.url === "/api/courses"){
        response.write(JSON.stringify(courses));
        response.end();

    }
    else if(request.url === "/api/users"){
        response.write(JSON.stringify(users));
        response.end();
    }
    else{
        response.write("<h1> hello world </h1>" + request.url );
        response.end();

    }
})
.listen(3000)