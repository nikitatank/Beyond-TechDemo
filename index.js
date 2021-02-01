var xhr = new XMLHttpRequest();


function onSubmitEmailClick(){
        var x = document.getElementById("email").value;
        console.log(`data that we typed in html file is ${x}`)
        xhr.open("POST", 'http://localhost:3000/email', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send({email: x})
        xhr.onload = function (){
                console.log(xhr.response)  // res.send respone.


               // d = document.createElement("label, text, button ")
                //d.innerHTML()
                //mighht create a table and put notes thete
        }

        //document.getElementById("note").innerHTML = x;
        // /email ->notes.html
        //send post reqest to server that will pass data to app.js -> email
//create button  and text
}



function onButtonClickNote(){
        var x = document.getElementById("textInput").value;
        document.getElementById("note").innerHTML = x;
}


function pullDatafromDb() {

}