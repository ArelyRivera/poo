/* Encapsulamiento: sus tributos internos no tienen que ser accesibles desde afuera 
 #indica que los atributos sólo son accesibles en la misma clase*/

 /* Nombre de la prier letra de la clase debe ir en mayúsula */
 class Pokemon {
    /*
         Gracias a las nuevas especificaciones de JavaScript podemos
         utilizar el "#" para indicar que un atributo o método es privado,
         evitando el acceso desde fuera de la clase.
     */
     #name = ""; 
     #type = ""
     #evolutions = [];

    /*
         Desde el constructor podemos inicializar los atributos
         de la clase Pokémon.
     */
     constructor(name, type, evolutions) {
         // Se utilizan los métodos propios de la clase 
         // para modificar sus atributos. 
         this.#name = name;
         this.#type = type;
         this.#evolutions = evolutions;
     }

    /*
         En JavaScript podemos utilizar la propiedad llamada "set"
         la cual permite definir un método que solo recibe un parámetro
         y nunca tiene retorno, en este ejemplo nos permite modificar 
         los atributos de la clase.
     */
     set name(value) {
        this.#name = value;
     }

    set type(value) {
        this.#type = value;
    }

    set evolutions(value) {
        this.#evolutions = value;
    }

    /*
        En JavaScript podemos utilizar la propiedad llamada "get" 
        la cual nos permite definir un método que no recibe parámetros
        y siempre tiene retorno, en este ejemplo nos permite consultar 
        los atributos de la clase.
     */
     get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }

    /*
        Listado de métodos propios de la clase Pokémon
    */

    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";
        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
     }
}
// Creando instancia para charmander
const Charmander = new Pokemon("charmander", "Fire", ["Charmeleon", "Charizar"]);
/*
    Consultamos el nuevo nombre del Pokémon utilizando uno
    de los métodos declarados con get.
*/
console.log(`Mi nombre es ${Charmander.name}`);
// Salida actual
// Mi nuevo nombre es Charmander

/*
    Cambiaremos el nombre del Pokémon utilizando uno 
    de los métodos declarados con set.
*/
Charmander.name = "Charmander";

/*
    Consultamos el nuevo nombre del Pokémon utilizando uno
    de los métodos declarados con get.
*/
console.log(`Mi nuevo nombre es ${Charmander.name}`);

// Nueva salida
// Mi nuevo nombre es Charmander

/*
    ❌ Si tratáramos de consultar alguno de los atributos
    sin utilizar los métodos de la Clase conseguiríamos
    un error.
*/
console.log(`Esto mostrara un error ${Charmander.#name}`);
// Error
// Private field '#name' must be declared in an enclosing class