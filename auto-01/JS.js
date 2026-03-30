User = {};
User.name = "John";
User.age = 30;
User.State = "Happy";
console.log(User);

User.name = "Daniel"
User.age = 15
console.log(User)
delete User.name
console.log(User)
// outro exercicio

Scredule = {}

function IsEmpty(Objeto){
    for (let c in Objeto){
        return "O objeto analisado é vazio";
    }
    return `O objeto analisado contém algo dentro no caso `;
}
console.log(IsEmpty(Scredule))   
console.log(IsEmpty(User)) 