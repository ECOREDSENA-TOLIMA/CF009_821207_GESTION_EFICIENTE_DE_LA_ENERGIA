<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Marco normativo - Legislación colombiana en torno a las energías renovables

    p.mb-5(data-aos="fade-left") La inclusión de Fuentes No Convencionales de Energía Renovable (FNCER) de manera sostenible, constituye un pilar fundamental dentro de la estrategia de crecimiento verde y desarrollo bajo en carbono, en la agenda del Estado colombiano. ¡Observe más al respecto en el siguiente recurso!
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-4.col-lg-3.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='')  
      .col-12.col-md-8.col-lg-7(data-aos="fade-left")
        p A comienzos del siglo en curso, el país dio los primeros pasos en materia de política energética, orientada al uso racional y eficiente de los recursos energéticos y el desarrollo de las energías renovables. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Evolución de la política colombiana en cuanto a las FNCER.] 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-02.svg', alt='') 
          figcaption Nota. Tomado Plan nacional de negocios verdes. p. 27.

    p.mb-4(data-aos="fade-left") Además, en la siguiente tabla, se resumen las principales normas que incentivan la utilización de fuentes de energía renovable en la canasta energética del país.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-11.col-lg-10.p-4(data-aos="fade-down")
        .tabla-a.color-acento-botones.mb-3
          .titulo-sexto.color-acento-botones
            p.titulo.pb-0.mb-0 #[b Tabla 7.] #[i Marco Normativo para incentivar las Fuentes no Convencionales de Energía Renovable en Colombia] 
          table
            //caption Leyenda de la tabla
            thead
              tr
                th(style="width:25%") Documento
                th Descripción
            tbody
              tr
                th Ley 142 de 1994
                td Define los esquemas generales de regulación que deben cumplir las empresas de servicios públicos y el papel de las Comisiones de Regulación, incluida la libre competencia y eficiencia en la prestación de los servicios.
              tr
                th Ley 143 de 1994
                td Establece lineamientos para la integración vertical y regula el poder de mercado. Además, prohíbe explícitamente la entrega de excedentes de generación a la red eléctrica para autogeneradores.
              tr
                th Resolución CREG 085 de 1996
                td Reglamenta las actividades de cogenerador conectado al Sistema Interconectado Nacional (SIN); posteriormente, la Resolución CREG-032/01 realiza modificaciones a esta resolución.
              tr
                th Resolución 128 de 1996
                td Limita la participación accionaria en el capital de una empresa generadora o comercializadora, sobre una empresa distribuidora, y viceversa.
              tr
                th Ley 697 de 2001
                td Creó el Programa de Uso Racional y Eficiente de la Energía (PROURE) y demás formas de Energías No Convencionales.
              tr
                th Resolución CREG 060 de 2007
                td Establece normas sobre la participación en la actividad de generación de energía eléctrica.
              tr
                th Ley 1215 de 2008
                td Define la cogeneración como la producción combinada de energía eléctrica y energía térmica que hace parte integrante de su actividad productiva.
              tr
                th Resolución CREG 097 de 2008
                td Aprueba los principios generales y la metodología para el establecimiento de los cargos por uso del Sistema de Transmisión Regional (STR) y los Sistemas de Distribución Local (SDL).
              tr
                th Ley 1715 de 2014
                td Regula la integración de las energías renovables no convencionales al sistema energético nacional y se establecen diferentes incentivos. También permite la entrega de excedentes a la red.
              tr
                th Decreto MME 2143 
                td Agrega el Decreto Único Reglamentario 1073 de 2015 sobre los lineamientos de aplicación de incentivos de la Ley 1715 de 2014.
              tr
                th Decreto MME 2469 de 2014
                td Establece los lineamientos de política energética en materia de entrega de excedentes autogeneración.
              tr
                th Resolución CREG 038 de 2014
                td Modifica el Código de Medida contenido en el anexo general del Código de Redes.
              tr
                th Resolución UPME 281 de 2015 
                td Especifica el límite máximo de autogeneración a pequeña escala a 1 MW.
              tr
                th Resolución CREG 024 de 2015
                td Regula la actividad de autogeneración a gran escala.
              tr
                th Resolución CREG 227 de 2015
                td Define la metodología para determinar la energía firme de plantas solares FV.
              tr
                th Resolución Ministerio de Ambiente 1312 de 2016
                td Se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental - EIA, requerido para el trámite de la licencia ambiental de proyectos de uso de fuentes de energía eólica continental y se toman otras determinaciones.
              tr
                th Resolución Ministerio de Ambiente 1283 de 8 agosto de 2016
                td Se establece el procedimiento y requisitos para la expedición de la certificación de beneficio ambiental por nuevas inversiones en proyectos de fuentes no convencionales de energías renovables – FNCER y gestión eficiente de la energía, para obtener los beneficios tributarios de que tratan los artículos 11, 12, 13 y 14 de la Ley 1715 de 2014 y se adoptan otras determinaciones.
              tr
                th Decreto MME 348 de 2017 
                td Establece los lineamientos de política pública en materia de gestión eficiente de la energía y entrega de excedentes de autogeneración a pequeña escala (0,1 MW).
              tr
                th Resolución CREG 030 de 2018 
                td Regula las actividades de autogeneración a pequeña y gran escala y de generación distribuida en el Sistema Interconectado Nacional (SIN).
              tr
                th Resolución CREG 038 de 2018 
                td Establece las reglas para la actividad de autogeneración en las Zonas No Interconectadas (ZNI).
              tr
                th Resolución MME 40072 de 2018
                td Implementación de la Infraestructura en Medición Avanzada (AMI, por sus siglas en inglés) en el Sistema Interconectado Nacional (SIN).
              tr
                th Resoluciones MME 40791 y 40795 de 2018
                td Abren la convocatoria para la primera subasta de contratos de largo plazo de energía eléctrica (a 10 años), la cual busca incentivar la instalación de FNCER.
              tr
                th Resoluciones CREG 103 y 104 de 2018
                td Abren la subasta para la asignación de las Obligaciones de Energía Firme del Cargo por Confiabilidad para el período comprendido entre el 1 de diciembre de 2022 y el 30 de noviembre de 2023.
              tr
                th Resolución CREG 098 de 2019
                td Establece las condiciones para la incorporación de sistemas de almacenamiento con baterías en el SIN.
              tr
                th Resoluciones MME 40590 y 40591 de 2019
                td Establecen los procedimientos para el desarrollo de subastas de energía renovable no convencional, reemplazando la 40791 de 2018.
              tr
                th Ley 1955 de 2019
                td Establece que entre un 8 y 10 % de las compras de energía de los comercializadores deben ser de fuentes de energía renovables no convencionales.
              tr
                th Resolución CREG 137 DE 2020
                td Por la cual se ordena hacer público un proyecto de resolución ´Por la cual se define la fórmula tarifaria general para establecer la remuneración de la prestación del servicio de energía eléctrica mediante Soluciones Individuales Solares Fotovoltaicas’
              tr
                th Resolución UPME 203 de 2020
                td Establece los requisitos y el procedimiento para acceder a los beneficios tributarios en inversiones, en investigación, desarrollo o producción de energía a partir de Fuentes No Convencionales de Energía- FNCE.
              tr
                th Ley 2099 de 2021
                td 
                  p Ley de Transición Energética por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones. Establece priorización de los trámites ambientales para proyectos del sector de energía que cumplan ciertas condiciones.
                  p Esta ley modifica algunos artículos de la Ley 1715, con el objeto de modernizar la legislación vigente y dictar otras disposiciones para la transición energética.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-7.col-lg-7(data-aos="fade-left")
        p Estas normas abarcan asuntos relacionados con el mercado y la libre competencia para generar electricidad, mecanismos, lineamientos, actividades y otras consideraciones relacionadas con la generación por fuentes renovables, hasta beneficios tributarios y subastas de energía. 
        p Ahora bien, es a partir de la publicación de la Ley 1715 que comienza la regulación de la integración de las fuentes renovables y sostenibles en el país y que se marca la pauta para el proceso que se ha observado en los años recientes en materia de diversificación de la matriz energética de Colombia. 
      .col-11.col-md-5.col-lg-5.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-03.png', alt='')  


    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Invierta y gane con Energía
                  p.text-small Guía práctica para la aplicación de los incentivos tributarios de la Ley 1715 de 2014.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.socialsolar.com.co/wp-content/uploads/2018/09/Incentivos-Tributarios.pdf" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link


    .row.justify-content-center.align-items-center.mb-5(style="background-color:#D3E7F7")
      .col-10.col-md-4.col-lg-3.p-2(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')  
      .col-12.col-md-8.col-lg-9.mb-md-0(data-aos="fade-left")
        p.mb-md-0 El objetivo de esta ley es impulsar principalmente la utilización de las Fuentes No Convencionales de Energía Renovable y su inclusión en el mercado eléctrico. 


    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down")
        .cajon.color-acento-botones.p-4.mb-4.mb-md-0
          p Mediante la Ley 1715, se establecieron una serie de incentivos para favorecer la integración de las energías renovables. Son incentivos indirectos y principalmente corresponden a: la reducción al impuesto de renta, exención de IVA y aranceles, y depreciación acelerada de activos. 
    

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Estructura de la Ley 1715 de 2014] 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-04.svg', alt='') 
          figcaption Nota. GD: Generación Distribuida, AGPE: Autogeneración a Pequeña Escala, SIN: Sistema Interconectado Nacional, ZNI: Zonas No Interconectadas


    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Análisis de los incentivos económicos en la capacidad instalada de energía solar fotovoltaica en Colombia, disponible en el enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.redalyc.org/journal/1552/155262601002/html/" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link


    .row.justify-content-center.align-items-center.mb-5(style="background-color:#D3E7F7")
      .col-10.col-md-4.col-lg-3.p-2(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')  
      .col-12.col-md-8.col-lg-9.mb-md-0(data-aos="fade-left")
        p.mb-md-0 Además, la ley permitió la creación del Fondo de Energías No Convencionales y Gestión Eficiente de la Energía (FENOGE), a través del cual se pretende gestionar el financiamiento y el fomento de proyectos de autogeneración y eficiencia energética. Los capítulos, decretos y resoluciones que soportan la estructura de esta Ley se pueden observar en la anterior figura. 

        
    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down")
        .cajon.color-acento-botones.p-4.mb-4.mb-md-0
          p Cabe destacar que el marco normativo y regulatorio ha sido importante para lograr avances en la integración de proyectos renovables y mostrar un panorama alentador en el sector. 
    

    .row.justify-content-center.align-items-center.mb-5(style="background-color:#0F58B9")
      .col-12.col-md-7.col-lg-7.mb-md-0.texto-blanco(data-aos="fade-left")
        p Ejemplo de ello es el porcentaje de participación de proyectos de energías renovables registrados en la Unidad de Planeación Minero Energética (UPME), que en 2019 sumaban 392 proyectos de energía solar, 19 proyectos de energía eólica y 14 proyectos de biomasa, para generar 5.339 MW, 2.747 MW y 59 MW, respectivamente.
      .col-10.col-md-5.col-lg-4.p-2(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-05.png', alt='')  

        
    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Panorama energético de Colombia, disponible en el enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.bancolombia.com/empresas/capital-inteligente/especiales/especial-energia-2019/panomara-energetico-colombia" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    p.mb-2(data-aos="fade-left") Estas normas abarcan asuntos relacionados con el mercado y la libre competencia para generar electricidad, mecanismos, lineamientos, actividades y otras consideraciones relacionadas con la generación por fuentes renovables, hasta beneficios tributarios y subastas de energía.



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
