<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Estructura tarifaria de los servicios de gas y de energía eléctrica

    
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
        p Un usuario es regulado si su consumo diario es menor que 100.000 pies cúbicos (ft3) o el aproximado en metros cúbicos (m3). Hacen parte de este grupo las pequeñas industrias y comercios y los consumidores del sector residencial. 
      .col-md.tarjeta.tarjeta--gris.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
        h2.text-center Grandes industrias
        p Un usuario es no regulado si su consumo por día es mayor que 100.000 pies cúbicos (ft3) o el aproximado en metros cúbicos (m3). Hacen parte de este grupo las grandes industrias y comercios, y las centrales de generación termoeléctricas.

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
            | El Costo Unitario Variable, CUv, se expresa en función del volumen de gas consumido ($/m3). El Costo Unitario Fijo, CUf, se relaciona con la disponibilidad permanente del servicio independiente del consumo; se expresa en $/factura.
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
          p.mb-0 #[strong G] es el costo del gas, en $/m3
          p.mb-0 #[strong T] es el costo del transporte, en $/m3
          p.mb-0 #[strong p] es el porcentaje de pérdidas del sistema de distribución
          p.mb-0 #[strong D] es el cargo por distribución, en $/m3
          p.mb-0 #[strong f#[sub pc]] es el factor del poder calorífico del gas
          p.mb-0 #[strong C#[sub v]] es el componente variable del costo de comercialización, en $/factura. Actualmente es cero.
          p #[strong C#[sub c]]  es el componente de confiabilidad, que actualmente es cero.
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
