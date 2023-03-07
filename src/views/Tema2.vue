<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Criterios de aceptación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Existen varias metodologías que se alinean con el concepto de desarrollo ágil; este término se acuñó en el 2001 con un manifiesto publicado por diferentes profesionales del desarrollo de sistemas de la información y gestión tecnológica, sustentándose en que las metodologías tradicionales no están en línea con los requisitos y desarrollo de las organizaciones, pues requieren métodos más flexibles, enfocados a elementos más importantes que otros.
        b Para hablar sobre este concepto, se hace necesario recordar la noción de metodologías ágiles, para el desarrollo de proyectos.
      .col-lg-4.mb-sm-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Ciclo')

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 SCRUM

    p.mb-5 En el entorno actual es el más empleado por las empresas y su estrategia de desarrollo está basada en este modelo.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-2.png', alt='Tablero de tareas')
      .col-lg-8(data-aos="zoom-in")
         LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Reuniones con clientes") A diferencia de las metodologías tradicionales, se prefiere realizar la toma de requisitos de manera tradicional; a través de las reuniones con clientes, se expresa en qué consiste el requisito, sin que se aporten detalles minuciosos, y luego estimar el requisito, priorizarlo, y plasmarlo en historias de usuario.
          p.text-small(numero="2" titulo="Requisitos") Las metodologías habituales, proponen fijar los requisitos con un alto nivel de detalle al inicio del proyecto y, a partir de estos, se hace una estimación de los costos y la fecha de entrega.
          p.text-small(numero="3" titulo="Necesidades") Esto podría implicar fácilmente inconvenientes, pues con frecuencia los clientes no tienen claridad sobre sus necesidades y en las metodologías tradicionales. Un cambio a mitad del proyecto podría derivar en problemas y trabas que implican costos, ya sea de resultados finales o incrementos presupuestales.
          p.text-small(numero="4" titulo="Presupuesto") Las metodologías ágiles como, por ejemplo, el Scrum, proponen que, a partir de un presupuesto y unas fechas de entrega, se trabaja para implementar la funcionalidad más valiosa para el cliente en cada momento. Trabajando de esta manera, el alcance será flexible.


    p.mb-5 En la siguiente gráfica se puede observar una comparación entre paradigmas para el desarrollo de sistemas informáticos tradicionales y las metodologías ágiles.

    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Paradigmas de metodologías de desarrollo')

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Historias de usuario y criterios de aceptación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Rueda dentada')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Los criterios de aceptación se resumen en el cumplimiento del requisito o de la funcionalidad del sistema o proyecto. Hacen parte de la historia de usuario en la metodología Scrum.
        p.mb-0 Es la parte en que el cliente evalúa y se establece si el desarrollo de la parte del proyecto es o no, aceptada; proponer de manera correcta estos criterios, evita controversias en los proyectos y se dejan claros los alcances y las funcionalidades.

    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-10
        .titulo-tercero.mb-5(data-aos='fade-right')
          h3 Tarjeta de historia de usuario
        
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Historia de usuario').mb-2
          figcaption Nota. Adaptada de Menzinsky, López & Palacio (2018).

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Criterios de aceptación")
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Se deben redactar con frases concretas y que concluyan las historias del usuario.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Enriquecen la historia y hacen que las pruebas sean posibles.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Los resultados de las pruebas solo deben tener dos estados: correcto o incorrecto.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Se debe asegurar el entendimiento por parte de todo el equipo, para que exista unanimidad en la consideración de si es o no, aceptada y finalizada.
          .tarjeta.color-primario.p-4(titulo="Tipos de criterio")
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Condiciones:] cómo se reacciona frente a las opciones de comportamiento y ante situaciones que no se cumplen.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Funcionales:] lo que se espera ver o que se realice.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b No funcional:] accesibilidad, seguridad, performance, soporte, etc.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Usabilidad:] facilidad de uso, eficiencia, navegabilidad, errores, experiencia de usuario.

          .tarjeta.color-primario.p-4(titulo="Formato o plantillas")
            p Aunque el formato o las plantillas son variados, esto depende de los líderes o de la compañía, porque se deben reunir unos elementos mínimos:
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Cómo] [perfil]: ¿para quién desarrollamos esto?
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Quiere:] aquí se describe su intención, no las funciones que emplean. ¿Qué es lo que se está intentando lograr realmente?
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | #[b Para:] ¿cómo encaja su deseo inmediato de hacer algo en la perspectiva general? ¿Cuál es el beneficio general que se intenta lograr? ¿Cuál es el gran problema que debe resolverse?
      .col-lg-3.mb-sm-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2-6.png', alt='Reunión de trabajo')


   
</template>

<script>
export default {
  name: 'Tema2',
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
