// Se pretende realizar una aplicación para esta academia que gestione la información sobre las personas vinculadas con la misma, que se pueden clasificar en tres tipos: estudiantes, profesores y personal de servicio. A continuación, se detalla qué tipo de información debe gestionar esta aplicación:
// • Por cada persona, se debe conocer, al menos, su nombre y apellidos, su número de identificación y su estado civil.
// • Con respecto a los empleados, sean del tipo que sean, hay que saber su año de incorporación a la facultad y qué número de despacho tienen asignado.
// • En cuanto a los estudiantes, se requiere almacenar el curso en el que están matriculados.
// • Por lo que se refiere a los profesores, es necesario gestionar a qué departamento pertenecen (base de datos, java, php, ...).
// • Sobre el personal de servicio, hay que conocer a qué sección están asignados (biblioteca, decanato, secretaría, ...).
// El ejercicio consiste, en primer lugar, en definir la jerarquía de clases de esta aplicación. A continuación, debe programar las clases definidas en las que, además de los constructores, hay que desarrollar los métodos correspondientes a las siguientes acciones:
// • Cambio del estado civil de una persona.
// • Reasignación de despacho a un empleado.
// • Matriculación de un estudiante en un nuevo curso.

class Persona{
    constructor(name, lastName, id, civilSt){
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.civilSt = civilSt;
    }

    set estadoCivil(val){
        this.civilSt = val;
    }
}
    class Estudiante extends Persona{
        constructor(name, lastName, id, civilSt, course){
            super(name, lastName, id, civilSt);
            this.course = course
        }

        set nuevoCurso(val){
            this.course = val;
        }
    }
    class Empleado extends Persona{
        constructor(name, lastName, id, civilSt, enterYear, officeId){
            super(name, lastName, id, civilSt);
            this.enterYear = enterYear;
            this.officeId = officeId;
        }

        set asignarOficina(num){
            this.officeId = num;
        }
    }
        class Profesor extends Empleado{
            constructor(name, lastName, id, civilSt, enterYear, officeId, department){
                super(name, lastName, id, civilSt, enterYear, officeId);
                this.department = department;
            }
        }
        class PersonalNoDocente extends Empleado{
            constructor(name, lastName, id, civilSt, enterYear, officeId, area){
                super(name, lastName, id, civilSt, enterYear, officeId);
                this.area = area;
            }
        }

