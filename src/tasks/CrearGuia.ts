import { Actor, Task } from '@serenity-js/core'; 
import { CallAnApi, PostRequest } from '@serenity-js/rest'; 
 
export class CrearGuia implements Task { 
  static conDatos(datos: object) { 
    return new CrearGuia(datos); 
  } 
 
  constructor(private datos: object) {} 
 
  performAs(actor: Actor): Promise<void> { 
    return actor.attemptsTo( 
      CallAnApi.as(actor).post('/guias/cm-guias-ms/guia', this.datos) 
    ); 
  } 
}





