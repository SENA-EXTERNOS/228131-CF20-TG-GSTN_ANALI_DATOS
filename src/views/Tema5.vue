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
        h3.text-center Ciclo Deming o ciclo PHVA

        figure
          img(src='@/assets/curso/temas/tema5/img5-1.svg', alt='Ciclo de Deming')

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Paso 1")
            p Al igual que el principio de la mejora continua, con el ciclo Deming PHVA (Planear, Hacer, Verificar, Actuar), la mejora de resultados y cumplimiento de metas para el proyecto tecnológico, están fundamentados en estos cuatro pasos; cualquier proceso, independientemente de su naturaleza, se puede organizar en un ciclo perfecto de cuatro etapas. Deming observó que una organización simple, pero con pasos concretos, era la llave para mejorar todas las partes de un proceso. (MarketerosLATAM, 2021)

          .tarjeta.color-primario.p-4(titulo="Paso 2")
            p Cuando se finaliza un proyecto de soluciones informáticas, la empresa responsable de la solución, debe entrar en el ciclo permanente de #[b verificación] y, a partir de los hallazgos, decidir actuar para planificar la intervención necesaria.

      .col-lg-4.mb-sm-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img5-2.png', alt='Persona con computador portátil')

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Acciones posteriores a la entrega del proyecto

    p.mb-5(data-aos="fade-left") En apartados anteriores se ha dejado claro que la construcción de 
      em software 
      |tiene un proceso de ciclo de vida único que requiere varias rondas de pruebas, actualizaciones y comentarios de los clientes. A continuación, se orientan las acciones posteriores que se deben tener en la entrega del proyecto.

    .tarjeta.tarjeta--ltc.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Corrección de errores")
          .col-md-6.mb-4.mb-md-0
            p Cuando un proyecto de soluciones analíticas es entregado, ya debió haber pasado por las pruebas de rigor, sometiendo los productos a testeos, superando pruebas y diversas situaciones que se presentaran.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-3.svg', alt='Caja con idea')
        
        .row(titulo="<Insigth")
          .col-md-6.mb-4.mb-md-0
            p Un insight general se refiere a que la tecnología no es infalible y siempre está expuesta a riesgos y fallas. Incluso por ley de Murphy “si algo puede salir mal, saldrá mal”, indicando que es probable que, en medio de la producción de la solución desplegada, se detecten errores, ya sea en los resultados de los cálculos o fallas de carga o, incluso, algún tipo de bug o bloqueo de la aplicación, entre otras fallas posibles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-4.svg', alt='Persona trabajando en computador')
        
        .row(titulo="Entrega del producto")
          .col-md-6.mb-4.mb-md-0
            p Cuando se entrega un producto, por lo general hay términos de garantía que pueden reclamarse en un tiempo determinado; todo depende del tipo de acuerdos contractuales y convenios realizados previamente; se debe dejar claridad absoluta en errores como la falta de cálculo en las cifras, que no son permitidos en ese momento. Sin embargo, si se reclama que los totales de un reporte no reflejan la realidad, sí se debe entrar en revisión y corrección de la aplicación específica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-5.svg', alt='Monetizar')
        
        .row(titulo="Actualizaciones")
          .col-md-6.mb-4.mb-md-0
            p Sea un desarrollo de #[i software] o una solución analítica, es probable que, a medida que el cliente o el área específica use la herramienta, vayan surgiendo otras preguntas o necesidades, que la solución recién entregada no responde.
            p Todo funciona bien y se hace lo que se promete; sin embargo, pueden existir muchas razones por las cuales las soluciones deben estar siempre en verificación y actualización (revisión y actualización).
            ol
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | Nuevas preguntas para que los datos respondan.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | Indicadores nuevos que surjan a partir de gestión empresarial o gestión de calidad.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | Nuevas áreas que se involucran a los procesos.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | Nuevas herramientas tecnológicas que permitan mayor desempeño y presentación.
              li.mb-3 
                i.fas.fa-circle.cst.me-3
                | Nuevos procesos que se deseen integrar a la solución inicial, entre otros.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5-6.svg', alt='Actualización')

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Acuerdos de nivel de servicio (SLA)

    p.mb-5(data-aos="fade-left") El propósito del proceso de gestión de niveles de servicio es asegurar que los servicios actuales y planificados sean entregados de acuerdo con lo negociado, acordado, y dentro de los objetivos establecidos.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-7.svg', alt='Acuerdo')
      .col-lg-8(data-aos="zoom-in")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Paso 1") 
            p Esto es facilitado a través de un ciclo constante de negociación, acordando, supervisando, reportando y revisando los objetivos del servicio y los logros que ya fueron proporcionados y, para los cuales, será necesario tomar diferentes acciones para mejorar el nivel del servicio entregado. (Netec, 2021)
          
          .row(numero="2" titulo="Paso 2") 
            p Todo el contexto de las soluciones adjudicadas, debe estar en el marco de los SLA, y deben ser muy específicos con relación a los alcances y servicios pactados.
          
          .row(numero="3" titulo="Paso 3") 
            p Existe un marco metodológico para llevar a cabo la gestión de los SLA, pues estos pactos de servicio pueden ser flexibles; se debe llevar un seguimiento y cuando, por ejemplo, un requisito nuevo entra en la gestión de SLA, este debe ser gestionado entre proveedor de desarrollo y el negocio, y decidir si puede ser pactado, o no.



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
