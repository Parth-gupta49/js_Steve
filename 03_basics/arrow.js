const user = {
    username : "steve",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}


// console.log(this);

user.welcomeMessage()