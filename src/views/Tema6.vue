<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Presentación de proyectos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema6/img6-1.svg" alt="Tablero")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Muchos proyectos requieren de grandes inversiones en tiempo, talento humano, licencias, infraestructura, costando millones de pesos y con una exigencia de calidad alta; sin embargo, pocas veces se tiene en cuenta a las personas y colaboradores de la organización, como personas activas del proyecto; todos los procesos de las organizaciones solo funcionan, si cuentan con equipos y personas alineadas con el negocio.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p Esto es un error, que puede afectar de manera importante el proyecto y su éxito en el tiempo; ocasionalmente todo se hace bien, menos la socialización, comunicación y presentación del proyecto.
          .col-md-6.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-2.png" alt="Plan A y B")
        .row
          .col-md-6.mb-4.mb-md-0
            p El perfil profesional se enfoca en lo técnico, es importante tener competencias sociales y habilidades blandas para tener la capacidad de comunicar de manera acertada, clara, adecuada y agradable los objetivos, el marco del proyecto, funcionalidad y los componentes más relevantes de la solución que se despliega y entra a producción.
          .col-md-6.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-3.png" alt="Reunión de trabajo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Si bien muchos desarrollos tecnológicos, en las organizaciones, son decisiones del nivel gerencial y se implementan como directrices del negocio, es importante llegar a todos los miembros de la organización, no solo a aquellos que se encuentren directamente involucrados.
          .col-md-6.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-4.png" alt="Reunión de trabajo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Por lo general, dependiendo de la naturaleza y políticas del proyecto, este debe comunicarse y, de ser necesario, preparar una presentación al área o personas involucradas y líderes de la organización; esto da empoderamiento y el nivel gerencial, con seguridad, lo tomará como un logro, generando motivación y satisfacción por el trabajo realizado.
          .col-md-6.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-5.png" alt="Reunión de trabajo")

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Consejos para preparar y llevar a cabo la presentación

    p.mb-5(data-aos="fade-left") Todas las presentaciones ante un público, ya sea masivo o especializado, podrían ser un poco intimidantes, sin embargo, este nerviosismo es normal en muchas personas y se combate con la apropiación y seguridad del tema a exponer y la experiencia, a medida que se vaya enfrentando al público.

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Antes de la presentación")
        .row
          .col-md-8.mb-4.mb-md-0
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Establecer el objetivo principal de la presentación, el cual puede ser:
                .row.justify-content-center
                  .col-lg-11
                    ol
                      li
                        i.fas.fa-check.cab.me-3
                        | Mostrar las ventajas y el valor generado; vender a las personas el producto, para que lo asuman en sus vidas laborales (gestión del cambio).
                      li
                        i.fas.fa-check.cab.me-3
                        | Presentar informe acerca del avance y desarrollo del proyecto y los logros.
                      li
                        i.fas.fa-check.cab.me-3
                        | Enseñar a usar herramientas (no recomendado en una conferencia de presentación).
                      li
                        i.fas.fa-check.cab.me-3
                        | Realizar demostraciones en vivo para que haya más claridad en la funcionalidad, etc.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Conocer la audiencia o público es importante, aunque pueden estar personas con conocimientos técnicos, aunque es mejor orientarse a un público genérico.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Ponerse en el lugar de la audiencia, permite que se piense como público crítico y lo que se espera de una presentación de esta naturaleza, y de qué modo se podría hacer que la charla sea más amigable.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Ubicar y priorizar los puntos claves o críticos de interés, que le darán valor al negocio; los menos importantes se deben dejar para lo último, porque si la presentación se alarga, es posible que se pierda interés.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Preparar ayudas visuales. Las diapositivas deben estar bien elaboradas, con el marco visual de la organización. Estos soportes visuales ayudan a explicar, con gráficos y dibujos, los conceptos de lo que se pretende, llegue con claridad al público.
          .col-md-4.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-6.png" alt="Antes de presentación")
      
      .py-4.py-md-5(titulo="Durante la presentación")
        .row
          .col-md-8.mb-4.mb-md-0
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | La mirada produce confianza, es importante mantener un contacto visual y cordial con el público. Es más fácil persuadir cuando se intercambian miradas (aplica incluso si la presentación es a través de medios virtuales).
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Romper el hielo; cuando se inicia una presentación en un ambiente poco familiar, donde no se conoce la audiencia, es importante usar alguna técnica que mejore, desde el inicio, la relación entre conferencista y asistentes; se puede iniciar con anécdotas a modo de historia entretenida o preguntas en contexto (sin forzar a nadie a responder).
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | No exceder en el número de diapositivas ni en explicaciones detalladas. No superar tampoco el tiempo de exposición.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | No emplear tecnicismos o palabras rebuscadas para impresionar, “en la sencillez está la virtud”.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Evitar leer. Cuando se habla desde la memoria y la apropiación del conocimiento, se tendrá un mayor impacto en la audiencia.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Procurar interactuar con el público, motivando siempre a su participación, valorar opiniones y aportes.
          .col-md-4.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-7.png" alt="Reunión de trabajo")
      
      .py-4.py-md-5(titulo="Después")
        .row
          .col-md-8.mb-4.mb-md-0
            ol
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Dejar espacios para preguntas y solución de dudas. Es necesario moderar esta participación y, en caso que sean muchas, gestionar por otro medio para dar respuesta, por ejemplo, a través de correo u otro medio.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Dejar fuentes para ampliar la información dada, ya sea un enlace, manual, volantes, etc.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Si es posible y pertinente, emplear una herramienta que permita realizar encuestas rápidas, en línea se pueden emplear varias donde la misma audiencia responde a través de su celular.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Si es virtual, divulgar la grabación de la presentación, al igual que si es presencial, procurar grabar para la divulgación.
              li.mb-3 
                i.fas.fa-circle.fa-xs.cst.me-3
                | Si se considera pertinente, compartir por correo electrónico una versión, en PDF, de las diapositivas usadas en la presentación.
          .col-md-4.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src="@/assets/curso/temas/tema6/img6-8.png" alt="Personas levantando la mano")

    Separador

    .titulo-tercero(data-aos='fade-right')
      h2 Capacitación

    p.mb-5(data-aos="fade-left") Un elemento protagonista para garantizar la usabilidad y utilidad del recurso desarrollado, ya sea un software transaccional, ERP o BI, es el proceso de capacitación y transferencia de conocimientos operativos, según el rol y las responsabilidades.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-sm-12
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Capacitación como prerrequisito
              p El proceso de capacitación, por lo general, se desarrolla como prerrequisito a la entrega total del proyecto, se refiere a la transferencia de conocimientos y manejo que se da durante la implementación del proyecto. Se realiza con la participación de los integrantes del equipo de implementación y, si es el caso, de pruebas. Se entiende que los implicados en el sistema pueden ser los usuarios del sistema, los consultores externos y quienes se vean afectados al proceso de implementación.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img6-9.png')})`}")
      
      .col-lg-4.col-sm-12
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Deficiencias en la solución implementada
              p Durante el proceso de capacitación, se pueden producir ciertas deficiencias en la solución implementada. Estas situaciones podrían tener afectaciones directas en los tiempos de puesta en marcha, provocando ampliación en los plazos reales respecto a los plazos planificados, esto implica costos adicionales y atrasos en la entrega, lo que afecta algunos factores de servicios.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img6-10.png')})`}")
      
      .col-lg-4.col-sm-12
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Implementación acorde con los requerimientos
              p Se debe tener en cuenta que un sistema se considera implementado, cuando ha entrado en la fase de producción, es decir, que el sistema funciona de forma satisfactoria, acorde con los requerimientos definidos por la organización.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img6-11.png')})`}")

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Cada proyecto en particular, merece un estudio preliminar en todos sus aspectos, no solamente el de la capacitación. Este estudio previo se hace necesario, para asegurar una implementación exitosa, y debe ser desarrollado por personal independiente del proveedor del software, que puede ser interno si la organización lo posee o contratado de forma externa. (Escales, 2013)

    h3.mb-5(data-aos="fade-right") Factores que afectan el proceso de capacitación

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1
      br
      spam Factores que afectan la capacitación

    table.mb-5(data-aos="zoom-in")
      thead(style="background-color: #4DD0E1")
        tr.text-center(style="vertical-align: middle")
          th  
            h3 Factor
          th 
            h3 Implicación
          th 
            h3 Recomendación
      tbody
        tr(style="background-color: #F6F6F6")
          th.text-center Demoras en la implementación
          td La puesta en marcha de los sistemas, por lo general, requiere parametrización y carga inicial de datos, por lo que es necesario tener un alistamiento mínimo para el desarrollo de la capacitación. No sería provechosa una capacitación sin datos qué gestionar.#[br]#[br]
            p Ocasionalmente, los plazos calculados pueden ser menores a los que realmente se requieren para la apropiación de la nueva herramienta.
          td Antes de la fase de transferencia, asegurarse de tener parametrizados los sistemas de información, y tener cargados datos para poder realizar los ejemplos y demostraciones. Ocasionalmente, las capacitaciones podrían hacerse en el ambiente de desarrollo.#[br]#[br]
            p Preparar ayudas visuales, tales como diapositivas, para explicar conceptos, reglas y poder proyectar mejor el entendimiento del sistema.#[br]
            p Planificar los contenidos de la formación, estimar y asignar tema por tema un tiempo determinado. También es responsabilidad del orientador hacer cumplir los horarios.
        tr
          th.text-center Falencias del talento humano
          td Con frecuencia, las empresas clientes o usuarios de la solución informática no realizan una selección teniendo en cuenta las habilidades del personal que manejará el nuevo sistema, así se llevará mucho tiempo en la capacitación, no se enfocará solo a la transferencia de conocimientos de las nuevas funcionalidades, sino también a desarrollar habilidades básicas digitales.
          td Recomendar a la empresa cliente o usuaria del sistema que selecciona personal con habilidades digitales básicas, esto facilita que el enfoque de la transferencia sea más eficiente.
        tr(style="background-color: #F6F6F6")
          th.text-center Ausencia de la Dirección
          td Una característica que se nota en numerosos casos es la falta de presencia de los líderes de la organización. Es importante que se transmita respaldo y compromiso por parte de las empresas que usarán la nueva solución.
          td Comprometer a los directivos y líderes de la organización para que hagan presencia en la formación, al menos en un momento corto de la transferencia, mostrando compromiso y motivando a sus colaboradores, para que se implemente con éxito el proyecto.

    .row.justify-content-center
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p.mb-0  Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

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
