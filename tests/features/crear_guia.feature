Feature: Creación de Guía con Servicio "Recaudo Contra Entrega"

  Como usuario del sistema de gestión de envíos
  Quiero crear una guía utilizando el servicio "Recaudo Contra Entrega"
  Para que se almacenen y validen correctamente los datos requeridos y se facilite la gestión de envíos

  Background:
    Given que soy un usuario autenticado

  Scenario: Creación exitosa de guía con datos válidos
    And dispongo de una "Referencia de recaudo" válida y un "Valor a recaudar" entre $1 y $16.000.000
    When envío una solicitud POST al endpoint de creación de guías con todos los datos requeridos
    Then el sistema responde con un código HTTP 200
    And la guía se almacena correctamente en el sistema

  Scenario: Error al exceder el límite de caracteres en "Referencia de recaudo"
    And tengo una "Referencia de recaudo" que excede el límite máximo de caracteres permitidos
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 400
    And muestra el mensaje de error "La referencia excede el límite permitido"

  Scenario: Error por valor a recaudar fuera del rango permitido
    And dispongo de un "Valor a recaudar" menor a $1 o mayor a $16.000.000
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 400
    And muestra un mensaje de error indicando que el valor debe estar entre $1 y $16.000.000

  Scenario: Error por campos obligatorios vacíos
    And dejo vacíos los campos "Referencia de recaudo" o "Valor a recaudar"
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 400
    And muestra un mensaje de error indicando que dichos campos son obligatorios

  Scenario: Creación de guía con valores límite permitidos
    And dispongo de un "Valor a recaudar" igual a $1 o $16.000.000
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 200
    And la guía se almacena correctamente en el sistema

  Scenario: Creación de guía con datos opcionales omitidos
    And envío la solicitud sin algunos campos opcionales (por ejemplo, "codigoProducto")
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 200
    And la guía se almacena correctamente utilizando valores por defecto para los campos omitidos

  Scenario: Verificación del manejo de caracteres especiales permitidos
    And tengo una "Referencia de recaudo" que contiene caracteres especiales permitidos (por ejemplo, !, @, #, $)
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 200

  Scenario: Verificación del manejo de caracteres especiales no permitidos
    And tengo una "Referencia de recaudo" que contiene caracteres especiales no permitidos (por ejemplo, %, ^, &)
    When envío una solicitud POST al endpoint de creación de guías
    Then el sistema responde con un código HTTP 400

