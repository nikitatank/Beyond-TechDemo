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
                        addNotes(xhr.responseText, email['email'])
                        displayNotes(JSON.parse(xhr.responseText))
                }
        }
        xhr.send(JSON.stringify(email))


}
function clearView(){
        const c_div = document.getElementById('home')
        c_div.remove()
}

function clearTable(){
        const x = document.getElementById('table')
        x.remove()
}

function addNotes(notes, em){

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
                var x = document.getElementById('note_text').value
                xhr.open('POST', 'http://localhost:3000/addnote', true)
                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')//application/x-www-form-urlencoded
                xhr.onreadystatechange = () => {
                        if(xhr.readyState === 4 && xhr.status === 200) {
                                console.log("response from server after addding note")
                                console.log(xhr.responseText)
                                clearTable()
                                displayNotes(JSON.parse(xhr.responseText))
                        }
                }
                var data = {
                        email:em,
                        note:x
                }

                xhr.send(JSON.stringify(data))



                //console.log(Object.keys(data))
        })


}
function displayNotes(nts) {
        const notes = nts[0].note
        const em = nts[0].email
        var tbl = document.createElement("table");
        tbl.setAttribute('id',"table")
        var tblBody = document.createElement("tbody");
        if (notes.length > 0){
        for(let i = 0; i<notes.length; i++) {
                console.log(notes[i])

                const row = document.createElement("tr");

                const nt = document.createElement("td");
                const note1 = document.createTextNode(notes[i]);
                //const index = i
                nt.appendChild(note1);
                row.appendChild(nt);

                const ntb = document.createElement("td");
                const btn = document.createElement("BUTTON");
                const btn_nm = document.createTextNode("X");
                btn.addEventListener('click', function () {
                        xhr.open('POST', 'http://localhost:3000/deletenote', true)
                        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
                        xhr.onreadystatechange = () => {
                                if(xhr.readyState === 4 && xhr.status === 200) {
                                        console.log("response from server after addding note")
                                        console.log(xhr.responseText)
                                        //displayNotes(JSON.parse(xhr.responseText))
                                }
                        }
                        console.log(notes[i])
                        var inx = {
                                index: i,
                                email: em
                        }
                        xhr.send(JSON.stringify(inx))

                        console.log(`delete the note at index ${i}`)
                })


                btn.appendChild(btn_nm);
                ntb.appendChild(btn)
                row.appendChild(ntb)


                tblBody.appendChild(row);

        }
        }
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl)

        console.log("clicked on add button")
       // console.log(nts[0].note)
}