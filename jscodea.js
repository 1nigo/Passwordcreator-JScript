
let pasword = []





function passcaller(){
    passmaker()

    pasword.push(passmaker())

    console.log(pasword);
}




function passmaker(){

let pass = "p";

let users = ['1', '2', '3', '4', '5', '6', '7', 
'8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u',
 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g','h', 'j',
'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',]

for(let z = 0; z <= 15; z++){
    let Rnum = Math.floor(Math.random()*users.length)
    pass = pass + users[Rnum]

}

return pass;


}

