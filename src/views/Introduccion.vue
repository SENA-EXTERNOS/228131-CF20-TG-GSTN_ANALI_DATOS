<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/intro.svg', alt='Persona trabajando en portátil con audífonos')
      .col-lg-8.recuadroid(data-aos="fade-left")
        p Estimado aprendiz, reciba una cordial bienvenida a este recurso de enseñanza, orientado a la entrega de la solución informática. A lo largo de este desarrollo, se abordan temáticas como el ciclo de vida del proyecto, se estudian algunas herramientas para la gestión de proyectos y se finaliza con algunos consejos para la presentación del proyecto. Al terminar, estará en capacidad, entre otros aspectos, de entregar la solución informática, de acuerdo con el criterio técnico y los marcos de referencia.
        p.mb-1
          b Antes de empezar, se sugiere revisar el siguiente video para ampliar e identificar el contexto de aprendizaje. ¡Muchos éxitos, que tenga un aprendizaje significativo y memorable!

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
