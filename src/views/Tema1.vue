<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Estructura tarifaria de los servicios de gas y de energía eléctrica en Colombia

    
    .row.mb-5(data-aos="fade-down")
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p En el presente recurso, se hará una breve explicación respecto a la composición y/o estructuras tarifarias de los servicios públicos, haciendo énfasis en el servicio gasodoméstico y de energía eléctrica. ¡Adelante!

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En Colombia, los servicios públicos domiciliarios corresponden a los servicios de acueducto, alcantarillado, aseo, telecomunicaciones, energía eléctrica y gas combustible (distribuido por redes o en cilindros y tanques).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las empresas prestadoras calculan el costo unitario aplicado al usuario a partir de fórmulas tarifarias que han sido establecidas por las Comisiones de regulación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Estas entidades fueron creadas en 1994, mediante la Ley 142, y se encargan de reglamentar la prestación de los servicios públicos, garantizar la competencia y atender las necesidades de los usuarios y de las empresas prestadoras.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las compañías que prestan los servicios utilizan las fórmulas definidas por la comisión que les aplique y determinan sus tarifas, las cuales deben reportar a la Superintendencia de Servicios Públicos Domiciliarios (Superservicios), entidad que inspecciona y vigila la prestación de los servicios por parte de las compañías y además vela por los derechos y el cumplimiento de los deberes de los usuarios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las empresas que no utilizan las fórmulas de la comisión también deben reportar las tarifas que han fijado, tanto a la comisión como a Superservicios; los reportes se realizan cada mes en una plataforma virtual llamada Sistema Único de Información (SUI). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los servicios públicos en los que se enfoca este módulo son los relacionados con el sector energético, es decir, energía eléctrica y gas, y es la Comisión de Regulación de Energía y Gas (CREG) la entidad que aprueba y establece las fórmulas para deducir la tarifa aplicada a los usuarios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 CREG
                  p.text-small Puede conocer más acerca del rol de la CREG dentro del sector energía en el siguiente  video: 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=9AB6BtNTM5s" target="_blank")
                    span Ver video
                    i.fas.fa-video

      .col-12(data-aos="fade-right")
        p Para empezar, observe en qué consiste el servicio combustible de gas domiciliario.

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-botones
        strong.px-2 Servicio de gas por redes de tubería

    p.mb-4(data-aos="fade-down") De acuerdo con la Ley 142 de 1994, este servicio comprende las actividades que son necesarias para el suministro de gas combustible al consumidor final. Existen dos modalidades de prestación del servicio: la distribución de gas por redes de tubería y la distribución de Gas Licuado de Petróleo (GLP) en cilindros o a granel y tanques estacionarios. El servicio de gas combustible por redes consiste en llevar Gas Natural (GN) o GLP mediante ductos a los diferentes lugares donde se encuentre el usuario final. 

    p.mb-4(data-aos="fade-left") La cadena de valor del servicio de gas por redes está compuesta por las siguientes actividades:


    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      PasosB.color-acento-contenido
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Producción
            p Como su nombre lo indica, es la etapa en la cual se produce el gas extraído de los depósitos profundos bajo tierra. 
            p En Colombia, existen dos grandes yacimientos de gas, ubicados en la alta Guajira y en Cusiana, Yopal.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Transporte 
            p Consiste en conducir el gas a alta presión por tuberías de acero (gasoductos), desde las plantas de procesamiento, hasta estaciones ubicadas cerca de las ciudades y consumidores de grandes cantidades. En Colombia el conjunto de gasoductos instalados, se conoce como Sistema Nacional de Transporte (SNT), Y son dos los sistemas de transporte principales; uno localizado en el Caribe y otro en el interior del país. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Distribución 
            p Es el transporte del gas por gasoductos de mediana y baja presión, desde las estaciones que se encuentran a las entradas de las ciudades hasta las conexiones del consumidor final.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Comercialización 
            p Consiste en la compra y venta de gas. Incluye también la medición del consumo y actividades administrativas (facturación, recaudo, mercadeo y atención a los consumidores). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')

    p.mb-5(data-aos="fade-left") Antes de continuar, es importante mencionar que el mercado del gas está conformado por los usuarios y los agentes de mercado. Los usuarios son personas naturales o jurídicas, y, a su vez, se clasifican en regulados y no regulados:

    .tarjeta--container.row.mb-5(data-aos="flip-down")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='')
        h2.text-center Pequeñas industrias
        p Un usuario es regulado si su consumo diario es menor que 100.000 pies cúbicos (ft3) o el aproximado en metros cúbicos (m#[sup 3]). Hacen parte de este grupo las pequeñas industrias y comercios y los consumidores del sector residencial. 
      .col-md.tarjeta.tarjeta--gris.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
        h2.text-center Grandes industrias
        p Un usuario es no regulado si su consumo por día es mayor que 100.000 pies cúbicos (ft3) o el aproximado en metros cúbicos (m#[sup 3]). Hacen parte de este grupo las grandes industrias y comercios, y las centrales de generación termoeléctricas.

    p.mb-4(data-aos="fade-left") El valor de la factura del servicio de gas por redes refleja los costos de cada una de las actividades de la cadena mencionada previamente.

    p.mb-4(data-aos="fade-left") Para empezar, observe en qué consiste el servicio combustible de gas domiciliario.

    p.mb-5(data-aos="fade-left") Por su parte, los agentes son las empresas que realizan las actividades de la cadena y proveen de gas a los diferentes consumidores, es decir: 


    .row.justify-content-center.mb-5(data-aos="flip-left")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-13.svg', alt='')


    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Mapa del gas de Colombia
                  p.text-small Acceda al siguiente enlace, en donde podrá consultar el mapa de la cadena de gas natural de Colombia, del Ministerio de Minas y Energía y la Unidad de Planeación Minero Energética, disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://www.upme.gov.co/Docs/Chain_Gas_Natural.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Fórmula tarifaria
    
    p(data-aos="fade-right") La tarifa cobrada por la prestación del servicio público de gas por red refleja los costos de cada una de las actividades de la cadena del energético, es decir: producción, transporte, distribución y comercialización. 
    p.mb-5(data-aos="fade-right") En otras palabras, refleja los costos de operación de infraestructura en los que incurren las compañías prestadoras del servicio, así como costos de administración y mantenimiento.


    .row.justify-content-center.align-items-center.p-4.mb-5.cuadro-1(data-aos="fade-down") 
      .col-12
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | El Costo Unitario Variable, CUv, se expresa en función del volumen de gas consumido ($/m#[sup 3]). El Costo Unitario Fijo, CUf, se relaciona con la disponibilidad permanente del servicio independiente del consumo; se expresa en $/factura.
      .col-12.col-lg-10.col-md-11.text-center 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='')
      .col-12.mt-5
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | La fórmula del componente variable del costo unitario es la siguiente:
      .col-12.col-lg-7.col-md-10.text-center 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.svg', alt='')
      .col-12.mt-5
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Donde:
      .col-12.mb-2
        .px-3
          p.mb-0 #[strong G] = es el costo del gas, en $/m#[sup 3].
          p.mb-0 #[strong T] = es el costo del transporte, en $/m#[sup 3].
          p.mb-0 #[strong p] = es el porcentaje de pérdidas del sistema de distribución.
          p.mb-0 #[strong D] = es el cargo por distribución, en $/m#[sup 3].
          p.mb-0 #[strong f#[sub pc]] = es el factor del poder calorífico del gas.
          p.mb-0 #[strong C#[sub v]] = es el componente variable del costo de comercialización, en $/factura. Actualmente es cero.
          p #[strong C#[sub c]] = es el componente de confiabilidad, que actualmente es cero.
      .col-12.mb-2
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Por su parte, el componente fijo del costo unitario corresponde a:
      .col-12.mb-5
        .px-3
          p.mb-0 #[strong CU#[sub f] = C#[sub f]] Donde, C<sub>f</sub> es el componente fijo del costo de comercialización.

    .row.justify-content-center.align-items-center.mb-3
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-1 Par ampliar más en detalle esta información, lo invitamos a consultar el enlace relacionado con: 
                  h4.mb-1 ¿Cómo se determina el valor de la factura de gas por redes de tubería?
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://creg.gov.co/publicaciones/15245/como-se-determina-el-valor-de-la-factura-del-servicio-de-gas-por-redes-de-tuberia/" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    p.mb-4(data-aos="fade-left") Así pues, el costo total de prestación del servicio reflejado en la factura mensual del usuario se define a partir de la suma de: el componente variable unitario (CU#[sub v]) multiplicado por el consumo del mes y el componente fijo (CU#[sub f]). Ahora bien, este costo puede variar debido a los siguientes factores:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-16.svg' alt='')
        h4.text-center Tasa Representativa del Mercado (TRM): 
        p.text-center Impacta las actividades de producción y transporte. El productor de gas cobra en dólares. El costo del transporte incluye una fracción que está fijada en dólares. 
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-17.svg' alt='')
        h4.text-center Precio del gas: 
        p.text-center Que variará según las condiciones establecidas en los contratos de compra de gas pactados por los comercializadores. 
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-18.svg' alt='')
        h4.text-center Las características de los contratos de compra y transporte de gas:
        p.text-center Que suscriben los comercializadores también influyen en los costos del transporte.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-19.svg' alt='')
        h4.text-center La fuente de suministro y el recorrido: 
        p.text-center Impactan al transporte puesto que el origen o fuente de suministro del gas puede cambiar y la distancia que se debe recorrer puede incrementarse, aumentando los costos de transporte. 
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-20.svg' alt='')
        h4.text-center Variación en Índice de Precios del Productor (IPP) e Índice de Precios al Consumidor (IPC): 
        p.text-center Impacta la distribución y comercialización.


    .row.justify-content-center.align-items-center.mb-3
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center.mb-3
                .col.mb-3.mb-sm-0
                  p.text-small.mb-1 Para ampliar más en detalle esta información, lo invitamos a consultar el enlace relacionado con:
                  h4 El índice de precios del productor (IPP)
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-del-productor-ipp" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-1 Par ampliar más en detalle esta información, lo invitamos a consultar el enlace relacionado con: 
                  h4.mb-1 El índice de precios del consumidor (IPC)  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-al-consumidor-ipc" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

      
    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Modalidad de prestación del servicio

    p.mb-4(data-aos="fade-left") Finalmente, es importante mencionar que el gas combustible por redes se puede suministrar de las siguientes maneras:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg.md-5.mb-lg-0.card-group
        .card(data-aos="fade-right")
          .card-header.color-primario.d-flex.justify-content-center.align-items-center
            h4.my-2.text-center La modalidad Gas Natural GS
          .card-body.color--gris-a
            p.text-small Es la tradicional, en la que el combustible se conduce por gasoductos desde un pozo de producción hasta las estaciones (puerta de ciudad); luego, las comercializadoras se encargan de entregarlo a los usuarios.
        .card(data-aos="fade-down") 
          .card-header.color-secundario.d-flex.justify-content-center.align-items-center
            h4.my-2.text-center La modalidad Gas Natural Comprimido GNC
          .card-body.color--gris-b
            p.text-small Involucra compresión y almacenamiento del gas en un envase a presión. Su traslado por carretera a estaciones de descompresión y distribución a usuarios finales por tubería. El costo de transporte suma la compresión y descompresión del gas. El GNC también se destina para uso vehicular.
        .card(data-aos="fade-left") 
          .card-header.color-primario.d-flex.justify-content-center.align-items-center
            h4.my-2.text-center La modalidad Gas Licuado de Petróleo GLP 
          .card-body.color--gris-a
            p.text-small La modalidad GLP contempla la prestación del servicio utilizando estaciones con una capacidad determinada. El GLP se suministra en camiones a las estaciones de almacenamiento desde la fuente de producción. Posteriormente, desde la estación, se lleva hasta los usuarios residenciales.

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Tarifa

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-6.col-12
        p El término tarifa, según la Resolución CREG 186 de 2010, se refiere al cobro que se efectúa al usuario de acuerdo con su clasificación socioeconómica. En otras palabras, es el resultado de aplicar un subsidio o una contribución al costo unitario de la prestación del servicio, según el tipo de usuario y el estrato al que pertenezca, como se ve en la imagen.
        p Así pues, usuarios de estratos 1 y 2 reciben una ayuda económica (subsidio) y los de estratos 5 y 6 deben hacer un aporte (contribución). Los usuarios de estratos 3 y 4 no reciben subsidios ni pagan contribución. Recordemos que CU es el Costo Unitario de Prestación del Servicio, en $/m#[sup 3] y $/factura, y se obtiene al aplicar las fórmulas tarifarias.
      .col-md-6.col-12
        .titulo-sexto.color-acento-botones.mt-3
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Valores y tarifas.</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-21.svg', alt='')
    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Subsidios y contribuciones

    .row.justify-content-center.mb-4
      .col-md-5.col-12(data-aos="fade-left")
        p Los subsidios y contribuciones son factores que también influyen en el valor de la tarifa final cobrada al usuario. La regulación de energía y gas indica que para usuarios residenciales de estratos 1 y 2 se otorgan subsidios. El porcentaje de auxilio conferido se aplica a un volumen de gas que se denomina consumo básico o de subsistencia, cuyo valor es de 20 m#[sup 3] para gas natural y 7,26 m#[sup 3] para GLP.
      .col-md-7.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Porcentaje de subsidio otorgado a usuarios residenciales de Estratos 1 y 2.</i>
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Estrato
                th % Máximo de Subsidio
            tbody
              tr
                td.text-center 1
                td.text-center 60%
              tr
                td.text-center 2
                td.text-center 50%

    .row.justify-content-center.mb-4
      .col-md-7.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Porcentaje de contribución de usuarios residenciales de Estratos 5 y 6 y no residenciales.</i>
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Estrato
                th % Máximo de Subsidio
            tbody
              tr
                td.text-center 5 y 6
                td.text-center 20%
              tr
                td.text-center No residenciales
                td.text-center 8.9%
      .col-md-5.col-12(data-aos="fade-right")
        p El porcentaje máximo de subsidio para estrato 1 es 60% y 50% para el estrato 2. Por otro lado, los usuarios residenciales de estrato 5 y 6 deben hacer un aporte o contribución que corresponde al 20%. Mientras que para los usuarios comerciales es del 8.9%. Estos factores son calculados a partir del valor del servicio (consumo y costo fijo).


    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Teniendo en cuenta lo anterior:
                  p.text-small A continuación, se presentan dos ejemplos de facturas del servicio público domiciliario de gas natural con los detalles que permitirán comprender los cargos aplicados. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.surtigas.com.co/conoce-tu-factura " target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link
                  br
                  a.boton.color-acento-botones.my-2(href="http://apps.pacifica.co/epmfactura/?hash=gas" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-botones
        strong.px-2 Servicio de Gas Licuado de Petróleo (GLP) por cilindros y/o a granel

    p.mb-4(data-aos="fade-right") De acuerdo con la Ley 142 de 1994, una de las formas de prestación del servicio de gas combustible es la distribución de Gas Licuado de Petróleo (GLP) en cilindros o a granel (mediante tanques estacionarios). La cadena de valor del servicio está compuesta por: suministro o comercialización mayorista, transporte, distribución y comercialización minorista.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema1-22.svg', alt='')
          .tarjeta.color-secundario.p-3(x="70%" y="42%" numero="1")
            p #[strong Suministro o comercialización mayorista:] es la compra del GLP al por mayor y a granel, para posteriormente almacenarlo y entregarlo al consumidor final. Puede ser de origen nacional o importado.
          .tarjeta.color-secundario.p-3(x="17%" y="18%" numero="2")
            p #[strong Transporte:] es la conducción del GLP mediante ductos, desde la fuente de suministro hasta los diferentes terminales de salida de transporte.
          .tarjeta.color-secundario.p-3(x="33%" y="75%" numero="3")
            p #[strong Distribución:] consiste en varias actividades. Incluye trasladar el GLP desde las plantas de producción (sitio de entrega) o los terminales de salida del transporte hacia estaciones de envasado, operar las plantas de envasado y embalaje del GLP en cilindros. Los cilindros se pueden entregar luego ya sea a un comercializador minorista o puntos de venta. La distribución también incluye la tarea de suministrar el GLP a granel, mediante tanques estacionarios en las instalaciones de los usuarios, además de la venta de cilindros en lugares destinados para ello.
          .tarjeta.color-secundario.p-3(x="60%" y="70%" numero="4")
            p #[strong Comercialización minorista:] se refiere a la actividad de entrega de GLP en cilindros en la ubicación del consumidor. El GLP envasado se comercializa de manera directa con el usuario y el valor cobrado dependerá del tamaño del cilindro de su preferencia.

    p.mb-4(data-aos="fade-right") Teniendo claro los anteriores conceptos, a continuación, se ilustra acerca de la fórmula utilizada para calcular la tarifa del costo unitario en el servicio de GLP y el subsidio aplicable de acuerdo con la Ley 142 de 1994. 

    .row.justify-content-center.align-items-center.p-4.mb-4.cuadro-1(data-aos="fade-down") 
      .col-12
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Similar al gas por redes, el Costo Unitario (CU) de prestación del servicio de GLP refleja los costos que asumen las empresas prestadoras. La fórmula tarifaria aplicable al servicio de distribución y comercialización minorista de GLP por cilindros y tanques estacionarios fue establecida mediante la Resolución CREG 180 de 2009, y se detalla a continuación:

      .col-12.texto-grande 
        .h1.text-center CU  = G + T + D + C
      .col-12
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Donde:
      .col-12.mb-2
        .px-3
          p.mb-0 #[strong G] = costo de la compra de GLP, en $/kg.
          p.mb-0 #[strong T] = costo del transporte a través de ductos, en $/kg.
          p.mb-0 #[strong D] = costo de distribución, en $/kg. El distribuidor puede hacer uso de varios mecanismos de distribución: #[strong i.] En cilindros para abastecer a un comercializador minorista, #[strong ii.] En cilindros para venta en un lugar destinado para ello, #[strong iii.] En tanques estacionarios para suministrar a los consumidores finales.
          p.mb-0 #[strong C] = costo de comercialización, en $/kg.
      .col-12.mt-4
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Lo cual representa:

      .col-md-10.col-12.texto-grande
        .h2.text-center CU  = G + T + D + C
      .col-12
        .row.mt-3
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 G
              p.text-center 
                b Comercialización mayorista 
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de compra de GLP al por mayor  ya sea importado, a través de refinerías o campos de producción nacionales.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-23.svg', alt='')

          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 T
              p.text-center 
                b Transporte por ductos
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de transporte del GLP por ductos desde los puntos de producción o importación hasta los puntos de entrega al sistema  de transporte.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-24.svg', alt='')

          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 D
              p.text-center 
                b Distribución 
              .row.justify-content-center.align-items-center
                .col-12.col-md-7
                  p Costo de llevar el GLP a granel  desde el punto de producción o los puntos de entrega  del sistema de transporte hasta las plantas de envasado, el proceso de operar estas plantas , asi como de envasar el GLP en cilindros.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-25.svg', alt='')

          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 Cd
              p.text-center 
                b Comercialización minorista 
              .row.justify-content-center.align-items-center
                .col-12.col-md-7
                  p Costo de vender, entregar y atender a los usuarios finales, bien sea a domicilio o en puntos de venta. 
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-26.svg', alt='')
      .col-12
        p.text-small #[strong Nota.] Tomada de Comisión de Regulación de Energía y Gas. ¿CÓMO SE DETERMINA EL VALOR DE LA FACTURA DE DEL GLP EN CILINDROS? p. 2.  

    Separador

    p(data-aos="flip-down") Así pues, los cilindros de GLP se comercializan en diferentes presentaciones a nivel nacional, que son principalmente las siguientes: 10 libras, 15, 20, 30, 40, 80 y 100. En el siguiente recurso gráfico encontrará explicación a este respecto: 


    .row.justify-content-center.align-items-center.mt-4
      .col-12.col-md-5.col-lg-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-27.svg', alt='')
      .col-12.col-md-7.col-lg-8
        .row.cuadro-2.px-3.py-2(data-aos="fade-left")
          p En el caso de los tanques estacionarios, son recargados en sitio. Si el servicio de GLP es ofrecido en cilindros, el precio final que paga el consumidor se calcula de acuerdo con el tamaño, en este caso, el peso (en kg) del cilindro adquirido. 
        .row.cuadro-2.px-0.mt-2(data-aos="fade-left")
          .col-auto.py-2.px-2.align-self-stretch.align-items-center.d-flex
            span.mt-2.px-3.texto-blanco ¿Sabía qué?
          .col.py-2.px-3
            span Por ejemplo, si el usuario compra un cilindro de 40 libras (18 kg), el costo total se estima multiplicando los kilos por el costo unitario, teniendo en cuenta que el peso del cilindro se debe sustraer.

    p.mt-5.mb-5(data-aos="fade-down") A continuación, se presentan los valores promedio de los diferentes tipos de cilindros de GLP en los primeros meses de 2021 en Colombia. Estos precios son reportados en un boletín tarifario emitido por Superservicios.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Valor promedio del cilindro de GLP en Colombia durante el primer trimestre de 2021.
                  p.text-small.mb-1 BOLETÍN TARIFARIO GAS LICUADO DE PETRÓLEO. p. 20.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.superservicios.gov.co/sites/default/files/inline-files/BOLETIN-TARIFARIO-GLP-2022-II-TRIMESTRE%20%281%29.pdf" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-12.col-md-4.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-28.svg', alt='')
      .col-12.col-md-8.col-lg-9
        p(data-aos="fade-left") Para la definición de una tarifa aplicable al servicio de GLP en cilindros y tanques estacionarios, no se aplican los subsidios y contribuciones como lo indica la Ley 142 de 1994.
        p(data-aos="fade-left") El Ministerio de Minas y Energía, mediante la Resolución 40720 de 2016, estableció las pautas para la aplicación de subsidios a consumidores residentes en los departamentos de Caquetá, Nariño, Putumayo y San Andrés, Providencia y Santa Catalina. Incluye también poblaciones indígenas y consumidores pertenecientes a los estratos 1 y 2 que residan en áreas rurales del Departamento del Cauca y que hagan parte de territorio protegido por el Sistema de Parques Nacionales Naturales. 
        .row.cuadro-2.px-0.mt-2(data-aos="fade-left")
          .col-auto.py-2.px-2.align-self-stretch.align-items-center.d-flex
            span.mt-2.px-3.texto-blanco ¡Recuerda!
          .col.py-2.px-3
            span Por otro lado, respecto a contribuciones, estas no aplican en el caso del servicio de GLP en cilindros y a granel.

    Separador 

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-botones
        strong.px-2 Servicio de energía eléctrica

    p.mb-5(data-aos="fade-right") El servicio público domiciliario de energía eléctrica comprende las actividades que son necesarias para suministrar electricidad a cada domicilio mediante el uso de redes eléctricas. En términos generales, la cadena del servicio de energía está compuesta por las siguientes actividades: generación, transmisión, distribución, comercialización y administración.

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-lg-8.col-md-10.cuadro-2.py-3.px-3(data-aos="fade-down")
        SlyderE(indicadores="derecha")
          .row
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')
            .col-12.mb-4.mb-md-2.mt-3
              h4.text-center Generación
              p Es el proceso de transformar un tipo de energía primaria en energía eléctrica. Las principales formas de generar electricidad en Colombia son: #[strong hidroeléctrica], aprovechando el caudal de los ríos, y #[strong térmica], utilizando gas, carbón u otro derivado del petróleo. También se puede generar electricidad a partir del aprovechamiento del viento, la luz solar, la biomasa, entre otros.
          .row
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-30.png', alt='')
            .col-12.mb-4.mb-md-2.mt-3
              h4.text-center Transmisión
              p Consiste en transportar la energía eléctrica desde las plantas de producción (o generación) o las centrales de generación hasta la entrada de las ciudades y poblaciones en el territorio nacional.
          .row
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
            .col-12.mb-4.mb-md-2.mt-3
              h4.text-center Distribución
              p Es llevar la energía eléctrica hasta los sitios de consumo, es decir, hasta el usuario final: hogares, escuelas, fábricas, hospitales, etc.
          .row
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
            .col-12.mb-4.mb-md-2.mt-3
              h4.text-center Comercialización
              p Consiste en la compra y venta de la energía eléctrica. Incluye la medición del consumo, facturación, atención a los consumidores, entre otras actividades, principalmente, de índole administrativa.



    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-33.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El mercado de energía eléctrica está conformado por los usuarios y los agentes de mercado. Los usuarios son personas naturales o jurídicas, y, a su vez, se clasifican en regulados y no regulados. De acuerdo con el Artículo 11 de la Ley 143 de 1994, un usuario regulado es aquel cuyo consumo de electricidad está sujeto a tarifas definidas por la CREG. 
          br
          br
          | Hacen parte de este grupo las pequeñas industrias, la mayoría de los comercios, entidades públicas, y los consumidores del sector residencial, clasificados por estratos. Por su parte, un usuario no regulado es aquel cuya demanda máxima es mayor que 2 MW. 

    p.mb-5(data-aos="fade-down") Ahora bien, la Resolución CREG 131 de 1998 estableció nuevos límites de energía o potencia, y para ser usuario no regulado, el comprador debe consumir mínimo 55.000 kWh cada mes o tener una demanda máxima por encima de 100 kW. En esta categoría, las compras de energía eléctrica se realizan a precios acordados libremente entre el usuario y el prestador de servicio, mediante contratos bilaterales. Hacen parte de este grupo los comercios y edificios de grandes superficies, por ejemplo, centros comerciales, edificios empresariales, grandes almacenes de cadena, entre otros; y la pequeña y mediana industria. 

    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-12.col-md-4.col-lg-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-34.svg', alt='')
      .col-12.col-md-8.col-lg-8
        .cuadro-2.px-3.py-3
          p.mb-0(data-aos="fade-left") Los agentes son los generadores, transportadores, distribuidores, comercializadores y administradores.
        
    p(data-aos="fade-down") De acuerdo con el artículo 11 de la Ley 143 de 1994, un usuario regulado es aquel cuyo consumo de electricidad está sujeto a tarifas definidas por la CREG. Hacen parte de este grupo las pequeñas industrias, la mayoría de los comercios, entidades públicas, y los consumidores del sector residencial, clasificados por estratos. Por su parte, un usuario no regulado es aquel cuya demanda máxima es mayor que 2 MW. 
    p.mb-5(data-aos="fade-down") Le invitamos a explorar el siguiente recurso, donde se ilustra acerca de la fórmula utilizada para calcular la tarifa del costo unitario en el servicio de energía, cómo se aplica la tarifa, y el subsidio y contribuciones aplicables de acuerdo con la Ley 142 de 1994.

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Fórmula tarifaria

    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-12.col-md-8.col-lg-8(data-aos="fade-left")
        p El Costo Unitario (CU) de prestación del servicio público de energía eléctrica refleja los costos de cada una de las actividades de la cadena del energético, es decir: #[strong generación, transmisión, distribución y comercialización], además de los costos relacionados con administración y uso del Sistema Interconectado Nacional (SIN), las pérdidas y transporte de energía, y costos debido a restricciones y servicios asociados con generación. 
        p La tarifa cobrada para usuarios regulados fue establecida mediante la Resolución CREG 119 de 2007.
      .col-12.col-md-4.col-lg-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')

    .row.justify-content-center.align-items-center.p-4.mb-5.cuadro-1(data-aos="fade-down") 
      .col-12(data-aos="fade-right")
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | La fórmula tarifaria incluye un componente variable y uno fijo. El Costo Unitario Variable, CU<sub>v</sub>, se expresa en función de la cantidad de kilovatios hora consumidos ($/kWh). El Costo Unitario Fijo, CU#[sub f], se relaciona con la disponibilidad del servicio y se expresa en $/factura. 
      .col-12.col-lg-10.col-md-11.text-center(data-aos="fade-right") 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-36.svg', alt='')
      .col-12.mt-5(data-aos="fade-right")
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | La fórmula del componente variable del costo unitario es la siguiente:
      .col-12.texto-grande(data-aos="fade-right")
        .h1.text-center CU#[sub v] = G + T + D + C + PR + R  
      .col-12(data-aos="fade-right")
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Donde:
      .col-12.mb-2(data-aos="fade-right")
        .px-3
          p.mb-0 #[strong G] = es el costo de compra de la energía, en $/kWh.
          p.mb-0 #[strong T] = es el costo del transporte de la energía a través del Sistema Interconectado Nacional, en $/kWh.
          p.mb-0 #[strong D] = es el costo de distribución, en $/kWh. Aplica para 4 diferentes tipos de niveles de tensión.
          p.mb-0 #[strong C] = es el componente variable del costo de comercialización, en $/factura.
          p.mb-0 #[strong PR] = es el costo de pérdidas de energía que ocurren en el sistema, en $/kWh.
          p.mb-0 #[strong R] = es el costo asumido para que el sistema opere de forma segura y óptima.
      .col-12.mb-2(data-aos="fade-right")
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Por su parte, el componente fijo del costo unitario corresponde a:
      .col-12.mb-2(data-aos="fade-right")
        .px-3
          p #[strong CU#[sub f] = C#[sub f]] Donde, C<sub>f</sub> es el componente fijo del costo de comercialización.
      .col-12
        p.mb-4(data-aos="fade-right") Componentes de la fórmula tarifaria del servicio de gas al usuario regulado.
      .col-md-10.col-12.texto-grande(data-aos="fade-right")
        .h2.text-center CU#[sub v] = G + T + D + C + PR + R
      .col-12
        .row.mt-3
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 G
              p.text-center 
                b Generación
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de producir energía mediante la utilización de diferentes fuentes. 
                  p Agua, gas, #[i diésel], carbón, viento, sol, entre otras.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-37.svg', alt='')
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 T
              p.text-center 
                b Transmisión
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de transportar energía desde los sitios de producción hasta la entrada a las regiones o sitios de  gran consumo.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-38.svg', alt='')
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 D
              p.text-center 
                b Distribución
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de llevar energía desde los sitios de entrada a las regiones hasta el domicilio del usuario final.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-39.svg', alt='')
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 C
              p.text-center 
                b Comercialización
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo de comprar y vender energía.
                  p Costos de facturación, lectura de medidores y atención a usuarios entre otros.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-40.svg', alt='')
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 PR
              p.text-center 
                b Perdidas reconocidas
              .row.justify-content-center.align-items-center 
                .col-12
                  p Las perdidas eficientes de energía eléctrica se dividen en técnicas y no técnicas.
                  p #[strong Las técnicas:] son aquellas que se producen de manera natural por el calentamiento de cables, transformadores , entre otros.
                  p #[strong Las no técnicas:] son producto de manipulaciones  fraudulentas. 
                  p #[strong En la tarifa no se reconocen todas las perdidas reales.] La fórmula permite que los usuarios  paguen solo una fracción eficiente.
          .col-md-6.mb-4.align-self-stretch(data-aos="fade-down")
            .tarjeta-numerada.color-acento-botones.p-4(style="height:100%")
              .tarjeta-numerada__numero
                .h2 R
              p.text-center 
                b Restricciones 
              .row.justify-content-center.align-items-center 
                .col-12.col-md-7
                  p Costo que se asume para mantener la continuidad del servicio cuando se presentan problemas al transportar la energía.
                .col-12.col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-41.svg', alt='')
      .col-12
        p.text-small #[strong Nota.] Tomada de Comisión de Regulación de Energía y Gas. ¿CÓMO SE DETERMINA EL VALOR DE LA FACTURA DE DEL GLP EN CILINDROS? p. 2.  

    p(data-aos="fade-left") Así pues, el costo total de prestación del servicio reflejado en la factura mensual del usuario se define al multiplicar el consumo en #[strong kWh] por el #[strong Costo Unitario (CU)]. El costo de prestación de servicio de energía eléctrica puede variar debido a los siguientes factores:

    .row.mt-5.mb-4
      .col-lg-4.col-md-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5.align-self-stretch
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-42.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Nuevas redes en operación, utilizadas para la prestación del servicio. 
      .col-lg-4.col-md-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5.align-self-stretch
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-43.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Reserva de agua y costo de los energéticos (carbón, gas natural) utilizados en las centrales de generación.
      .col-lg-4.col-md-4(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5.align-self-stretch
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-44.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p Variación en Índice de Precios del Productor (IPP) e Índice de Precios al Consumidor (IPC): Impacta la distribución y comercialización. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Para conocer más acerca de estos indicadores en los siguientes enlaces: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-del-productor-ipp" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link
                  br
                  a.boton.color-acento-botones.my-2(href="https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-al-consumidor-ipc" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Tarifa
    
    p.mb-4(data-aos="fade-left") La tarifa del servicio de energía eléctrica se ha establecido mediante la Resolución CREG 079 de 1997, como se observa a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-6.col-12
        .titulo-sexto.color-acento-botones.mt-2
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Tarifas aplicadas al usuario por el servicio energía eléctrica.</i>
        figure
          img(src='@/assets/curso/temas/tema1/tema1-45.svg', alt='')
          figcaption Nota. Tomada de https://creg.gov.co/publicaciones/7879/como-se-cobra/ 
      .col-md-6.col-12
        .cuadro-2.px-3.py-3
          p.mb-0 Los usuarios de estratos 1, 2 y 3 reciben una ayuda económica (subsidio) y los de estratos 5 y 6 deben hacer un aporte (contribución). Los usuarios de estrato 4 no reciben subsidios ni pagan contribución. Recordemos que CU es el Costo Unitario de Prestación del Servicio, en $/kWh, y se obtiene al aplicar las fórmulas tarifarias. 

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        strong.px-2 Subsidios y contribuciones

    .row.justify-content-center.mb-4
      .col-md-5.col-12(data-aos="fade-left")
        p El marco normativo que rige el sector de energía y gas indica que para usuarios residenciales de estratos 1, 2 y 3 se otorgan subsidios. El subsidio se otorga a una cantidad de kilovatios que se denomina consumo básico, cuyo valor varía de acuerdo con la altura sobre el nivel de mar a la que se encuentre el usuario, según lo estipulado en la Resolución 0355 de 2004 de la Unidad de Planeación Minero Energética (UPME). Los valores se muestran en la siguiente tabla:
      .col-md-7.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Consumo básico según alturas.</i>
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Altura sobre el nivel del mar (m)
                th Consumo básico de subsistencia(kWh)
            tbody
              tr
                td.text-center Mayor que 1000
                td.text-center 173
              tr
                td.text-center Igual o mayor que 1000
                td.text-center 130

    .row.justify-content-center.mb-4
      .col-md-5.col-12(data-aos="fade-left")
        p Así pues, el porcentaje máximo de subsidio para usuarios estrato 1 es 60%, para usuarios estrato 2, es 50% y para usuarios estrato 3, 15%. Usuarios clasificados como estrato 4 no reciben subsidios ni pagan contribución. Por otro lado, los usuarios residenciales de estrato 5 y 6 deben hacer un aporte o contribución que corresponde al 20%. Estos factores son calculados a partir del Costo Unitario (CU) o valor del servicio.
      .col-md-7.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 6. </b> <i>Porcentaje máximo de subsidio otorgado a usuarios residenciales de Estratos 1, 2 y 3.</i>
        .tabla-a.color-acento-botones.mb-4
          table
            thead
              tr
                th Estrato 
                th % Máximo de Subsidio
            tbody
              tr
                td.text-center 1
                td.text-center 60%
              tr
                td.text-center 2
                td.text-center 50%
              tr
                td.text-center 3
                td.text-center 15%

    p.mb-5(data-aos="fade-left") Teniendo en cuenta lo anterior, a continuación se presenta un ejemplo de factura del servicio público domiciliario de Energía Eléctrica con los detalles que permitirán comprender los cargos aplicados. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-8.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Ejemplo Factura del servicio público domiciliario de Energía Eléctrica.] 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-46.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Le invitamos a explorar algunos consejos para tener un consumo más eficiente de energía.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.enel.com.co/es/personas/servicio-al-cliente/energia-eficiente-consumo-invisible.html" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link
                    

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
