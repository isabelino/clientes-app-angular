import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../interface/cliente';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  clientes:Cliente[]=[];

  constructor(private servicio:ClienteService) { }

  ngOnInit(): void {
    this.servicio.getCliente().subscribe(
      resp => this.clientes=resp
    );
  }

}
