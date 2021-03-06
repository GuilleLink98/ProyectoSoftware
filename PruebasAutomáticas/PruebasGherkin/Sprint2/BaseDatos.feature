Feature: Consultar a la base de datos


	Scenario: Se conecta exitosamente a la base de datos	

	Given: Para que haya conexion debe de existir una base de datos. 

	When: Se llena un campo de texto con el DPI del votante y luego se preciona un boton para que se 
	mande la solicitud a la base de datos. 

	Then: Retornara la informacion personal del votante.


	Scenario: No se conecta exitosamente a la base de datos	

	Given: No existe una base de datos o la informacion de la base de datos esta incorrecta.

	When: Se llena un campo de texto con el DPI del votante y luego se preciona un boton para que se 
	mande la solicitud a la base de datos. 

	Then: No retorna nada, por lo que se sale una alerta diciendo que no hay conexion a la base de datos.


	Scenario: Retorna datos correctos

	Given: Para que logre retornar datos debe de haber una conexion a la base de datos y que haya ingresado correctamente lo que se le pide. 

	When: Se llena un campo de texto con el numero de DPI del votante y luego se preciona un boton para que se 
	mande la solicitud a la base de datos.

	Then: Retornara la informacion personal del votante.


	Scenario: No retorna datos 

	Given: No existe una conexion a la base de datos o no se ingreso correctamente el DPI. 

	When: El DPI ingresado en el campo de texto no es valido.

	Then: No retorna nada, por lo que sale una alerta diciendo que el DPI no es valido.