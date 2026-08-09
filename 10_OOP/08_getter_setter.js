//Getter - Setter
//both have to use together
//to make getter setter => name should be same as property for get set methods

class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(e){
        this._email = e;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}neha`
    }//when someone tries to get value it make chnges automaticlly
    
    set password(value){
        this._password = value.toUpperCase()
    }
}//if we use same constructor this.password val it becomes stack overflow so change in both get set

const user1 = new user("neha@gamil.com", "123abc")
console.log(user1.password);
console.log(user1.email);
