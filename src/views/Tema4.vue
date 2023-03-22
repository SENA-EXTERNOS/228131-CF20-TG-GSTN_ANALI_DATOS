<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Metodología en cascada

    .row.justify-content-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-1.svg', alt='Desarrollo en cascada')
      .col-lg-10(data-aos="fade-left")
        p.mb-0 El desarrollo en cascada es un proceso lineal caracterizado por dividirlo en fases sucesivas del proyecto. A diferencia de los modelos iterativos, cada fase se ejecuta solo una vez. Los resultados de cada paso sirven como hipótesis de partida para el siguiente paso.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.justify-content-center(titulo="Paso 1")
            .col-md-11.mb-4.mb-md-0
              p También denominada metodología Waterfall; el vector infográfico del modelo de cascada, se utiliza en ingeniería de #[i software] o procesos de desarrollo, para soluciones tecnológicas. Tiene seis pasos como metodología Agile o pensamiento de diseño para el sistema de aplicación Pro Vector.
          
          .row.justify-content-center(titulo="Paso 2")
            .col-md-11.mb-4.mb-md-0
              p Esta metodología fue, hace algún tiempo, el enfoque dominante que orientaba el ciclo de vida del proyecto y los procesos que seguían los equipos de desarrollo de 
                em software
                |.
          
          .row.justify-content-center(titulo="Paso 3")
            .col-md-11.mb-4.mb-md-0
              p Un modelo de desarrollo lineal que se desarrolla en secuencia estricta, cada fase del ciclo de vida de la metodología Waterfall comienza cuando termina la anterior.
      
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img4-2.svg', alt='Modelo en cascada')

    p.mb-5 En la siguiente imagen se describe cada una de las fases que se aplican en la metodología en cascada.

    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img4-3.svg', alt='Metodología en cascada')

    p.mb-5(data-aos="fade-right") A continuación, se explica, de forma amplia, cada una de las fases que intervienen en la metodología de cascada.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-4.png', alt='Persona con computador portátil')
      .col-lg-8(data-aos="zoom-in")
         LineaTiempoD.color-primario
          .row(numero="1" titulo="Análisis de requerimientos") 
            p La naturaleza lineal de la metodología Waterfall, otorga un significado adicional a esta primera etapa de su ciclo de vida. Todos los requisitos y características del producto de <em>software</em> final, deben reunirse en esta fase.
            p Una vez que se completa la etapa de análisis de los requisitos, el equipo de desarrollo de <em>software</em> o solución BI, debe tener toda la información necesaria y precisa, para completar el proyecto sin participación adicional, así sean otros, los profesionales que lo desarrollen.


          .row(numero="2" titulo="Diseño") 
            p Con frecuencia, la fase de diseño se divide en dos sub-fases: diseño lógico (o preliminar) y diseño físico (o detallado). La fase de diseño lógico o preliminar implica poner sobre la mesa todas las soluciones posibles y analizar sus fortalezas y debilidades dentro del contexto o problema a solucionar.
            p Una vez evaluadas las ideas y tomadas las decisiones a seguir, es en la fase de diseño físico, donde se documentan con detalle, las especificaciones concretas.

          .row(numero="3" titulo="Codificación / Desarrollo") 
            p La parte principal y con frecuencia la más duradera de los proyectos, es cuando los desarrolladores de #[i software] o soluciones BI, escriben el código real, que convierte las especificaciones detalladas, en la fase de diseño, en un sistema de #[i software] funcional.
          
          .row(numero="4" titulo="Pruebas y despliegue") 
            p Cuando la fase de implementación se ha completado, los testeadores de #[i software] o soluciones BI manuales (que pueden estar respaldados por herramientas de prueba automatizadas en proyectos de desarrollo de #[i software] modernos), deben asegurarse que cada componente del sistema de la solución #[i software], funcione según los planes, tanto de forma autónoma, como a través de cualquier dependencia.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.img4-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Las pruebas de #[i software] son una parte importante del proceso de desarrollo de #[i software]. Esta parte del proceso, tiene la capacidad de detectar errores lo más rápido posible.

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.ctc1.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/temas/tema4/img4-6.png', alt='Persona en computador portátil')
        h4.text-center
          em Tester
        p.text-center Los encargados de los #[i testers], utilizan la documentación creada en la fase de diseño, los actores o roles de usuario y los posibles escenarios de navegación del usuario, para ejecutar, tantos casos de prueba como sea posible, en un intento por descubrir cualquier error que deba corregirse antes del despliegue.

      .col-md.tarjeta.ctc2.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/temas/tema4/img4-7.png', alt='Computador portátil')
        h4.text-center Publicar 
          em software
        p.text-center Cuando el sistema de 
          em software 
          |o soluciones BI ha sido probado y aprobado para su despliegue, se debe realizar una copia desde el entorno de desarrollo de 
          em software 
          |y publicarla en el entorno de prueba en vivo desde el cual los usuarios puedan acceder a ella y utilizarla.
      .col-md.tarjeta.ctc1.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/temas/tema4/img4-8.png', alt='Persona en el computador')
        h4.text-center Equipo de implementación
        p.text-center Los miembros del equipo responsables de la implementación deben conocer las diferencias entre el desarrollo de 
          em software 
          |y los entornos de servidor en vivo y realizar los ajustes necesarios para que el 
          em software 
          |funcione de la misma manera en ambos.

    h3(data-aos="fade-right") Mantenimiento

    p.mb-5(data-aos="fade-right") En la fase de mantenimiento, el #[i software] está en uso y, ahora, el trabajo principal es el de mantenerlo disponible y funcionando sin problemas.

    .tarjeta.tarjeta--ltc.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Paso 1")
          .col-md-8.mb-4.mb-md-0
            h4 Corregir errores
            p En esta fase, también se debe corregir cualquier error, informado por los usuarios, que se haya pasado por alto durante la fase de prueba. Además, se podrán incluir pequeñas actualizaciones, en caso de ser detectadas en esta fase.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/img4-9.svg', alt='Error 404')
        
        .row(titulo="Paso 2")
          .col-md-8.mb-4.mb-md-0
            h4 Aplicación de las fases
            p Algunos apuntes o documentación sobre esta metodología pueden reducirse o resumirse a cinco o cuatro fases, sin embargo, todas de manera implícita tendrán los seis componentes mencionados.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/img4-10.svg', alt='Gráfico positivo')
        
        .row(titulo="Paso 3")
          .col-md-8.mb-4.mb-md-0
            h4 Planificación
            p Una de las características de esta metodología de cascada, pero que para muchos puede resultar una desventaja, es que no hay posibilidad de cambios o errores en cada fase, por lo que la planificación es una etapa muy importante. La calidad de trabajo inicial define en mayor medida el resultado final, un aspecto normal que se nota en casi todos los proyectos de cualquier índole.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/img4-11.svg', alt='Testing')
        
        .row(titulo="Paso 4")
          .col-md-8.mb-4.mb-md-0
            h4 Responsable del proyecto
            p La responsabilidad del director de proyecto es la de elaborar, de manera correcta, todos los requisitos y prever todas las preguntas del negocio o proceso, necesarias. Los requisitos deben ser lo más completos posible, pues el equipo trabaja con la investigación y el diseño en las etapas iniciales.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/img4-12.svg', alt='Director de proyecto')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-13.svg', alt='Método de cascada')
      .col-lg-7.col-sm-10.recuadroid(data-aos="fade-left")
        h4 Aplicar el método de cascada
        p Los directores de proyecto suelen recurrir al método de cascada cuando: hay una visión clara de lo que debería ser el producto final, si los requisitos o necesidades están claramente identificadas y es relativamente fácil y claro, documentarlas; o si se encuentran con requerimientos ambiguos, que deben resolverse y aclararse de manera coherente.
        b También es pertinente emplearlo cuando no se tiene posibilidad de cambiar el alcance del proyecto, una vez que ha comenzado.

    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-izq.mb-5
          .bloque-texto-a.bloque-texto-1.p-3
            .row.m-0.align-items-center.justify-content-between
              .col-lg-6
                .bloque-texto-a__texto.p-4
                  p.mb-0 Esta metodología, fue de las más usadas en proyectos de tecnología, hasta inicios del Siglo XXI, incluso cuando en el 2001 surgió el manifiesto de las metodologías ágiles y el método cascada se alineó con este concepto; pronto fue entrando en desuso, pues otras metodologías más flexibles y rápidas en su desarrollo, fueron tomando su lugar y, hoy en día, se posesionan como las dominantes.
              .col-lg-6.mb-4.mb-lg-3.p-4.order-sm-first.order-lg-last
                img(src='@/assets/curso/temas/tema4/img4-14.svg', alt='Pruebas')


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
