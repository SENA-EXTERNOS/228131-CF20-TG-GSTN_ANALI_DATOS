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
        p Actualmente existen muchas herramientas muy prácticas para gestión de proyectos, en especial a la mirada del desarrollo de metodologías ágiles, si bien todo comienza con la idea del desarrollo de 
          em software
          |, también tienen la posibilidad de gestionar cualquier clase de proyecto.
        p En el caso específico del desarrollo de soluciones analíticas o de 
          em software 
          |existen unos roles y tareas específicas. Entre otras, las responsabilidades más comunes en el desarrollo son:

        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Diseño y diagramación, mejorar flujos de trabajo y procesos, desarrollar códigos, documentar código, gestionar archivos, dar soporte técnico, gestionar seguridad, hacer pruebas y control, hacer seguimiento de productividad, planificar y coordinar proyectos, entre otros.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 
        em Jira Software
    
    p Es una herramienta para la gestión de proyectos, presenta versatilidad para usarla en diversas metodologías de desarrollo; lleva trazabilidad y seguimiento de errores; ayuda a la gestión de requisitos, desarrollo y entregas.
    p.mb-5 Su licencia es gratuita para ciertas áreas y con algunas restricciones, las versiones más avanzadas son pagas. A diferencia de otras plataformas, no solicita método de pago, claro está, para usarlo en su versión gratuita.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p 
              em Jira software 
              |es una herramienta robusta que contiene plantillas predefinidas que se pueden usar para adaptar los proyectos propios, adicional se conecta con otras herramientas de productividad para potencializar la integración de herramientas usadas en los proyectos.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              br
              em Conexión a herramientas de productividad
            figure
              img(src="@/assets/curso/temas/tema3/img3-2.svg" alt="Herramientas de productividad").mb-2
              figcaption Nota. Adaptada de atlassian.net (2022)
        .row
          .col-md-6.mb-4.mb-md-0
            h5.mb-4 Empezando proyecto
            p Cuando se crea cuenta en 
              em Jira
              |, a cada usuario se le asigna una dirección o dominio, haciéndolo muy fácil de compartir e ingresar directamente a los proyectos asociados.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-3.png" alt="Persona trabajando en computador portátil")
        .row
          .col-md-6.mb-4.mb-md-0
            p Conceptos de la herramienta
            ol
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |
                b Proyectos: 
                |está conformado por varias actividades.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |
                b Incidencias: 
                |término para referirse a las actividades que el equipo va a desempeñar. Un proyecto, por lo general, contiene muchas incidencias.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5.
              br
              em Conceptos y funcionalidades básicas de Jira
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
                |
                b Épicas: 
                |son aquellas incidencias grandes que se componen de otras incidencias.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |
                b Historia: 
                |es una incidencia, por lo general se podría generar una historia por cada 
                em Sprint
                |, todo depende del método de trabajo.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |
                b 
                  em Bug: 
                |es un error no controlado por el sistema y hace que este no funciones de forma correcta.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-5.png" alt="Advertencia")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Principio de funcionalidad
            p El principio de funcionalidad es muy simple, básicamente hay tres columnas que indican el periodo o fase de ejecución de las incidencias; están las pendientes de ejecutar, las que están en periodo de ejecución y las entregadas. Si bien por defecto son tres columnas, podrían agregarse más, por ejemplo, en caso de proyectos tecnológicos se podría agregar una columna más que indique cuáles están en prueba y cuáles ya pasaron la prueba o lo que se necesite.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 6.
              br
              em Tablero principal de Jira
            figure
              img(src="@/assets/curso/temas/tema3/img3-6.svg" alt="Tablero principal de Jira").mb-2
              figcaption Nota. Adaptado de (atlassian.net, 2022)
        .row
          .col-md-6.mb-4.mb-md-0
            p 
              em Jira 
              |es una herramienta que se puede personalizar, configurando diferentes tipos de incidencias como tareas, errores, historias. Adicional existe el concepto de objetos épicos, que contienen varias incidencias.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-7.png" alt="Manos escribiendo en computador portátil")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es una aplicación que está diseñada para trabajar con equipos de trabajo, donde se asignan las incidencias y qué usuarios o miembros tienen asignación.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-8.png" alt="Equipo de trabajo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Cada incidencia, según su naturaleza solicita datos, para una tarea normal, las tarjetas solicitan un nombre de tarea, se puede añadir incidencias secundarias, vincular a través de enlace a otras tareas, una descripción, y los comentarios que cada participante de esta incidencia puede trabajar.
            p Estos campos son configurables y personalizables, según las necesidades y lo que se desea registrar o controlar.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img3-9.png" alt="Computador portátil")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/img3-10.svg" alt="Lupa")
      .col-lg-7.col-sm-10(data-aos="fade-left")
        p Para profundizar más en este tema, se invita a visitar el siguiente enlace Web.
        a.anexo.mb-4.mb-lg-0(href="https://www.atlassian.com/es/software/jira" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web. 
              em Jira software.
        p Y ver el video:
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=ViwOKhYx4kg" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web. 
              |Como usar 
              em JIRA 
              |desde 0 en equipos 
              em SCRUM.
              
    p(data-aos="fade-down").mb-5 Para una mejor comprensión del uso de herramientas para la gestión de proyectos de 
      em software
      |, se invita a ver el siguiente video, donde se explica un ejemplo de implementación de la metodología 
      em Scrum 
      |en la herramienta 
      em Jira
      |:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 
        em Trello

    .row.justify-content-center.mb-5
      .col-lg-6.recuadroid3(data-aos="fade-right")
        .cajon-b.color-primario.p-3
          p.mb-0 Al igual que 
            em Jira, Trello 
            |es un programa destinado a la gestión y seguimiento de proyectos y equipos de trabajo. Basado en tarjetas. Es un programa con facilidad de trabajo. Cuando se inicia la aplicación, se solicita un espacio de trabajo donde se albergan todos los proyectos a gestionar.
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          br
          em Interfaz de Trello
        figure
          img(src="@/assets/curso/temas/tema3/img3-11.svg" alt="Interfaz de Trello").mb-2
          figcaption Nota. La figura representa la interfaz de Trello. Adaptada de Trello ayuda a los equipos a sacar el trabajo adelante, (Trello, 2022).

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--curuba")
      .row(titulo="Tablero de <em>Trello</em>")
        .col-md-7.mb-4.mb-md-0
          p 
            em Trello 
            |funciona basado en 
            em Board 
            |o tarjetas. Es una herramienta sencilla, pero con gran capacidad para la gestión de tareas y coordinación de equipos de trabajo.
          p Por defecto, cuenta con las tres columnas: “por hacer”, “en proceso” y “hecho” o finalizado, pero tiene la posibilidad de agregar más columnas según la dinámica y necesidades.
        .col-md-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 8.
            br
            em Tablero de Trello
          figure
            img(src="@/assets/curso/temas/tema3/img3-12.svg" alt="Tablero de Trello").mb-2
            figcaption Nota. La figura muestra un ejemplo de tablero de seguimiento de proyecto en Trello.
      .row(titulo="Tarjetas <em>Trello</em>")
        .col-md-7.mb-4.mb-md-0
          p Cuando se añade una tarjeta, esta presenta diversas opciones para registrar la actividad.
          p Como se muestra en la imagen siguiente, las tarjetas tienen todas las opciones necesarias para el registro, control y avance del proyecto, así como las responsabilidades y ejecución de los miembros del equipo.
        .col-md-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9.
            br
            em Tarjetas Trello
          figure
            img(src="@/assets/curso/temas/tema3/img3-13.svg" alt="Tarjetas Trello").mb-2
            figcaption Nota. La figura muestra un ejemplo de tarjeta.
      .row(titulo="Otras opciones")
        .col-md-7.mb-4.mb-md-0
          p Entre otras opciones, las tarjetas permiten agregar o quitar miembros de las tareas específicas, permite incluir listas de chequeo para ir controlando acciones o tareas más pequeñas, adicionar fechas para llevar control de tiempos, archivos adjuntos y otras opciones.
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
        p 
          em Trello 
          |ayuda a los equipos a sacar el trabajo adelante. Para conocer más sobre la herramienta de gestión de proyectos 
          em Trello
          |, se recomienda visitar su página web oficial.
        a.anexo.mb-4.mb-lg-0(href="https://trello.com/es" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web. 
              em Trello.
        p Así mismo, para conocer más sobre los beneficios de 
          em Trello 
          |se sugiere ver el video tutorial: 
        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/sZd7uUPigk8" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web. 
              em Trello 
              |actualizado 2022 | español | Guía para organizar ideas, proyectos y tareas de Educa - TIC (2021).

    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-izq.mb-5
          .bloque-texto-a.bloque-texto-1.p-4
            .row.m-0.align-items-center.justify-content-between
              .col-lg-6
                .bloque-texto-a__texto.p-4
                  p Existen muchas otras herramientas para gestionar proyectos y que estos lleguen a feliz término, en este caso, es muy importante que los criterios de entrega cumplan con todas las pruebas y aprobaciones del negocio.
                  p.mb-0
                    b Entre otras, Azure DevOps es una de las herramientas paga más usada, así como Monday.com
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
