// var count = 1;
// let a = function (){
//     console.log(count++);
// }
// let timer = setInterval(a,1000);
// setTimeout(function(){
//     clearInterval(timer);
// },5500);

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(contacts, index){
    if (contacts instanceof Array){
        return contacts[index];
    }else{
        return "Invalid input";
    }

}

function showAllContacts(contacts){
    if (contacts instanceof Array){
        return contacts;
    }else{
        return "Invalid input";
    }
}

function addNewContact(contacts, name, phone, number){
    if (name != "" && phone != "" && number != ""){
    let newContact = {
        name: name,
        phone: phone,
        email: number
    };
    contacts.push(newContact);
    }else{
        return "Data not entered";
    }
}

//check if the function works

console.log(showContact(contacts, 1));
console.log(showAllContacts(contacts));
addNewContact(contacts, "John Doe", "1234567", "123");
console.log(showAllContacts(contacts));