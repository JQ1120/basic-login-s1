let dbUsers=
[
    {
        username: "cheok",
        password: "password",
        name:   "cheok",
        email: "cheokjiaqing@gmail.com",
    },
    {
        username: "Ali",
        password: "123456",
        name: "Ali",
        email: "ali@gmail.com",
    },
    {
        username: "Muthu",
        password: "246810",
        name: "Muthu",
        email: "Muthu@gmail.com",
    },
    {
        username: "Peter",
        password: "Peter",
        name: "Peter",
        email: "peter@gmail.com",
    }
]

function login(username,password)
{
    console.log ("someone tried to login with",username,password)
    let matched = dbUsers.find (element => 
    element.username ==username)
    if (matched){
        if(matched.password ==password)
        {
            return matched
        }else {
            return "Password not matched"
        }
    }else{
        return "Username not found"
    }
}

function register(newusername,newpassword,newname,newemail){
    //TODO: Check if username exist
    let matched=dbUsers.find(element => element.username == newusername)
    if (matched){
        return "Username is unavailable. Please try again!"
    } else{
        dbUsers.push({
            username:newusername,
            password:newpassword,
            name:newname,
            email:newemail,
        })
    }
    
}
//try to login
//console.log(login("cheok","password"))
//console.log(login("cheok","12345"))
console.log(login ("utem","123456"))

console.log(register("utem","123456","utem","utem@gmail.com"))
console.log(login("utem","123456"))
console.log(register("utem","123456","utem","utem@gmail.com"))