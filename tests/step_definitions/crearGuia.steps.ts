import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled, Actor } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { CrearGuia } from '../../src/tasks/CrearGuia';
import { LastResponse } from '@serenity-js/rest';

let actor: Actor;
const payload = {
    identificacion: "890904713",
    divisionCliente: "00",
    idProceso: 100001,
    codigoPais: 170,
    valoracion: "200000",
    tipoCuenta: 3,
    contenido: "reloj",
    codigoProducto: "",
    nivelServicio: 22,
    detalle: [
        {
            pesoReal: 1,
            largo: 5,
            ancho: 5,
            alto: 3,
            unidades: 1,
            ubl: 0,
            referencia: "ref detalle"
        }
    ],
    datosRemitente: {
        identificacion: "1020304044",
        detalleRemitente: "Casa",
        tipoViaRemitente: "7",
        viaRemitente: "15",
        numeroRemitente: "53 48",
        codigoCiudadRemitente: "76001000",
        descripcionTipoViaRemitente: "Calle",
        direccionRemitente: "Calle 53 # 53 48",
        nombreRemitente: "Remitente Prueba",
        indicativoRemitente: "57",
        celularRemitente: "3007876543",
        correoRemitente: "pruebaremitente@coo.com"
    },
    datosDestinatario: {
        identificacion: "1254511109",
        detalleDestinatario: "Casa",
        tipoViaDestinatario: "5",
        viaDestinatario: "15",
        numeroDestinatario: "45 93",
        descripcionTipoViaDestinatario: "Calle",
        direccionDestinatario: "calle 45 93",
        codigoCiudadDestinatario: "76001000",
        nombreDestinatario: "Destinatario Prueba",
        indicativoDestinatario: "57",
        celularDestinatario: "3216549825",
        correoDestinatario: "pruebadestinatario@coor.com"
    },
    valorRecaudar: "38500",
    referenciaRecaudo: "ref recaudo prueba",
    tipoGuia: 1,
    referenciaGuia: "Ref guía",
    usuario: "prueba@coordinaora.com",
    fuente: "envios",
    observaciones: "prueba RCE"
};

Given('que soy un usuario autenticado', () => {
    actor = actorCalled('Usuario');
});

When('envío la solicitud para crear la guía', async () => {
    await actor.attemptsTo(
        // Se invoca la tarea pasando el payload
        CrearGuia(payload)
    );
});

Then('el sistema responde con un código HTTP {int}', async (statusCode: number) => {
    await actor.attemptsTo(
        Ensure.that(LastResponse.status(), equals(statusCode))
    );
});
