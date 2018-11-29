//fetch is asynchronous already so, we dont have to set true or false;
//fetch does the GET and POST
// search for the content-type in your GET API, it is important (inspect your HTML)


fetch('api')
.then(myResponse=> myResponse.json())
.then(theOject=>{

console.log(myObject[0].text);





})


let init =new Object;
init = {
    method: 'POST',
    headers: {
            "Content-Type" : "application/json"
        }
    },
    body: JSON.stringify(`name=${myVariable}`)
};

fetch('api',init)
.then(response => console.log(response.json()))
.then(myres=>console.log(myres))




