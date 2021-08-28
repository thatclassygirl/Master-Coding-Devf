// Variable Declaration
let turned= document.getElementById("turn")
let content= document.getElementsByClassName("content")[0]
let login=document.getElementById("login")
let userMon=""
let username=document.getElementById("username")
let password=""
let error= document.getElementsByClassName("error-message")[0]
let saldo=document.getElementById("saldo")
let account=document.getElementById("account")
let music=document.getElementById("background")
let money=document.getElementById("moneyValue")
let showMoney=document.getElementById("add-content")
let substraction=document.getElementById("take-content")
let takeMoney=document.getElementById("moneyTake")
music.volume=0.15
music.loop=true

// CLASS POKEMON
class Pokemon{
    constructor(name,saldo, password){
        this.name=name;
        this.saldo=saldo;
        this.password=password;
    }

    _getSaldo(){
        return this.saldo;
    }

    _setSaldo(money){
        this.saldo+=money
    }

    _takeSaldo(money){
        this.saldo-=money
    }

    _getPassword(){
        return this.password;
    }
}

let pikachu = new Pokemon ("Pikachu", 200, "pikapi");
let charmander = new Pokemon ("Charmander", 290, "charm")
let squirtle = new Pokemon ("Squirtle", 67, "squero")

let users=[pikachu,charmander,squirtle]


// DOM MANIPULATION
function turnOn (){
    if(turned.style.backgroundColor!="white"){
        turned.style.color="green";
        turned.style.backgroundColor="white";
        content.style.display="block";
        music.play();
    }else{
        turned.style.color="white";
        turned.style.backgroundColor="#191716";
        content.style.display="none"
        login.style.display="none"
        account.style.display="none"
        music.pause();
    }
}

function getData(poke){
    content.style.display="none";
    login.style.display="block"
    userMon=poke.getElementsByClassName("poke-name")[0].textContent;
    username.textContent=userMon;
    console.log(userMon)
}

function check(){
    password=document.getElementById("password").value
    for(let i=0; i<users.length; i++){
        if(users[i].name==userMon){
            if(users[i].password==password){
                userMon=users[i]
                login.style.display="none"
                error.style.display="none";
                account.style.display="block"
                saldo.textContent=userMon.saldo;
            }else{
                error.style.display="block";
        }
    }
}
}

function getSaldo(){
    document.getElementById("heading").style.display="none"
    document.getElementsByClassName("options")[0].style.display="none"
    document.getElementById("check-saldo").style.display="block"
}

function goBack(){
    document.getElementsByClassName("options")[0].style.display="flex"
    document.getElementById("check-saldo").style.display="none"
    document.getElementById("heading").style.display="block"
    document.getElementById("add-money").style.display="none"
    document.getElementById("take-money").style.display="none"
    money.value =""
    showMoney.textContent=""
    moneyTake.value =""
    substraction.textContent=""
}

function ingresar(){
    document.getElementById("heading").style.display="none"
    document.getElementsByClassName("options")[0].style.display="none"
    document.getElementById("add-money").style.display="block"
}

function retirar(){
    document.getElementById("heading").style.display="none"
    document.getElementsByClassName("options")[0].style.display="none"
    document.getElementById("take-money").style.display="block"
}

function add(){
    let intMoney=parseInt(money.value)
    if (intMoney>0){
        let total= userMon._getSaldo()+intMoney
        if(total<=990){
            showMoney.textContent=`Se añadieron sus $${intMoney}. Su nuevo total es $${total}`
            userMon._setSaldo(intMoney)
            saldo.textContent=userMon._getSaldo()
            console.log(showMoney.textContent)
        }else{
            showMoney.textContent="Whoops. Si ingresas esa cantidad rebasas el limite permitido. Transacción Prohibida"
            console.log(showMoney.textContent)
        }
    }
}

function substract(){
    let intMoney=parseInt(moneyTake.value)
    if (intMoney>0){
        let total= userMon._getSaldo()-intMoney
        if(total>=10){
            substraction.textContent=`Se retiraron sus $${intMoney}. Su nuevo total es $${total}`
            userMon._takeSaldo(intMoney)
            saldo.textContent=userMon._getSaldo()
        }else{
            substraction.textContent="Whoops. Si ingresas esa cantidad rebasas el limite permitido. Transacción Prohibida"
        }
    }
}