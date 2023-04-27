export class Empleado {
    // Propiedades de clase
    nombre: string = "";
    apellido: string = "";
    cargo: string = "";
    salario: number = 0;

    // constructor para inicializar las propiedades de clase
    constructor(nombre: string,apellido: string,cargo: string, salario: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }
};
