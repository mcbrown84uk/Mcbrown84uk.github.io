function LoadPage(){

    //test
    var body = document.body;

    body.appendChild(CreateDOM());


}

function CreateDOM(){
    var container = document.createElement("div");

    container.innerText = "Mike Does Stuff Here";

    return container;
}