<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas para la gestión de proyectos y equipos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/img3-1.png" alt="Manos escribiendo en computador portátil")
      .col-lg-7(data-aos="fade-left")
        p Actualmente existen muchas herramientas muy prácticas para gestión de proyectos, en especial a la mirada del desarrollo de metodologías ágiles, si bien todo comienza con la idea del desarrollo de #[i software], también tienen la posibilidad de gestionar cualquier clase de proyecto.

        p En el caso específico del desarrollo de soluciones analíticas o de #[i software] existen unos roles y tareas específicas. Entre otras, las responsabilidades más comunes en el desarrollo son:
        .cajon.color-acento-contenido.p-4(style="background-color: rgba(77, 208, 225, .15)")(data-aos="flip-up")
          p.mb-0 Diseño y diagramación, mejorar flujos de trabajo y procesos, desarrollar códigos, documentar código, gestionar archivos, dar soporte técnico, gestionar seguridad, hacer pruebas y control, hacer seguimiento de productividad, planificar y coordinar proyectos, entre otros.

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Jira Software
    
    p Es una herramienta para la gestión de proyectos, presenta versatilidad para usarla en diversas metodologías de desarrollo; lleva trazabilidad y seguimiento de errores; ayuda a la gestión de requisitos, desarrollo y entregas.
    p.mb-5 Su licencia es gratuita para ciertas áreas y con algunas restricciones, las versiones más avanzadas son pagas. A diferencia de otras plataformas, no solicita método de pago, claro está, para usarlo en su versión gratuita.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p Jira Software, es una herramienta robusta que contiene plantillas predefinidas que se pueden usar para adaptar los proyectos propios, adicionalmente se conecta con otras herramientas de productividad para potencializar la integración de las usadas en los proyectos.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-2.svg" alt="Herramientas de productividad").mb-2
              figcaption Nota. Adaptada de atlassian.net (2022)
        .row
          .col-md-6.mb-4.mb-md-0
            h5.mb-4 Empezando proyecto
            p Cuando se crea una cuenta en Jira, a cada usuario se le asigna una dirección o dominio, haciendo que sea muy fácil de compartir y también ingresar, directamente, a los proyectos asociados.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-3.png" alt="Persona trabajando en computador portátil")
        .row
          .col-md-6.mb-4.mb-md-0
            p Conceptos de la herramienta Jira Software:
            ol
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | #[b Proyectos:] está conformado por varias actividades.

              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | #[b Incidencias:] término para referirse a las actividades que el equipo va a desempeñar. Un proyecto, por lo general, contiene muchas incidencias.

          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-4.svg" alt="Herramientas de productividad").mb-2
              figcaption Nota. Proyectos & instancias en Jira. tomada de EnevaSys (2020)
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Tipos de indicencias
            p Las incidencias son de tres tipos:
            ol
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | #[b Épicas:] son aquellas incidencias grandes que se componen de otras incidencias menores.

              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | #[b Historia:] es una incidencia que, por lo general, se podría generar una historia por cada #[i sprint], todo depende del método de trabajo.

              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | #[b Bug:] es un error no controlado por el sistema y hace que este no funcione de forma correcta.

          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-5.png" alt="Advertencia")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Principio de funcionalidad
            p El principio de funcionalidad es muy simple, básicamente hay tres columnas que indican el periodo o fase de ejecución de las incidencias; están las pendientes de ejecutar, las que están en periodo de ejecución y las entregadas. Si bien por defecto son tres columnas, podrían agregarse más, por ejemplo, en caso de proyectos tecnológicos se podría agregar una columna más que indique cuáles están en prueba y cuáles ya pasaron la prueba o lo que se necesite.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-6.svg" alt="Tablero principal de Jira").mb-2
              figcaption Nota. Adaptado de atlassian.net (2022).
        .row
          .col-md-6.mb-4.mb-md-0
            p Jira es una herramienta que se puede personalizar configurando diferentes tipos de incidencias, como tareas, errores, historias. Adicionalmente, existe el concepto de objetos épicos, que contienen varias incidencias.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-7.png" alt="Manos escribiendo en computador portátil")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es una aplicación que está diseñada para ser utilizada con equipos de trabajo, donde se establecen las incidencias y cuáles usuarios o miembros, tienen esta asignación.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-8.png" alt="Equipo de trabajo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Según su naturaleza, cada incidencia, solicita datos para una tarea normal; por ejemplo, las tarjetas solicitan un nombre de tarea. Se pueden añadir incidencias secundarias, vincular a través de enlaces a otras tareas, o una descripción, así como comentarios de cada participante de estas incidencias.
            p Estos campos son configurables y personalizables, según las necesidades y lo que se desea registrar o controlar.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-9.png" alt="Computador portátil")


              
    p(data-aos="fade-down").mb-5 Para una mejor comprensión del uso de herramientas para la gestión de proyectos de #[i software], se invita a ver el siguiente video, donde se explica un ejemplo de implementación de la metodología Scrum en la herramienta Jira:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Trello

    .row.justify-content-center.mb-5
      .col-lg-6.recuadroid3(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p.mb-0 Al igual que Jira, Trello es un programa destinado a la gestión y seguimiento de proyectos y equipos de trabajo, basado en tarjetas. Es un programa con facilidad de manejo para realizar el trabajo. Cuando se inicia la aplicación, se solicita un espacio de trabajo donde se albergan todos los proyectos a gestionar.

      .col-lg-4.col-sm-10.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")

        figure
          img(src="@/assets/curso/temas/tema3/img3-11.svg" alt="Interfaz de Trello").mb-2

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
      .row(titulo="Tablero de Trello")
        .col-md-7.mb-4.mb-md-0
          p Trello funciona basado en tableros o tarjetas. Es una herramienta sencilla, pero con una gran capacidad para la gestión de tareas y coordinación de equipos de trabajo.

          p Por defecto, cuenta con las tres columnas: “por hacer”, “en proceso” y “hecho” o finalizado, pero tiene la posibilidad de agregar más columnas, según la dinámica y las necesidades.

        .col-md-5.col-sm-10
          figure
            img(src="@/assets/curso/temas/tema3/img3-12.svg" alt="Tablero de Trello").mb-2
      
      .row(titulo="Tarjetas Trello")
        .col-md-7.mb-4.mb-md-0
          p Cuando se añade una tarjeta, esta presenta diversas opciones para registrar la actividad.
          p Como se muestra en la imagen siguiente, las tarjetas tienen todas las opciones necesarias para el registro, control y avance del proyecto, así como las responsabilidades y ejecución de los miembros del equipo.
        .col-md-5
          figure
            img(src="@/assets/curso/temas/tema3/img3-13.svg" alt="Tarjetas Trello").mb-2
      
      .row(titulo="Otras opciones")
        .col-md-7.mb-4.mb-md-0
          p Entre otras opciones, las tarjetas permiten adicionar o eliminar miembros de las tareas específicas, incluir listas de chequeo para ir controlando acciones o tareas más pequeñas, adicionar fechas para llevar control de tiempos, archivos adjuntos y muchas otras opciones.
        .col-md-5
          figure
            img(src="@/assets/curso/temas/tema3/img3-14.png" alt="Tablero de tareas")
      
      .row(titulo="Área de comentarios o registro de actividades")
        .col-md-7.mb-4.mb-md-0
          p Además, el área de comentarios o registro de actividades se emplea para que los miembros del equipo registren novedades, entregas, códigos o lo que se establezca documentar para mantener un historial completo sobre el avance y estado de la tarea que represente la tarjeta.
        .col-md-5
          figure
            img(src="@/assets/curso/temas/tema3/img3-15.svg" alt="Tablero de tareas")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/img3-16.svg" alt="Persona con tablet")
      .col-lg-7(data-aos="fade-left")
        p Trello ayuda a los equipos a sacar el trabajo adelante. Para conocer más sobre la herramienta de gestión de proyectos Trello, se recomienda visitar su página web oficial..
        a.anexo.mb-4.mb-lg-0(href="https://trello.com/es" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Trello.

    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-izq.mb-5
          .bloque-texto-a.bloque-texto-1.p-4
            .row.m-0.align-items-center.justify-content-between
              .col-lg-6
                .bloque-texto-a__texto.p-4
                  p Existen muchas otras herramientas para gestionar proyectos y que estos lleguen a feliz término, en este caso, es muy importante que los criterios de entrega cumplan con todas las pruebas y aprobaciones del negocio.
                  p.mb-0
                    b Entre otras, Azure DevOps es una de las herramientas pagas más usada, así como Monday.com.
              .col-lg-6.mb-4.mb-lg-3.p-4.order-sm-first.order-lg-last
                img(src='@/assets/curso/temas/tema3/img3-17.svg', alt='Pruebas')
              
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
