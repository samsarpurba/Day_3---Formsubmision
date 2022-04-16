function showData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phonenumber = document.getElementById("phonenumber").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("phonenumber").value=""
document.getElementById("subject").value=""
document.getElementById("message").value=""

if(name == ""){
    return alert("Nama tidak boleh kosong");
}else if(email ==""){
    return alert("Email wajib diisi");
}else if(phonenumber ==''){
    return alert("No Hp wajib disi");
}




let emailReceiver="samsarpurba@gmail.com"
let a =document.createElement('a');
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}, this is my phone ${phonenumber}`
a.click();
let dataObjek ={
    name,
    email,
    phonenumber,
    subject,
    message
}
console.table(dataObjek);
}