export default {
  global: {
    componenteFormativo:
      'Viabilidad del aprovechamiento de fuentes de energía renovable',
    descripcionCurso:
      'Se estudiarán aspectos que impactan la integración de las fuentes no convencionales de energía al sistema energético de Colombia. El aprendiz conocerá sobre las tarifas en las facturas de los servicios de electricidad y gas natural en la actualidad. Además, conocerá la normativa, las barreras y los mecanismos para utilizar energías renovables en el país. Finalmente, entenderá las bases de cómo se hace la evaluación financiera de un proyecto de energía renovable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      /*  {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      }, */
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Estructura tarifaria de los servicios de gas y de energía eléctrica en Colombia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integración de las energías renovables en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Marco normativo - Legislación colombiana en torno a las energías renovables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Barreras para la inclusión de las energías renovables en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Instrumentos y mecanismos para incorporar las energías renovables en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mecanismos de financiación de proyectos de energía renovable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Financiamiento nacional',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Financiamiento internacional',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Evaluación financiera de proyectos de energía renovable en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Generalidades factibilidad financiera de proyectos de energía renovable',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Conceptos básicos para la evaluación financiera',
            hash: 't_7_2',
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
        titulo: 'Descargar PDF',
        download: 'downloads/CAD_009.pdf',
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
      tema:
        '1. Estructura Tarifaria de los servicios de Gas y de Energía eléctrica',
      referencia:
        'Comisión CREG. (2021). <em>La CREG en el sector energético colombian</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AB6BtNTM5s',
    },
    {
      tema: '1.1. Servicio de Gas por redes de tubería',
      referencia:
        'Transportadora de Gas Internacional. (2019). <em>Cadena del Gas Natural.</em> <strong>TGI.</strong>',
      tipo: 'Página web',
      link:
        'https://www.tgi.com.co/industria-del-gas-natural/cadena-del-gas-natural',
    },
    {
      tema:
        '1.1. Servicio de Gas por redes de tubería <p>1.2. Servicio de Energía Eléctrica</p>',
      referencia:
        'DANE. (2022). <em>Índice de Precios del Productor (IPP).</em>',
      tipo: 'Página web',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-del-productor-ipp',
    },
    {
      tema:
        '1.1. Servicio de Gas por redes de tubería <p>1.2. Servicio de Energía Eléctrica</p>',
      referencia:
        'DANE. (2022). <em>Índice de Precios al Consumidor - IPC</em>',
      tipo: 'Página web',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-al-consumidor-ipc',
    },
    {
      tema: '1.1.3. Subsidios y contribuciones',
      referencia:
        'Empresas Públicas de Medellín [EPM]. (s. f.). <em>Conoce tu factura.</em>',
      tipo: 'Página web',
      link: 'http://apps.pacifica.co/epmfactura/#gas',
    },
    {
      tema:
        '1.2. Servicio de Gas Licuado de Petróleo (GLP) por cilindros y/o a granel',
      referencia:
        'Superservicios. (2022). <em>Boletín tarifario Gas Licuado de Petróleo. Cilindros y Granel. Cuarto Trimestre de 2021.</em>',
      tipo: 'PDF',
      link:
        'https://www.superservicios.gov.co/sites/default/files/inline-files/boletin_tarifario_glp_2021_iv_trimestre_-_publicacion_1.pdf',
    },
    {
      tema: '1.2.2 Subsidios',
      referencia:
        'Resolución 40720 DE 2016. [Ministerio de Minas y Energía]. Por la cual se establecen los lineamientos para el otorgamiento de subsidios al consumo de GLP distribuido en cilindros. Julio 27 de 2016.',
      tipo: 'Página web',
      link:
        'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_minminas_40720_2016.htm',
    },
    {
      tema: '1.3.3. Subsidios y contribuciones',
      referencia: 'ENEL. (s. f.). <em>Energía eficiente.</em>',
      tipo: 'Página web',
      link:
        'https://www.enel.com.co/es/personas/servicio-al-cliente/energia-eficiente-consumo-invisible.html',
    },
    {
      tema: '2.1. Contexto internacional',
      referencia:
        '<strong>International Renewable Energy Agency</strong> [IRENA]. <strong>(2020).</strong> <em>Finance & Investment.</em>',
      tipo: 'Página web',
      link: 'https://www.irena.org/financeinvestment',
    },
    {
      tema: '2.2. Contexto Colombiano',
      referencia:
        'Planas, M. y Cárdenas J. (2019). <em>La matriz energética de Colombia se renueva.</em> Banco Interamericano de Desarrollo [BID].',
      tipo: 'Página web',
      link:
        'https://blogs.iadb.org/energia/es/la-matriz-energetica-de-colombia-se-renueva/',
    },
    {
      tema:
        '5.1. Incentivos y beneficios tributarios entorno a la Ley 1715 de 2014',
      referencia:
        'Enercenit Energía Solar. (2018). <em>Incentivos de la Ley 1715</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WcdXGDSrmK0',
    },
    {
      tema:
        '5.1. Incentivos y beneficios tributarios entorno a la Ley 1715 de 2014',
      referencia:
        'Ley 1715 de 2014. Por medio de la cual se regula la integración de las energías renovables no convencionales al sistema energético nacional. Mayo 13 de 2014. DO. No. 49.150.',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1715_2014.html',
    },
    {
      tema:
        '5.1. Incentivos y beneficios tributarios entorno a la Ley 1715 de 2014',
      referencia:
        'Unidad de Planeación Minero-Energética [UPME]. (s. f.). <em>Invierta y gane con energía. Guía práctica para la aplicación de los incentivos tributarios de la Ley 1715 de 2014.</em>',
      tipo: 'PDF',
      link:
        'https://www1.upme.gov.co/Documents/Cartilla_IGE_Incentivos_Tributarios_Ley1715.pdf',
    },
    {
      tema: '5.2. Aspectos entorno a la Ley 2099 de 2021',
      referencia:
        'Ley 2099 de 2021. Por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones. Julio 10 de 2021. DO. No. 51.731',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%202099%20DEL%2010%20DE%20JULIO%20DE%202021.pdf',
    },
    {
      tema: '6.2.2. BID',
      referencia:
        'Banco Interamericano de Desarrollo. (s. f.). <em>Financiamiento y donaciones.</em>',
      tipo: 'Página web',
      link:
        'https://www.iadb.org/es/acerca-del-bid/financiamiento-del-bid/financiamiento-del-bid%2C6028.html',
    },
    {
      tema: '6.2.4. Cooperación Económica y Desarrollo (SECO)',
      referencia:
        'Secretaría de Estado para Asuntos Económicos [SECO]. (2021). <em>Colombia Programa de Cooperación Suiza 2021-2024.</em>',
      tipo: 'PDF',
      link:
        'https://www.eda.admin.ch/dam/countries/countries-content/colombia/es/Anexo-Cooperacion-Economica-SECO-01072021_ES.pdf',
    },
    {
      tema: '7.2. Conceptos básicos para la evaluación financiera',
      referencia:
        'EALDE Business School. (2020). <em>Claves de la financiación de Proyectos de Energía Renovables</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c-HPz5bHTgI&t=277s',
    },
  ],
  glosario: [
    {
      termino: 'Amortización',
      significado:
        'se refiere a la forma de dividir el costo de una inversión como gasto durante los periodos en los que esa inversión va a generar ingresos.',
    },
    {
      termino: 'Contribución',
      significado:
        'es un aporte que se hace con el fin de auxiliar los consumos de usuarios de bajos ingresos. <p>Resolución CREG 124 de 1996 establece: Artículo 1o. FACTOR DE CONTRIBUCIÓN USUARIOS RESIDENCIALES DE ESTRATOS 5 Y 6. A partir del 1o. de enero de 2001, el factor de contribución que deberán sufragar los usuarios residenciales de estratos 5 y 6 será del veinte por ciento (20 %) sobre el valor del servicio. De acuerdo con la ley, los usuarios de estrato 4 no están sujetos a esta contribución.</p>',
    },
    {
      termino: 'Costo Nivelado de Energía',
      significado:
        'en inglés, <em><strong>Levelized Cost of Energy</strong></em> (LCOE), es el costo actual de construir y operar una instalación generadora de energía a lo largo de toda su vida útil. Así pues, el LCOE resulta de medir los costos totales que una instalación tendrá a lo largo de toda su vida y dividirlos por la producción de energía que realizará también durante todos sus años de operación.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'Esquema en el que se representan las entradas (ingresos) y salidas (egresos) de un proyecto registradas en un período dado, que generalmente es de 1 año.',
    },
    {
      termino: 'Depreciación',
      significado:
        'El concepto de depreciación se refiere a la pérdida contable de valor de activos fijos a lo largo de su vida útil.',
    },
    {
      termino: 'Subsidio',
      significado:
        'Ley 142 de 1994, en el Artículo 14 Numeral 19: "Diferencia entre lo que se paga por un bien o servicio, y el costo de este, cuando tal costo es mayor al pago que se recibe".',
    },
    {
      termino: 'Tarifa',
      significado:
        'La Resolución CREG 186 de 2010 indica el concepto de tarifa como "el valor resultante de aplicar al Costo de Prestación del Servicio el factor de subsidio o contribución que corresponda al usuario y la cual se ve reflejada en la factura".',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, D. (2021). <em>La ley 2099 de 2021 y los Incentivos a la Inversión para Proyectos de FNCE y de Gestión Eficiente de la Energía.</em> Blog del Sector Minero-Energético. ',
      link:
        'https://boletinmineroenergetico.uexternado.edu.co/la-ley-2099-de-2021-y-los-incentivos-a-la-inversion-para-proyectos-de-fnce-y-de-gestion-eficiente-de-la-energia/',
    },
    {
      referencia:
        'Banco Bilbao Vizcaya Argentaria [BBVA]. (2021). <em>La imparable rentabilidad de las energías renovables.</em> ',
      link:
        'https://www.bbva.com/es/sostenibilidad/la-imparable-rentabilidad-de-las-energias-renovables/',
    },
    {
      referencia:
        'Crozet, M. (2020). <em>El apogeo de las energías renovables, el lado esperanzador de la crisis de la pandemia de coronavirus.</em> Naciones Unidas ',
      link: 'https://news.un.org/es/story/2020/06/1475832',
    },
    {
      referencia:
        'EPM estamos ahí. (2017). <em>Explicación tarifa de gas - EPM Estamos ahí</em> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=prZPx1YEDF0',
    },
    {
      referencia:
        'Estudio Legal Hernández [ELH]. (2019). <em>Marco Jurídico de las Energías Renovables en Colombia.</em> ',
      link:
        'https://estudiolegalhernandez.com/energia/marco-juridico-de-las-energias-renovables-en-colombia/',
    },
    {
      referencia:
        'Frankfurt School of Finance & Management gGmbH. (2020). <em>Global Trends in Renewable Energy Investment 2020.</em> UN Environment Programme. ',
      link:
        'https://www.fs-unep-centre.org/wp-content/uploads/2020/06/GTR_2020.pdf',
    },
    {
      referencia:
        'Hernández, J. (2021). <em>Incentivos tributarios Energías Renovables (FNCER) en Colombia: Marco Legal y Normativo.</em> Estudio Legal Hernández. ',
      link:
        'https://estudiolegalhernandez.com/energia/incentivos-tributarios-energias-renovables-fncer-en-colombia-marco-legal-y-normativo/',
    },
    {
      referencia:
        'International Renewable Energy Agency [IRENA]. (2020a). <em>Costos de Generación de Energía Renovable en 2019.</em> ',
      link:
        'https://irena.org/-/media/Files/IRENA/Agency/Publication/2020/Jun/IRENA_Costs_2019_ES.PDF?la=en&hash=A74F5A6BA01D86C175702B4F27C7086AF5D23F9',
    },
    {
      referencia:
        'International Renewable Energy Agency [IRENA]. (2020b). <em>Renewable Power Generation Costs in 2019.</em> ',
      link:
        'https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Jun/IRENA_Power_Generation_Costs_2019.pdf',
    },
    {
      referencia:
        'LEGIS. (2021). <em>Conozca la nueva Ley de Transición Energética.</em> LEGIS Ámbito Jurídico. ',
      link:
        'https://www.ambitojuridico.com/noticias/general/conozca-la-nueva-ley-de-transicion-energetica',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la Evaluación de Elegibilidad de Financiación de Proyectos de Eficiencia Energética. Tipo de Proyecto: Energía Solar Fotovoltaica. CAF.</em> ',
      link: 'https://scioteca.caf.com/handle/123456789/1301',
    },
    {
      referencia:
        'ONU Cambio Climático. (2019). <em>La energía renovable representa ya un tercio de la capacidad energética mundial, según IRENA.</em> United Nations Climate Change. ',
      link:
        'https://unfccc.int/es/news/la-energia-renovable-representa-ya-un-tercio-de-la-capacidad-energetica-mundial-segun-irena',
    },
    {
      referencia:
        'ONU Medio Ambiente. (2019). <em>Las inversiones en energía renovable alcanzarán US$ 2,6 billones esta década.</em> ONU Programa para el medio ambiente. ',
      link:
        'https://www.unep.org/es/noticias-y-reportajes/comunicado-de-prensa/las-inversiones-en-energia-renovable-alcanzaran-us-26',
    },
    {
      referencia:
        'PROCOLOMBIA. (2021). <em>Colombia recibe cada vez más inversión extranjera en energías renovables.</em> ',
      link:
        'https://procolombia.co/noticias/colombia-recibe-cada-vez-mas-inversion-extranjera-en-energias-renovables',
    },
    {
      referencia:
        'Secretaría de Estado de la Energía - Gobierno de la provincia de Santa Fe. (2019). <em>Módulo II Evaluación de proyectos de energía.</em> Programa de formación de gestores energéticos en industrias. ',
      link:
        'https://www.santafe.gob.ar/ms/eficienciaenergetica/wp-content/uploads/sites/25/2018/11/02_EVALUACI%C3%93N-FINANCIERA-DE-PROYECTOS-DE-ENERG%C3%8DA.pdf',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios [Superservicios]. (2020). <em>Boletín tarifario de gas combustible por redes de tubería 3er Trimestre de 2020.</em> ',
      link:
        'https://www.superservicios.gov.co/sites/default/files/inline-files/boletin_tarifario_gas_por_redes_iii_trim_2020_0.pdf',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios [Superservicios]. (2021a). <em>Boletín Tarifario gas combustible por redes de tubería Cuarto trimestre de 2020.</em> ',
      link:
        'https://www.superservicios.gov.co/sites/default/files/inline-files/boletin_tarifario_gas_por_redes_cuarto_trimestre_vigencia_2020_0.pdf',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios [Superservicios]. (2021b). <em>Boletín tarifario gas combustible por redes Segundo Trimestre de 2021.</em> ',
      link:
        'https://www.superservicios.gov.co/sites/default/files/inline-files/boletin_tarifario_gas_combustible_por_redes_segundo_trimestre_2021-revjas_0.pdf',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios [Superservicios]. (2022). <em>Boletín tarifario de Gas Licuado de Petróleo 4to Trimestre de 2021.</em> ',
      link:
        'https://www.superservicios.gov.co/sites/default/files/inline-files/boletin_tarifario_glp_2021_iv_trimestre_-_publicacion_1.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética [UPME]. (2015). <em>Integración de las energías renovables no convencionales en Colombia.</em> La Imprenta Editores. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/INTEGRACION_ENERGIAS_RENOVANLES_WEB.pdf',
    },
    {
      referencia:
        'Valora Analitik. (2021). <em>Colombia llegaría a 734 mw de capacidad instalada de energías renovables en 2021</em> ',
      link:
        'https://www.valoraanalitik.com/2021/01/27/colombia-llegaria-a-734-mw-de-capacidad-instalada-de-energias-renovables-en-2021/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Tolima - <strong>Centro de Comercio y Servicios</strong>',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Linda Díaz Rivera',
          cargo: 'Consultora',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Distrito Capital - <strong>Centro de Diseño y Metrología</strong>',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Regional Distrito Capital - <strong>Centro de Gestión Industrial</strong>',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reye',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - <strong>Centro Industrial del Diseño y la Manufactura</strong>',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro:
            'Regional Distrito Capital - <strong>Centro de Diseño y Metrología</strong>',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Tolima - <strong>Centro de Comercio y Servicios</strong>',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
