//Las clases son plantillas para crear los objetos y lidiar con la herencia.
class Persona {
    constructor(name,lastname){
        this.name = name;
        this.lastname = lastname;
    }
    saludar() {
        console.log(`Hola soy ${this.name}, ${this.lastname}`);
        }
}
const person = new Persona('Jose Luis S.', 'M.Q´');
person.saludar();

// Declaración de Clase:
// - La declaración de una clase se inicia con la palabra clave `class`, seguida del nombre de la clase en mayúsculas.

// - El cuerpo de la clase contiene el constructor y los métodos de la clase.

// - El constructor se llama automáticamente cuando se crea una instancia de la clase. Debe usar `super()` en el constructor si la clase hereda de otra clase para llamar al constructor de la clase padre.

// 2. Constructor:
// - El constructor es un método especial llamado cuando se crea una instancia de la clase.

// - Dentro del constructor, puedes inicializar propiedades de la instancia utilizando `this`.

// - Debes llamar a `super()` en el constructor de una clase hija que hereda de otra clase para invocar el constructor de la clase padre.

// 3. `super`:
// - `super` se utiliza para llamar métodos de la clase padre, incluido el constructor de la clase padre. Esto es esencial si una clase hereda de otra.

// - Debes usar `super()` en el constructor de una clase hija antes de acceder a `this`. Esto asegura que `this` esté inicializado correctamente antes de su uso.

// 4. `this`:
// - `this` se refiere al objeto actual en el contexto de una clase o método.
// - Ten cuidado con el valor de `this` en funciones callback o métodos pasados como argumentos, ya que puede cambiar de contexto si no se usa correctamente.

// 5. Propiedades y Métodos de Clase:
// - Puedes definir propiedades y métodos de instancia dentro del cuerpo de la clase.

// - Las propiedades de instancia se definen en el constructor usando `this`.

// - Los métodos de instancia se definen sin la necesidad de la palabra clave `function`.

// 6. Métodos Estáticos:
// - Puedes definir métodos estáticos en una clase utilizando la palabra clave `static`. Estos métodos son invocados en la clase en sí, no en instancias de la clase.

// 7. Herencia:
// - Puedes crear una jerarquía de clases utilizando la herencia con la palabra clave `extends`. Las subclases heredan propiedades y métodos de la clase padre.

// - Utiliza `super` en el constructor de una subclase para llamar al constructor de la clase padre.

// 8. Getter y Setter:
// - Puedes definir métodos `get` y `set` para acceder y modificar propiedades de una instancia de clase de una manera controlada.

// 9. Encapsulación:
// - JavaScript no tiene un soporte de encapsulación real, pero puedes simularlo utilizando convenciones de nomenclatura (como `_nombrePropiedad`) para indicar que una propiedad o método no debe ser accedido directamente desde fuera de la clase.

// 10. Métodos de Clase Flecha:
// - Ten en cuenta que las funciones flecha (`=>`) no vinculan su propio valor `this`. Si usas una función flecha en un método de

// clase y esperas acceder a `this`, podría referirse al contexto circundante, no a la instancia de la clase.

// Es importante comprender estos conceptos para escribir código orientado a objetos efectivo en JavaScript utilizando clases ES6. Además, practicar y experimentar con ejemplos te ayudará a asimilar estos conceptos de manera más sólida.

// Resumiendo, las clases en ES6 simplifican la creación de objetos y promueven la organización y la reutilización del código. También permiten la herencia, lo que facilita la creación de jerarquías de objetos y la implementación de conceptos de POO en JavaScript de manera más clara y legible.