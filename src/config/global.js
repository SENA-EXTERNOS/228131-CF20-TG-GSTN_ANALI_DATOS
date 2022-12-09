export default {
  global: {
    componenteFormativo: 'Entrega de la solución informática',
    descripcionCurso:
      'A través de este recurso educativo, se exponen conceptos para la correcta apropiación de conocimientos y saberes de la fase final en las soluciones en analítica para las organizaciones. De igual manera, se tienen en cuenta las recomendaciones, entregas, capacitación y el mejoramiento continuo  del proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
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
        clases: ['banner-principal-decorativo-3'],
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>SCRUM</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Historias de usuario y criterios de aceptación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para la gestión de proyectos y equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Jira Software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Trello</em>',
            hash: 't_3_2',
          },
        ],
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Acciones posteriores a la entrega del proyecto',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Acuerdos de nivel de servicio (SLAs)',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Presentación de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Consejos para preparar y llevar a cabo la presentación',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Capacitación',
            hash: 't_6_2',
          },
        ],
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
      tema: 'Métodos ágiles <em>Scrum, Kanba, Lean</em>',
      referencia:
        '(Lasa, C., Álvarez, A., & de las Herras del Dedo, 2017). <em>Métodos ágiles: Scrum, Kanban, Lean.</em>',
      tipo: 'e-Book',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933',
    },
    {
      tema: '<em>Jira</em>',
      referencia:
        'Canal Geek QA. (25 de octubre de 2021). <em>Como usar JIRA desde 0 en equipos SCRUM.</em> [Vídeo]. YouTube.',
      tipo: 'Video tutorial',
      link: 'https://www.youtube.com/watch?v=ViwOKhYx4kg',
    },
    {
      tema: '<em>Trello</em>',
      referencia:
        'Canal EducaTIC. (10 de junio de 2020). <em>Tutorial TRELLO actualizado 2022.</em> [Vídeo]. YouTube.',
      tipo: 'Video tutorial',
      link: 'https://youtu.be/sZd7uUPigk8',
    },
    {
      tema: 'Acuerdos de nivel de servicio (SLA)',
      referencia:
        '<em>International Business Machines Corporation.</em> (2021). <em>Acuerdos de nivel de servicio (SLA) IBM.</em>',
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
      termino: 'BI <em>(Business Intelligence)</em>',
      significado:
        'Inteligencia de Negocio. Área de la informática que busca soluciones para generar conocimiento y datos de valor para diferentes áreas del negocio.',
    },
    {
      termino: '<em>Bug</em>',
      significado:
        'Error de programación. El proceso de encontrar errores antes de que lo hagan los usuarios del programa se denomina depuración o <em>debugging</em>.',
    },
    {
      termino: 'ERP <em>(Enterprise Resource Planning)</em>',
      significado:
        'Sistema de planificación de recursos empresariales.  son los sistemas informáticos del nivel gerencial que integran muchos de los negocios asociados con las operaciones de la empresa.',
    },
    {
      termino: 'Habilidades blandas',
      significado:
        'Aptitudes personales que determinan la manera cómo se relaciona con otros colaboradores, la manera de resolver conflictos y competencias básicas.',
    },
    {
      termino: '<em>Insigth</em>',
      significado:
        'En psicología se refiere a una verdad descubierta por los datos; es un descubrimiento de una realidad.',
    },
    {
      termino: '<em>On premise</em>',
      significado:
        'Modelo de soluciones informáticas donde la empresa contiene toda la infraestructura y <em>software</em> bajo su propiedad y administración.',
    },
    {
      termino: 'Relación costo – beneficio',
      significado:
        'Se refiere a la relación relativa entre los costos de inversión y esfuerzo con los beneficios para un proyecto. Es una balanza entre inversión contra utilidad.',
    },
    {
      termino: '<em>Saas (Software as a service)</em>',
      significado:
        '<em>Software</em> como servicio. Es un modelo de soluciones informáticas donde las organizaciones pagan como servicio constante s lo servidores de un proveedor.',
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
        'Escales, A. (30 de julio de 2013). La capacitación en el proceso de implementación de un sistema. En <em>Evaluando software.com</em>. Recuperado el 28 de octubre de 2022 de',
      link:
        'https://www.evaluandosoftware.com/la-capacitacion-en-el-proceso-de-implementacion-de-un-sistema/',
    },
    {
      referencia:
        'Lasa, C., Álvarez, A., & de las Herras del Dedo, R. (2017). <em>Métodos ágiles: Scrum, Kanban, Lean.</em> Madrid: Anaya multimedia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933',
    },
    {
      referencia:
        'MarketerosLATAM. (5 de junio de 2021). <em>Ciclo de Deming: etapas e importancia.</em> Marketeroslatam.com:',
      link:
        'https://www.marketeroslatam.com/ciclo-de-deming-etapas-e-importancia/',
    },
    {
      referencia:
        'Netec Power Learning. (2021). <em>Proceso de gestión de niveles de servicio.</em> En <em>curso Fundamentos de ITIL® V3 | EOL (4.6.3)</em>.  Recuperado el 28 de octubre de 2022 de',
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
