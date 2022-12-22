<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejoramiento continuo

    p.mb-5(data-aos="fade-down") Todas las cosas, productos, servicios y procesos pueden hacerse siempre mejor; llegar a un nivel de calidad alto es una de las metas de los proyectos, teniendo en cuenta obviamente los alcances y relación costo/beneficio.

    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          br
          em Ciclo de Deming
        figure
          img(src='@/assets/curso/temas/tema5/img5-1.svg', alt='Ciclo de Deming')
          figcaption Nota. Ciclo Deming o ciclo PHVA.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Paso 1")
            p Al igual que el principio de la mejora continua con el ciclo de 
              em Deming 
              |PHVA (Planear, Hacer, Verificar, Actuar), la mejora de resultados y cumplimiento de metas para el proyecto tecnológico está fundamentado en estos cuatro pasos; cualquier proceso, independientemente de su naturaleza, se puede organizar en un ciclo perfecto de cuatro etapas. 
              em Deming 
              |observó que una organización simple, pero de pasos concretos, era la llave para mejorar todas las partes de un proceso, (MarketerosLATAM, 2021).
          .tarjeta.color-primario.p-4(titulo="Paso 2")
            p Cuando se finaliza un proyecto de soluciones informáticas, la empresa responsable de la solución debe entrar en el ciclo permanente de 
              b verificación 
              |y a partir de los hallazgos, decidir actuar para planificar la intervención necesaria.
      .col-lg-4.mb-sm-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img5-2.png', alt='Persona con computador portátil')

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Acciones posteriores a la entrega del proyecto

    p.mb-5(data-aos="fade-left") En apartados anteriores se ha dejado claro que la construcción de 
      em software 
      |tiene un proceso de ciclo de vida único que requiere varias rondas de pruebas, actualizaciones y comentarios de los clientes. A continuación, se orientan las acciones posteriores que se deben tener en la entrega del proyecto.

    .tarjeta.tarjeta--ltc.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Corrección de errores")
          .col-md-6.mb-4.mb-md-0
            p Cuando un proyecto de soluciones analíticas es entregado, este ya debió pasar por las pruebas de rigor, sometiendo a los productos a testeos, superando pruebas y diversas situaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-3.svg', alt='Caja con idea')
        .row(titulo="<em>Insigth</em>")
          .col-md-6.mb-4.mb-md-0
            p Sin embargo, un 
              em insigth 
              |general es que la tecnología no es infalible y siempre están expuestos a riesgos y fallas. Incluso por ley de Murphy, “si algo puede salir mal, saldrá mal”; indicando que es probable que, en medio de la producción de la solución desplegada, se detecten errores, ya sean en los resultados de los cálculos o fallas de carga o incluso algún tipo de 
              em bug 
              |o bloqueo de la aplicación, entre otras fallas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-4.svg', alt='Persona trabajando en computador')
        .row(titulo="Entrega del producto")
          .col-md-6.mb-4.mb-md-0
            p Cuando se entrega un producto, por lo general hay términos de garantía que pueden reclamarse en un tiempo determinado; todo depende del tipo de acuerdos contractuales y convenios realizados previamente, se debe dejar claridad absoluta, pues un error no es que falta calcular una cifra, pues esto es claramente un requisito que el cliente no tuvo en cuenta al momento del desarrollo. Pero si reclama que los totales de un reporte no reflejan la realidad, sí debe entrar en revisión y corrección la aplicación específica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-5.svg', alt='Monetizar')
        .row(titulo="Actualizaciones")
          .col-md-6.mb-4.mb-md-0
            p Ya sea un desarrollo de 
              em software 
              |o solución analítica, es probable que a medida que el cliente o el área específica usa la herramienta, van surgiendo otras preguntas o necesidades que la solución recién entregada no responde.
            p Todo funciona bien y hace lo que se promete, sin embargo, pueden existir muchas razones por las cuales las soluciones deben estar siempre en verificación y actuación (revisión y actualización).
            ol
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |Nuevas preguntas para que los datos respondan.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |Indicadores nuevos que surjan a partir de gestión empresarial o gestión de calidad.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |Nuevas áreas que se involucran a los procesos.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |Nuevas herramientas tecnológicas que permitan mayor desempeño y presentación.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                |Nuevos procesos que se deseen integrar a la solución inicial, entre otros.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-6.svg', alt='Actualización')

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2  Acuerdos de nivel de servicio (
        em SLAs
        |)

    p.mb-5(data-aos="fade-left") El propósito del proceso de gestión de niveles de servicio es asegurar que los servicios actuales y planificados sean entregados de acuerdo con lo negociado, acordado, y dentro de los objetivos establecidos.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-7.svg', alt='Acuerdo')
      .col-lg-8(data-aos="zoom-in")
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Paso 1") Esto es facilitado a través de un ciclo constante de negociación, acordando, supervisando, reportando y revisando los objetivos del servicio y los logros que ya fueron proporcionados y será necesario tomar diferentes acciones para mejorar el nivel del servicio entregado, (Netec, 2021).
          p.text-small(numero="2" titulo="Paso 2") Todo el contexto de las soluciones entregadas, deben estar en el marco de los 
            em SLAs
            |, y deben ser muy específicas en relación con los alcances y servicios pactados.
          p.text-small(numero="3" titulo="Paso 3") Existe un marco metodológico para llevar a cabo la gestión de los 
            em SLAs
            |, pues estos pactos de servicio pueden ser flexibles; se deben llevar un seguimiento y un requisito nuevo, por ejemplo, entra en la gestión de 
            em SLA 
            |y este debe ser gestionado entre proveedor de desarrollo y el negocio, el cual puede ser pactado o no.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.cft2.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/img5-8.svg" alt="Lupa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Acuerdos de nivel de servicio (
                    em SLA
                    |)
                  p.text-small Para profundizar sobre este tema se sugiere acceder al enlace Web.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas" target="_blank" type="application/url")
                    span Enlace web
                    i.fas.fa-link

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
