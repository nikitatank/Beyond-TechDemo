const xhr = new window.XMLHttpRequest();

function onSubmitEmailClick() {
        var email = {
        email: document.getElementById('email').value,
                note : []
}
        //var email = {email:document.getElementById('email').value}
        console.log(email)
        //var xhr = new window.XMLHttpRequest()
        xhr.open('POST', 'http://localhost:3000/email', true)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.onreadystatechange = () => {
                if(xhr.readyState === 4 && xhr.status === 200) {
                        console.log("response from server")
                        console.log(xhr.responseText)
                        clearView() //clear html and put emply div
                        displyNotes(xhr.responseText)
                }
        }
        xhr.send(JSON.stringify(email))


}
function clearView(){
        const c_div = document.getElementById('home')
        c_div.remove()
}


function displyNotes(notes){
        var note = document.createElement("INPUT");
        note.setAttribute("type", "text");
        note.setAttribute('id',"note_text")
        document.body.appendChild(note);


        var btn_add = document.createElement("BUTTON");
        btn_add.setAttribute('id',"add_note")
        var add = document.createTextNode("ADD");
        btn_add.appendChild(add);
        document.body.appendChild(btn_add);
        btn_add.addEventListener("click",function (){
                console.log(note.value)
        })

        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");


        const row = document.createElement("tr");

        const nt = document.createElement("td");
        const note1 = document.createTextNode("note_text");
        nt.appendChild(note1);
        row.appendChild(nt);

        const ntb = document.createElement("td");
        const btn = document.createElement("BUTTON");
        const btn_nm = document.createTextNode("X");
        btn.addEventListener('click',function (){
                console.log(notes.type)
        })
        //on click button of clear it should remove that note
        btn.appendChild(btn_nm);
        ntb.appendChild(btn)
        row.appendChild(ntb)


        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl)

}
function pullDatafromDb() {
        console.log("clicked on add buttn")
}