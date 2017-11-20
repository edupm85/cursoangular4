import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
    public titulo = 'Componente Empleados:';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorext: boolean;
    public color: string;
    public color_seleccionado: string;


    constructor() {
        this.empleado = new Empleado('Eduardo Pérez', 32, 'Informatico', false);
        this.trabajadores = [
            new Empleado('Javier Arteaga', 34, 'Informatico', true),
            new Empleado('Edgar Hernandez', 23, 'Informatico', true),
            new Empleado('Fran Perez', 26, 'Informatico', true),
        ];

        this.trabajadorext = true;
        this.color = '#3849fd';
        this.color_seleccionado = '#ccc';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit () {
        console.log(this.trabajadorext);
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajadorext = valor;
    }

    cambiarColor() {
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(this.color);
    }

    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }

}
