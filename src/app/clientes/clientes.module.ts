import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DetalleComponent,
    ContenidoComponent,
    FormComponent
  ],
  exports:[
    DetalleComponent,
    ContenidoComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }