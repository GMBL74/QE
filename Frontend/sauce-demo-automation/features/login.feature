@login
Feature: Login en Sauce Demo
  Como un cliente de Sauce Demo
  Quiero poder iniciar sesión
  Para acceder a los productos de la tienda

  Scenario: Login exitoso con usuario estándar
    Given estoy en la página de login
    When ingreso las credenciales "standard_user" y "secret_sauce"
    Then debería ver la página de productos

  Scenario Outline: Login fallido - <caso>
    Given estoy en la página de login
    When ingreso el usuario <usuario> y la clave <clave>
    Then debería ver el mensaje de error "<mensaje>"

    Examples:
      | caso                  | usuario         | clave        | mensaje                                                                   |
      | usuario bloqueado     | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | credenciales inválidas| usuario_falso   | clave_falsa  | Epic sadface: Username and password do not match any user in this service |
