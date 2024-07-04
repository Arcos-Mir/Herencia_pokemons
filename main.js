//1.Escribir la palabra reservada class seguida del nombre de la clase

class Pokemon {
    //2. Definir los atributos, esto de hace dentro del constructor
    constructor(name, attackLevel, lifeLevel, type = 'Básico') {
        this.name = name;
        this.attackLevel = attackLevel;
        this.lifeLevel = lifeLevel;
        this.type = type;
    }

    //Definir los métodos de la clase
    //Cuando defino un método necsito pensar en las siguientes cosas:
    // - La acción a realizar
    // - Que información necesito para realizar esa acción.
    attack(pokemon) {
        console.log('----------- COMENZANDO ATAQUE BÁSICO ------------');
        console.log(`${this.name} está atacando a ${pokemon.name}`);
        console.log(`El nivel de vida de ${pokemon.name} ANTES del ataque es: ${pokemon.lifeLevel}`);
        console.log(`Atacando con nivel de ataque ${this.attackLevel}`);
        pokemon.lifeLevel -= this.attackLevel;
        console.log(`El nivel de vida de ${pokemon.name} DESPUÉS del ataque es: ${pokemon.lifeLevel}`);

    }
}

//Para crear una clase hija (subclase) necesitamos conocedr la clase padre(superclase) y crear una relación entre ellas
//esta relación se crea con la pabra reservada 'extends'

class PokemonFire extends Pokemon {
    constructor(name, attackLevel, lifeLevel, type, colorfire) {
        //esto se hace con el método super() que debe recibir los parámetros del cosntructor de la clase padre
        super(name, attackLevel, lifeLevel, type); // esta palabra reservada manda a llamar al constructor de la clase padre
        this.colorfire = colorfire;
    }

    throwFire(pokemon) {
        console.log('----------- COMENZANDO ATAQUE ESPECIAL ------------');
        console.log(`${this.name} está atacando a ${pokemon.name}`);
        console.log(`El nivel de vida de ${pokemon.name} ANTES del ataque es: ${pokemon.lifeLevel}`);
        console.log(`Quemando con nivel de ataque ${this.attackLevel}`);
        pokemon.lifeLevel -= this.attackLevel * 1.5;
        console.log(`El nivel de vida de ${pokemon.name} DESPUÉS del ataque es: ${pokemon.lifeLevel}`);
    }
} 

class PokemonWater extends Pokemon {
    constructor(name, attackLevel,lifeLevel, type) {
        super(name, attackLevel, lifeLevel, type);
    }

    throwWater(pokemon) {
        console.log('----------- COMENZANDO ATAQUE ESPECIAL ------------');
        console.log(`${this.name} está atacando a ${pokemon.name}`);
        console.log(`El nivel de vida de ${pokemon.name} ANTES del ataque es: ${pokemon.lifeLevel}`);
        console.log(`Ahogando con nivel de ataque ${this.attackLevel} y disparo de tipo: ${this.type}`);
        pokemon.lifeLevel -= this.attackLevel * 1.7;
        console.log(`El nivel de vida de ${pokemon.name} DESPUÉS del ataque es: ${pokemon.lifeLevel}`);
    }
}

class PokemonIce extends Pokemon {
    constructor(name, attackLevel, lifeLevel, type) {
        super(name, attackLevel, lifeLevel, type);
    }

    throwIce(pokemon) {
        console.log('----------- COMENZANDO ATAQUE ESPECIAL ------------');
        console.log(`${this.name} está atacando a ${pokemon.name}`);
        console.log(`El nivel de vida de ${pokemon.name} ANTES del ataque es: ${pokemon.lifeLevel}`);
        console.log(`Congelando con nivel de ataque ${this.attackLevel} y disparo de tipo: ${this.type}`);
        pokemon.lifeLevel -= this.attackLevel * 1.9;
        console.log(`El nivel de vida de ${pokemon.name} DESPUÉS del ataque es: ${pokemon.lifeLevel}`);
    }
}

let pokemon1 = new Pokemon('Pikachu', 15, 200);
let pokemon2 = new PokemonFire('Charmander', 10, 300, 'Azul');

//pokemones nuevos
let pokemon3 = new PokemonWater('Squirtle', 14, 250, 'Disparo certero');
let pokemon4 = new PokemonIce('Kyurem', 18, 320, 'Ráfaga de hielo');

console.log(typeof pokemon3);
console.log(pokemon3);

/* let pokemon3Lit = {
    name: 'Squirtle',
    attackLevel: 14,
    lifeLevel: 250,
    shotType: 'Disparo certero'
}

let pokemon4Lit = {
    name: 'Kyurem',
    attackLevel: 18,
    lifeLevel: 320,
    shotType: 'Ráfaga de hielo'
} */

pokemon1.attack(pokemon2);
pokemon2.attack(pokemon1);
pokemon1.attack(pokemon2);
pokemon2.throwFire(pokemon1);


pokemon3.attack(pokemon4);
pokemon4.attack(pokemon3);
console.log("------- BATALLA SE INTENSIFICA -------");
pokemon3.throwWater(pokemon4);
pokemon4.throwIce(pokemon3);

function battlePokemon(pokemon3, pokemon4) {
    
    if(typeof pokemon3 == 'object') { 
        if(pokemon3.type == 'Disparo certero') {
            console.log(`Ahogando con nivel de ataque ${this.attackLevel} y disparo de tipo: Disparo Certero`);
        } else if (pokemon4.type == 'Ráfaga de hielo') {
            console.log(`Congelando con nivel de ataque ${this.attackLevel} y disparo de tipo: Ráfaga de hielo`);
        }else {
            console.log('Tipo básico');
        }
    } else {
        console.log('Lo que estás evaluando no es un objeto, vuelve a intentarlo!!!');
    }

}

battlePokemon();

//Ejercicio
//1. Crear otros 2 tipos de pokemon
//2. Agregar un atributo y método especifico a 
//   cada tipo de pokemon creado
//3. Crear una función que reciba como parámetros a 2 pokemones
//   Esta funcón debe detectar automáticamente el tipo de pokemon 
//   que recibe como prámetro y atacar con su ataque especial
//   pista: investigar la palabra reservada typeof