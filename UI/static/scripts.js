var xhr = new window.XMLHttpRequest();

// function onSubmitEmailClick(){
//         var email = {
//                 email : document.getElementById('email').value
//         }
//         console.log(`data that we typed in html file is ${email}`)
//         xhr.open("POST", 'http://localhost:3000/email', true);
//         xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//         xhr.onreadystatechange = function (){
//                 if(xhr.readyState == 4 &&  xhr.status == 200){
//                         console.log(xhr.responseText)
//                 }
//                 //console.log(xhr.response)  // res.send respone.
//                // d = document.createElement("label, text, button ")
//                 //d.innerHTML()
//                 //mighht create a table and put notes thete
//         }
//        xhr.send(JSON.stringify(email))
//         //console.log(`data sending via http requst is ${da}`)
//         //document.getElementById("note").innerHTML = x;
//         // /email ->notes.html
//         //send post reqest to server that will pass data to scripts.js -> email
// //create button  and text
// }



function send () {
        var number = {
        value: document.getElementById('num').value
}
        console.log(number.value)
        var xhr = new window.XMLHttpRequest()
        xhr.open('POST', 'http://localhost:3000/num', true)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send(JSON.stringify(number))
}

function onButtonClickNote(){
        var x = document.getElementById("textInput").value;
        document.getElementById("note").innerHTML = x;
}


function pullDatafromDb() {

}