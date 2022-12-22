<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ciclo de vida de proyectos

    p.mb-5(data-aos="fade-right") Todos los proyectos, incluyendo los de naturaleza tecnológica, se desarrollan en tres etapas: etapa inicial, etapa intermedia y etapa final, las cuales se explican a continuación:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-1.png', alt='Ciclo de vida de proyectos')
      .col-lg-7(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Etapa inicial")
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cac.me-3
                |Identificación de necesidades y requisitos.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Diagnóstico de las capacidades técnicas, administrativas y recursos tecnológicos y financieros de la organización.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Definición de las especificaciones y requisitos que incluye el proyecto.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Definición de metodología de trabajo y desarrollo.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Planteamiento de propuestas y criterios de aceptación.
          div(titulo="Etapa intermedia")
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cac.me-3
                |Desarrollo análisis y desarrollo de soluciones analítica.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Aceptación y entregas parciales de avances del proyecto.

          div(titulo="Etapa final")
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cac.me-3
                |Cierre del proyecto.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Acuerdos finales, presentación, transferencia, formación, etc.
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |Propiedad intelectual (en caso de que el producto requiera registros y protección de derechos de autor).
              li.mb-3
                i.fas.fa-circle.fa-xs.cac.me-3
                |
                b Evaluación y vigilancia: 
                |se refiere al seguimiento permanente entre las funcionalidades de la solución planteada y las necesidades de la organización y los clientes, es posible que se deban realizar correcciones para mejorar la calidad de la solución desplegada, así como el reentrenamiento de los implicados en el uso de estas soluciones al presentarse casos particulares.

    p.mb-5(data-aos="fade-right") Para que un proyecto se considere cerrado, debe cumplir unos requisitos mínimos, entre los principales se encuentran: el pago total del proyecto y la aceptación de todas las entregas; por lo general, estas entregas se realizan parcialmente a lo largo del desarrollo del proyecto y deben estar totalmente aprobadas y ajustadas a los criterios de aceptación.

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.cts(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Evaluación y vigilancia
              p Se refiere al seguimiento permanente entre las funcionalidades de la solución planteada y las necesidades de la organización y los clientes.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1-2.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.cts(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Calidad de la solución
              p Es posible que se deban realizar correcciones para mejorar la calidad de la solución desplegada, así como el reentrenamiento de los implicados en el uso de estas soluciones al presentarse casos particulares.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1-3.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.derecha.cts(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Revisiones constantes
              p Es importante, que los dueños de las soluciones tecnológicas, ya sean opciones comerciales 
                em Saas 
                |si es 
                em on-premise
                |, de mantener constante revisión sobre los cambios de las organizaciones, cambios de mercado, tendencias en las arquitecturas, normas, tecnologías, etc.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1-4.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.izquierda.cts(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Adaptación al cambio
              p Los proyectos deben estar diseñados para que se adapten con relativa facilidad a los cambios.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1-5.png')})`}")

    p.mb-5(data-aos="fade-right") En la siguiente infografía se observa cada una de las etapas y los respectivos elementos que intervienen en el ciclo de vida de un proyecto.

    .row.justify-content-center.mb-5
      .col-lg-8.col-sm-8
        .titulo-sexto.color-acento-contenido.mb-5(data-aos='fade-right')
          h5 Figura 1.
          br
          em Ciclo de vida de proyectos tecnológicos

        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Ciclo de vida de proyectos')
          .tarjeta.color-acento-botones.p-3(x="-1%" y="36%" numero="1")
            p.mb-1 Necesidades de la organización
            p.mb-1 Definición de requisitos
            p.mb-1 Metodología
            p Propuesta y criterios de aceptación
          .tarjeta.color-acento-botones.p-3(x="49%" y="98%" numero="2")
            p.mb-1 Análisis y desarrollo
            p Aceptación de entregas parciales
          .tarjeta.color-acento-botones.p-3(x="78%" y="-2%" numero="3")
            p.mb-1 Cierre del proyecto
            p.mb-1 Protección del producto (registros y derechos)
            p Evaluación y vigilancia

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-secundario.p-4(style="background-color: #E8E8E8")
          p.mb-0 A continuación, se abordan los criterios de aceptación de la solución. Para hablar de este concepto es necesario recordar un poco el concepto de metodologías ágiles para el desarrollo de proyectos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
