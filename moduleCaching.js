class superHero{
    constructor(name){
        this.name = name
    }
    getname(){
        console.log(this.name);
    }
    setName(name){
        this.name = name;
    }
}

module.exports = new superHero("BatMan");