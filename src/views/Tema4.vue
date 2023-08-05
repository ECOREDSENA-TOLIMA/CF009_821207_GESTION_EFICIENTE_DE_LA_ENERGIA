<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Barreras para la inclusión de las energías renovables en Colombia

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')  

    p.mb-5(data-aos="fade-left") Conforme se ha avanzado en la incorporación de las tecnologías de energía renovable en el mundo, se han ido identificando dificultades asociadas, principalmente, a la falta de un marco regulatorio adecuado y a la inexperiencia en su utilización. Se han identificado principalmente obstáculos de tipo económico, regulatorio e institucional y técnico. Colombia no es la excepción a esta condición y en el país también se han identificado obstáculos que impactan el desarrollo de proyectos energéticos sustentables, que, a su vez, han dificultado la toma de decisiones para inversión en los mismos. De acuerdo con estudios realizados por la UPME (UPME, 2015) y el DNP (DNP, 2017), se han identificado y caracterizado las barreras que se presentan a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-11.col-lg-10.p-4(data-aos="fade-down")
        .tabla-a.color-acento-botones.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Tabla 8.] #[i Principales barreras que impactan el desarrollo de energías renovables en Colombia] 
          table
            caption Nota. Adaptado del documento Energy Supply Situation in Colombia. DNP (2017).  https://www1.upme.gov.co/DemandaEnergetica/INTEGRACION_ENERGIAS_RENOVANLES_WEB.pdf 
            thead
              tr
                th(style="width:20%") Tipo
                th(style="width:30%") Tema
                th Descripción
            tbody
              tr
                td.text-center(rowspan="3") Instituciones
                td Intervención de muchas instituciones y desarticulación institucional.
                td Para desarrolla un proyecto de generación de electricidad a partir de fuentes se requiere realizar trámites que implican la intervención de varias entidades, con diferente visión respecto a las energías renovables, lo cual resulta en una descoordinación entre las instituciones y obstaculiza la ejecución de los proyectos.
              tr
                td No se resalta la importancia de las Fuentes No Convencionales de Energía Renovable (FINCER).
                td La generación hidráulica es la que predomina en la canasta energética del país y es la tecnología de producción de electricidad a la que se le da más importancia, lo que traduce en la falta de incentivos adecuados que permitan el desarrollo de las renovables.
              tr
                td Incentivos erróneos.
                td Los incentivos o subsidios a energías renovables se asignan de forma errónea, dificultando su participación en el mercado energético y los beneficios ambientales y sociales.
              tr
                td.text-center(rowspan="4") Económicos
                td Percepción de altos costos de la FINCER.
                td Pese a que los costos de fuentes de energía renovables han disminuido considerablemente en los últimos años, en el caso de pequeños proyectos solares y eólicos a nivel residencial y comercial, por ejemplo, la inversión tiende a ser elevada.
              tr
                td Dificultades de financiamiento (percepción de riesgos).
                td Las entidades financieras consideran que en el país falta experiencia en materia de tecnología, política e implementación de grandes proyectos de energía renovable, de ahí que sean conservadoras con respecto al financiamiento de proyectos y lo perciba de alto riesgo.
              tr
                td Condiciones del mercado.
                td El dominio por parte de algunos agentes del mercado dificultan la entrada de nuevos actores, la incorporación de nuevas tecnologías y la competencia.
              tr
                td No valoración de externalidades positivas.
                td Uno de los principales aspectos positivos del uso de energía renovable es su bajo impacto ambiental. Sin embargo, esta  ventaja no se traduce en beneficios económicos.
              tr
                td Regulatorias
                td Procedimiento complejo para obtención de licencias ambientales.
                td El proceso para obtener licencia ambiental de proyectos de energía renovable se realiza similar a un proyecto de energía con generación convencional. Pese a que la autoridad ambiental ha creado términos de referencia para los estudios de impacto ambiental de proyectos eólicos en tierra y solares fotovoltaicos, sigue siendo un procedimiento extenso y no simplificado.  
              tr
                td.text-center(rowspan="3") Tecnológicas
                td Capital humano capacitado.
                td Falta de capital humano con conocimientos de las tecnologías de energía renovable. Se requiere personal a nivel técnico, tecnológico y profesional, capacitado en energías renovables, equipos, operación y mantenimiento de instalaciones, entre otros, para la implementación adecuada de las tecnologías energéticas en el mercado.
              tr
                td Falta de madurez tecnológica.
                td Existe una inclinación por el uso de las tecnologías convencionales y las capacidades a través de los años. Además, no hay amplia experiencia práctica en la gestión y operación de proyectos de energías renovables no convencionales de considerable escala.
              tr
                td Medición de potencial de recursos y difusión de información sobre las FINCER.
                td Aunque se han realizado estudios para la medición del potencial de recursos como el solar y el eólico, todavía falta mucha información, además se requiere un soporte riguroso y con datos confiables, respecto de las mediciones que se lleven a cabo en el país.


    p.mb-4(data-aos="fade-left") Teniendo en cuenta que los proyectos de energía solar y energía eólica son los que más se han desarrollado a nivel nacional, a continuación, se muestran las barreras encontradas para los nichos de oportunidad identificados por la UPME, como son: proyectos de energía eólica en zonas de alto potencial y sistemas de autogeneración con energía solar FV.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-11.col-lg-10.p-4(data-aos="fade-down")
        .tabla-a.color-acento-botones.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Tabla 9.] #[i Principales barreras identificadas para energía eólica] 
          table
            caption Nota. Adaptado de la Unidad de Planeación Minero Energética. (2015). Integración de las Energías Renovables no convencionales en Colombia. pp. 31-32. 
            thead
              tr
                th(style="width:25%") Tema
                th Descripción
            tbody
              tr
                th Licenciamiento
                td 
                  p Hasta la fecha, la normatividad ambiental ha reglamentado los temas de la generación con fuentes termoeléctricas convencionales e hidroeléctricas. Sin embargo, no se cuenta con términos de referencia (TDR) específicos para los estudios ambientales de las fuentes no convencionales. 
                  p Adicionalmente, el punto más crítico enfrentado en materia de licenciamiento corresponde a los procesos de consulta previa con comunidades indígenas como en el caso de La Guajira.
              tr
                th Requerimientos técnicos
                td No existen requerimientos técnicos específicos definidos en el código de redes para la conexión y operación de parques eólicos interconectados al SIN.
              tr
                th Infraestructura
                td En la gran mayoría de los casos, para lo cual Colombia no es la excepción, las áreas con mayores potenciales para el aprovechamiento de las FNCER se encuentran localizadas en sitios alejados de obras de infraestructura esenciales como son redes eléctricas para la transmisión de la energía, adecuadas vías de acceso y comunicación y otros servicios básicos, lo cual dificulta la construcción de estos proyectos y, ante todo, su integración al Sistema energético nacional.
              tr
                th Conocimiento del recurso
                td Si bien existen iniciativas puntuales de entidades como la UPME y el IDEAM, para brindar información de caracterización del recurso eólico como una primera aproximación para agentes interesados en su aprovechamiento, no existe un mecanismo para brindar información pública suficiente de este recurso, u otras FNCER. Así mismo, no existen obligaciones por parte de quienes estudian estos recursos para compartir información con entidades como la UPME para planear su adecuado aprovechamiento.
              tr
                th Financiación
                td La falta de conocimiento local en el desarrollo de proyectos eólicos, sus características en materia de tecnología, rendimientos, costos operacionales, riesgos, etc., y la ausencia de mecanismos locales de promoción para el desarrollo de esta fuente, dificulta el acceso de los agentes interesados a fuentes de financiación favorables para la realización de estos proyectos.
              tr
                th Costos de inversión
                td Si bien los costos de inversión de la tecnología para el aprovechamiento de la energía eólica han venido reduciéndose en la medida en que su eficiencia y factores de planta se han venido incrementando, y en algunos casos se puede decir que están en la frontera de competitividad con las fuentes tradicionales, los costos nivelados de la energía a partir de esta fuente aún pueden resultar relativamente altos dadas las implicaciones comerciales de la variabilidad del recurso.


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-11.col-lg-10.p-4(data-aos="fade-down")
        .tabla-a.color-acento-botones.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Tabla 10.] #[i Principales barreras identificadas para energía solar] 
          table
            caption Nota. Adaptado de la Unidad de Planeación Minero Energética. (2015). Integración de las Energías Renovables no convencionales en Colombia. pp. 34. 
            thead
              tr
                th(style="width:25%") Tema
                th Descripción
            tbody
              tr
                th Venta de excedentes
                td La ley (anterior a la Ley 1715 de 2014) prohíbe a los auto generadores la venta de excedentes en condiciones permanentes, y no existe una figura reglamentada de productor margina.
              tr
                th Política energética
                td No existe una política energética en materia de generación distribuida con FNCER de pequeña escala, desarrollada por o para usuarios medianos y pequeños, conectados a las redes de distribución.
              tr
                th Requerimientos técnicos
                td No existe una normatividad (normas técnicas y estándares) establecida para la selección de equipos, la configuración, instalación y conexión al SIN de pequeños o grandes sistemas de generación con energía solar FV.
              tr
                th Información de potenciales
                td No se tiene certeza sobre los potenciales objeto de posible desarrollo para con base en ellos determinar y cuantificar los posibles impactos sobre las redes de distribución.
              tr
                th Financiación
                td No se cuenta con esquemas financieros orientados a la inversión en este tipo de sistemas, especialmente dirigidos a los mercados o subsectores propicios para el desarrollo de sistemas de generación distribuida con solar FV.





</template>

<script>
export default {
  name: 'Tema4',
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
