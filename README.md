¿Por qué esta interfaz no menciona Express, NestJS ni memoria? 
Define qué debe hacer el sistema, no cómo.  Esto aísla la lógica de negocio de frameworks o tecnologías de almacenamiento para mantener la Arquitectura Limpia.

¿Qué palabra promete cumplir la interfaz? 
La palabra implements. Obliga a la clase a tener exactamente los métodos que dicta la interfaz para poder compilar vaya ocupas seguir el contrato y si no lo sigues pues te marca que te faltan metodos.

¿Por qué este archivo no sabe qué es una petición HTTP? 
Porque se dedica exclusivamente a las reglas del negocio. Manejar internet, rutas y códigos HTTP es trabajo exclusivo de los Controllers.

¿Por qué el Service se inyecta sin token y el repositorio sí? 
El Service es una clase que sobrevive al compilar a JavaScript, permitiendo a NestJS inyectarla automáticamente. El repositorio usa una interfaz, la cual desaparece en JavaScript, requiriendo un token (@Inject) para decirle a NestJS qué inyectar.

¿Qué prueba que agregar Miembros no rompió Inscripciones? 
la separación entre las clases miembros.module.ts y inscripciones.module.ts
