Summary React.js
================

https://rangle.github.io/react-training/react-summary/


Los componentes tienen un ciclo de vida, el ciclo:
--------------------------------------------------

  * Montado
  * Actualización
  * Desmontado
  * Manejo de errores (desde React 2016)


MONTADO
-------

constructor(){
   // Método llamado antes de que el componente sea montado (el componente aún no se ve)
   // Podemos iniciar el estado
   // Enlazar bind de eventos
   // Es el primer método que se llama al instanciar un componente.
  }

componentWillMount(){
  // Se ejecuta antes de montar el componente
  // Se podría usar para hacer un setState()
  // No hagas llamados a un API o suscripción de eventos
  // Método llamado inmediatamente antes de que el componente se vaya montar, (el componente aún no se ve)
  }

render(){
  // Contiene todos los elementos a renderizar
  // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
  // Contiene todos los elementso a renderizar (estructura del componente)
  }

componentDidMount(){
  // Solo se lanza una vez
  // Enlazar (bind) de eventos
  // Ideal para llamar a una API, hacer un setInterval, etc
  // Es el primer método que se llama al instanciar un componente.
  // Método llamado luego de montarse el componente (el compenente ya está en pantalla)
  }

ACTUALIZACIÓN
-------------

componentWillReceiveProps(){
  //Es llamado cuando el componente recibe nuevas propiedades.
  // Sirve para actualizar el estado con base a las nuevas propiedades
  }

shouldComponentUpdate(){
  //Idea para poner una condición y  si las propiedades que le llegaron anteriormente
  // eran las mismas que tenia retornar false para evitar re-renderear el componente
  }

componentWillUpdate(){
  //metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
  }

componentDidUpdate(){
  //Método llamado luego del re-render
  }

DESMONTADO
----------

componentWillUnmount(){
  //Método llamado antes de desmontar el componente
  }

MANEJO DE ERRORES
-----------------

componentDidCatch(){
  // Si ocurre algún error, lo capturo desde acá:
  // Si ocurre algún error al renderizar el componente este método es invocado
  // El manejo de errores solo ocurre en compoenetes hijos.
  }