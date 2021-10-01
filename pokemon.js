/* Nombre de la prier letra de la clase debe ir en mayúsula */
class Pokemon {

    name = '';
    type = '';
    evolutions = [];



    /* Inicializa valores de objeto */
    constructor(name, type, evolutions){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;

    }

    attack(){
        return `${this.name}, está atacando`;
    }

    /* Asigna un valor por defecto---Le dice si va a evolucionar o no */
    evolve(evolution = 0){

        //Valida que la opción exista y sino tendra valor vacío
        const EVOLVE =this.evolutions[evolution] || '';
        let messaje = 'No puede evolucionar';

        if(EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;

        }

        return message;

    }

}

// Creamos las instancias mostradas en el diagrama

// Creando instancia para charmander
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);

// Creando instancia para Squirtle
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

/*
    Para llamar a un atributo o metodo de la cual quiera de las 
    instancias creadas, se utilizan la sintaxis.
    [Nombre de la instancia].[Nombre del método](); 
    [Nombre de la instancia].[Nombre del atributo]; 
*/

// Charmander
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

// output Charmander
// Charmander es de tipo Fire
// Charmander, esta atacando
// Charmander esta evolucionando a Charmeleon

// Squirtle
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));

// output Squirtle
// Squirtle es de tipo Water
// Squirtle, esta atacando
// Squirtle esta evolucionando a Wartortle