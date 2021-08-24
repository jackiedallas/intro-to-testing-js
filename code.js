// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input){
//     if(input === "Alex") {
//         return "Hello, Alex!";
//     } else if(input === "Pat"){
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

function sayHello(string){
    if (string === true){
        return helloWorld();
    }
    if(string){
        return "Hello, " + string + "!";
    } else {
        return helloWorld();
    }

}

sayHello();