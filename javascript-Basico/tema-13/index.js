const nombre='Carlos';
console.log('- Una cadena de texto con tu Nombre');
console.log('RE:'+nombre);

const apellido='Garcia';
console.log('- Otra cadena de texto con tu Apellido');
console.log('RE:'+apellido);

const estudiante=`${nombre} ${apellido}`;
console.log('- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias');
console.log('RE:'+estudiante);

const estudianteMayus=estudiante.toUpperCase();
console.log('- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas');
console.log('RE:'+estudianteMayus);

const estudianteMinus=estudiante.toLowerCase();
console.log('- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas');
console.log('RE:'+estudianteMinus);

const nLetrasEstudoiante=estudiante.length;
console.log('- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios');
console.log('RE:'+nLetrasEstudoiante);

const primeraLetraNombre=nombre[0];
console.log('- Una variable que contenga la primera letra del Nombre');
console.log('RE:'+primeraLetraNombre);

const ultimaLetraApellido=apellido[apellido.length-1];
console.log('- Otra variable que contenga la última letra del Apellido');
console.log('RE:'+ultimaLetraApellido);

const estudianteSinEspacios=estudiante.replace(/ /g, '');
console.log('- Una cadena de texto que elimine los espacios de la variable "estudiante"');
console.log('RE:'+estudianteSinEspacios);

const nombreEnEstudiante=estudiante.includes(nombre);
console.log('- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"');
console.log(`RE:${nombreEnEstudiante}`);
