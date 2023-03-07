export default {
  global: {
    componenteFormativo: 'Entrega de la solución informática',
    descripcionCurso:
      'Una vez finalizado y entregado el proyecto basado en la analítica, no significa que la labor ha terminado, pues se requiere hacer una revisión y seguimiento del proceso; para esto es importante tener en cuenta que todo proyecto, además de tener un ciclo de vida, se ayuda de diferentes herramientas que posibilitan el mejoramiento continuo, incluyendo la capacitación de los involucrados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['animation-rotation-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['animation-rotation-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['animation-rotation-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['animation-rotation-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['animation-rotation-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciclo de vida de proyectos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Criterios de aceptación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para la gestión de proyectos y equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Metodología en cascada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mejoramiento continuo	',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Presentación de proyectos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas para la gestión de proyectos y equipos',
      referencia:
        '(Canal Geek QA. (2021). <i>Cómo usar JIRA desde 0 en equipos SCRUM</i> [video]. YouTube.',
      tipo: 'Video tutorial',
      link: 'https://www.youtube.com/watch?v=ViwOKhYx4kg',
    },
    {
      tema: 'Herramientas para la gestión de proyectos y equipos',
      referencia:
        '(Canal EducaTIC. ( 2020). <i>Tutorial TRELLO actualizado 2022</i> [video]. YouTube.',
      tipo: 'Video tutorial',
      link: 'https://youtu.be/sZd7uUPigk8',
    },
    {
      tema: 'Mejoramiento continuo',
      referencia:
        '(LaInternational Business Machines Corporation.(2021). <i>Acuerdos de nivel de servicio (SLA) IBM.</i>',
      tipo: 'Documento web',
      link:
        'https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente de desarrollo',
      significado:
        'Entorno gráfico y técnico para la codificación e integración de código de programación del equipo de desarrollo; así mismo se produce la integración de los servicios necesarios para la solución informática.',
    },
    {
      termino: 'BI (Business Intelligence',
      significado:
        'Inteligencia de Negocio. Área de la informática que busca soluciones para generar conocimiento y datos de valor para diferentes áreas del negocio.',
    },
    {
      termino: '<i>Bug</i>',
      significado:
        'Error de programación. El proceso de encontrar errores antes de que lo hagan los usuarios del programa se denomina depuración o <em>debugging</em>.',
    },
    {
      termino: 'ERP (Enterprise Resource Planning)',
      significado:
        'sistema de planificación de recursos empresariales.  Son los sistemas informáticos del nivel gerencial que integran muchos de los negocios asociados con las operaciones de la empresa.',
    },
    {
      termino: 'Habilidades blandas',
      significado:
        'aptitudes personales que determinan la manera como se relaciona con otros colaboradores, la manera de resolver conflictos y competencias básicas.',
    },
    {
      termino: '<i>Insight</i>',
      significado:
        'en psicología se refiere a una verdad descubierta por los datos; es un descubrimiento de una realidad.',
    },
    {
      termino: 'On premise',
      significado:
        'Modelo de soluciones informáticas donde la empresa contiene toda la infraestructura y <em>software</em> bajo su propiedad y administración.',
    },
    {
      termino: 'Relación costo - beneficio',
      significado:
        'Se refiere a la relación relativa entre los costos de inversión y esfuerzo con los beneficios para un proyecto. Es una balanza entre inversión contra utilidad.',
    },
    {
      termino: 'SAAS <i>(Software as a Service)</i>',
      significado:
        '<i>software</i> como servicio. Es un modelo de soluciones informáticas donde las organizaciones pagan a un proveedor por un servicio constante.',
    },
    {
      termino: 'Solución desplegada',
      significado:
        'Es la versión de producción de la solución <em>software</em> o tecnológica desarrollada. Es la entrega para echar a rodar el sistema en producción real.',
    },
    {
      termino: 'Tecnicismos',
      significado:
        'Uso de expresiones y palabras enfocadas al ámbito técnico y tecnológico.',
    },
    {
      termino: 'Testeos',
      significado:
        '<em>Testing</em> de <em>software</em>. Área de la ingeniería de <em>software</em> que emplea metodologías de pruebas para detectar errores de programación o errores funcionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Atlassian. (2022). <em>Server to cloud: why make the move?</em>',
      link:
        'https://www.atlassian.com/enterprise/resources/server-to-cloud-why-make-the-move',
    },
    {
      referencia:
        'Escales, A. (2013). La capacitación en el proceso de implementación de un sistema. <i>Evaluando software.com.</i> ',
      link:
        'https://www.evaluandosoftware.com/la-capacitacion-en-el-proceso-de-implementacion-de-un-sistema/',
    },
    {
      referencia:
        'Lasa, C., Álvarez, A. & de las Heras del Dedo. (2017). Métodos ágiles: Scrum, Kanban, Lean.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933',
    },
    {
      referencia:
        'MarketerosLATAM. (2021). Ciclo de Deming: etapas e importancia. Marketeroslatam.com',
      link:
        'https://www.marketeroslatam.com/ciclo-de-deming-etapas-e-importancia/',
    },
    {
      referencia:
        'Netec Power Learning. (2021). Proceso de gestión de niveles de servicio. <i>En curso Fundamentos de ITIL® V3 | EOL (4.6.3).</i>',
      link: 'https://www.netecdigital.com/courses/195795/lectures/3432553',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
