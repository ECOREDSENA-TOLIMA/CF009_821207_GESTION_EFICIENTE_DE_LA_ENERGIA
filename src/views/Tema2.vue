<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Integración de las energías renovables en Colombia

    .cajon-b.color-acento-botones.p-3.mb-3(data-aos="fade-left")
      p.mb-0 En la última década, el sector energético a nivel global ha sufrido grandes transformaciones, impulsadas principalmente por la evolución de las energías renovables y el crecimiento de la capacidad instalada. Adicionalmente, el consumo energético ha estado aumentando a raíz del crecimiento socioeconómico de los países y del aumento de la población mundial. 

    p.mb-5.px-3(data-aos="fade-left") Entre 2009 y 2019, la capacidad de las energías renovables se cuadruplicó, pasando de cerca de 414 GW a 1.630 GW. En 2019, la capacidad instalada de renovables, sin tener en cuenta la generación hidroeléctrica, creció aproximadamente 184 GW, un 12% por encima del incremento en 2018, siendo el mayor aumento registrado. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Evolución de la capacidad instalada global de las fuentes de energía renovable.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-01.svg', alt='')  
      .col-12.col-md-6(data-aos="fade-right")
        p Particularmente, la energía solar ha tenido un crecimiento sobresaliente, tanto en sistemas de gran escala como sistemas de generación distribuida y autogeneración. En la actualidad, las tecnologías renovables representan cerca de la tercera parte de la capacidad energética global.
        p En la figura, se observa que, entre 2009 y 2019, la capacidad instalada de energía solar aumentó de 22.8 a 583.8 GW, es decir, cerca de 2.600%. Los países que actualmente se consolidan con mayor capacidad instalada de sistemas de generación distribuida son China, Japón, Estados Unidos y Alemania. La energía eólica, por su parte, también tuvo un aumento competitivo, con un crecimiento de 148 GW en 2009 a 593.3 GW en 2019, equivalente al 400%. 

        
    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-left")
      p.mb-0 En la figura que se muestra a continuación, desde el 2009 hasta el 2019, la generación de energía eléctrica a partir de energía solar fotovoltaica creció desde 32.1 a 679 TWh, resultando en un aumento mayor al 3.000%. En el caso de la eólica, el crecimiento fue cerca del 500%.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Evolución de la generación de energía eléctrica global con energía renovable.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-02.svg', alt='')  
      .col-12.col-md-6(data-aos="fade-right")
        p Los principales impulsores del crecimiento de las fuentes renovables han sido: los incrementos en inversión de recursos monetarios para la introducción de fuentes renovables en la matriz energética mundial, los rápidos avances en la tecnología fotovoltaica, particularmente en eficiencia y manufactura de componentes, la disminución en los costos de fabricación y la creación de instrumentos y mecanismos como incentivos para promover la adopción de fuentes de energía renovable.

    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        span.px-2 Respecto a la energía renovable, es importante tener en cuenta:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="Inversión")
        .col-md-7.mb-4.mb-md-0
          p En los últimos años se ha invertido más en energías renovables que en combustibles fósiles y energía nuclear. Según los reportes de la Agencia Internacional de Energías Renovables (IRENA) y de Frankfurt School-UNEP Centre, entre 2004 y los años recientes, las inversiones pasaron de casi 50.000 millones de dólares a alrededor de 300.000 millones de dólares. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-03.png', alt='')
      .row(titulo="Energía solar")
        .col-md-7.mb-4.mb-md-0
          p Siendo la energía solar la tecnología con mayores niveles de inversión. En 2018, las inversiones en nuevas energías renovables se aproximaron a los 273.000 millones de dólares, triplicando las inversiones en energía de combustibles fósiles. Pese a esto, el apoyo financiero continúa estando por debajo del potencial de las inversiones. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='')
      .row(titulo="Transformación energética")
        .col-md-7.mb-4.mb-md-0
          p La transformación energética es una tarea de largo plazo y requerirá mayor inversión, bajo la premisa de que se implementen políticas e incentivos favorables, y así se puedan cumplir objetivos climáticos y de desarrollo. En la siguiente figura, se observan los países con mayor inversión en energías renovables en el mundo, destacándose la presencia de México, Brasil y Chile como países latinoamericanos.  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tendencias globales en inversión en energía renovable 2020
                  p.text-small Acceda al siguiente enlace, en donde podrá consultar sobre las tendencias de inversión de manera global, así como los países que más invierten en energías renovables, disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://fs-unep-centre.org/global-trends-in-renewable-energy-investment-2020/" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    p.mb-4(data-aos="fade-right") Es importante mencionar que la demanda global de energía va en aumento, por consiguiente, se necesitarán mayores inversiones para que continúe el despliegue comercial y tecnológico de las renovables y la satisfacción de la demanda. En la actualidad, la energía solar fotovoltaica y la eólica son las renovables por las que apuestan los inversores.

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-left")
      p.mb-0 A continuación, se presentan los antecedentes del panorama global del crecimiento de las fuentes de energía renovable, al igual que una descripción general del contexto nacional con respecto a la integración de estas fuentes de energía.


    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.col-lg-4.col-12.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')
      .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
        p Por otro lado, en cuanto a los costos de generación mediante energías renovables, especialmente la eólica y solar, la tendencia es a la disminución de estos, llegando a igualarse a los costos de algunas tecnologías de generación convencional. 
        p En 2019, los costos de la electricidad generada mediante energía solar fotovoltaica disminuyeron un 13%, alcanzando los 0,068 USD/kWh; mientras que la procedente de energía solar térmica (solar de concentración) se ubicó en 0,182 USD/KWh, cayendo un 1%. 
        p Por su parte, la eólica terrestre y en alta mar se redujeron un 9% y llegaron a los costos de 0,115 USD/kWh y 0,053 USD/KWh, respectivamente. 

    .row.justify-content-center.align-items-center.mb-4
      .col-12
        .cajon.color-primario.p-4.mb-4
          p En la siguiente figura, elaborada por la Agencia Internacional de Energías Renovables (IRENA), se observa el comportamiento de los costos de energía solar y eólica en los últimos años. La caída de los costos en energía solar fotovoltaica fue del 82% y 47% en energía solar térmica. En el caso eólico, el descenso fue de 39% y 29%, para terrestre y en alta mar, respectivamente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-9.col-lg-7(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Disminución de costos de tecnologías de energía renovable: solar y eólica.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-07.png', alt='')  


    .row.mb-4
      .col-12(data-aos="fade-right")
        i.fas.fa-play.color-acento-contenido
        span.px-2 Contexto colombiano


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-7(data-aos="fade-left")
        p En el contexto colombiano, también se ha evidenciado la implementación de proyectos de generación a partir de tecnologías renovables, como la solar fotovoltaica, solar térmica y la eólica. 
        p El país cuenta con una capacidad instalada aproximada de 17,2 GW, cantidad que en 2019 provino principalmente de generación hidráulica (68,3%); seguida de la generación térmica (gas y carbón principalmente), con un 30,7%; y por último, con cerca de 1%, de fuentes no convencionales de energía renovable (FNCER), distribuidas en solar, eólica y cogeneradores, como se observa en la figura. La generación total de energía en el país fue de 65.800 GWh en el mismo año. 
        p Si bien el país es privilegiado por su localización geográfica y cuenta con una matriz energética en la que predomina la generación mediante energía hidráulica, también posee potencial para explotar otras fuentes de energía, como la solar y la eólica (ver la siguiente figura).
      .col-12.col-md-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Matriz energética de Colombia en 2019.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-08.svg', alt='')  

    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-12.col-md-5(data-aos="fade-down")
    //-     .titulo-sexto.color-acento-contenido
    //-       p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Potenciales FNCER por fuente] 
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')  
    //-   .col-12.col-md-7(data-aos="fade-left")
    //-     p Si bien el país es privilegiado por su localización geográfica y cuenta con una matriz energética en la que predomina la generación mediante energía hidráulica, también posee potencial para explotar otras fuentes de energía, como la solar y la eólica (Ver la siguiente figura). 

    .row.justify-content-center.align-items-center.mb-5(style="background-color:#F9F7EC")
      .col-10.col-md-3.col-lg-2.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-09.svg', alt='')  
      .col-12.col-md-9.col-lg-10(data-aos="fade-left")
        p Según la Unidad de Planeación Minero Energética (UPME), en los próximos 10 años, se espera que el consumo de energía eléctrica supere los 70.000 GWh/año e incremente más del 2% anualmente, por lo cual la infraestructura energética del país requiere expandirse y, mediante nueva capacidad instalada, atender los incrementos.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La disponibilidad de las fuentes renovables, aún no aprovechadas, junto con la disminución considerable de los costos de electricidad renovable y el avance en las tecnologías relacionadas han permitido que la integración de energías renovables sea un asunto de relevancia en la agenda nacional. 
          br
          br
          | Por consiguiente, resulta necesario analizar los impactos que genera el aprovechamiento de los potenciales que se han identificado, ya que, para la correcta implementación de un proyecto de esta índole, se deben tener en cuenta aspectos económicos, políticos, técnicos, ambientales y sociales. 
 
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        p Desarrollar proyectos de energía renovable implica enfrentar desafíos relacionados con el marco institucional y normativo, el mercado, entre otros, que obstaculizan la adopción de fuentes renovables. Como se mencionó anteriormente, la producción de energía es principalmente a partir de generación hidroeléctrica, cuyo costo es menor que el de las térmicas.
        p Los precios de la energía en Colombia varían principalmente según el comportamiento del costo de generación, que está sujeto, en gran medida, a la hidrología del país, debido a la dependencia de la generación hidráulica dentro de la matriz energética nacional (aproximadamente del 70%). Existe, por tanto, un riesgo asociado a la generación hidroeléctrica.
      .col-10.col-md-4.col-lg-3.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-12.png', alt='')  


    .row.justify-content-center.align-items-center.mb-5(style="background-color:#D3E7F7")
      .col-10.col-md-4.col-lg-3.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')  
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        p En época de sequía o cuando disminuyen las lluvias y hay crisis como la que se vivió a causa del fenómeno de El Niño, el nivel de agua de los embalses se reduce, conllevando que se utilicen las plantas térmicas y aumenten los precios de la energía. Generar a partir de gas o carbón es más costoso.

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-14.svg', alt='')
        p Así pues, se genera un escenario de riesgo de escasez, y con ello, en las empresas crece la incertidumbre en la toma de decisiones para realizar inversiones. En ese contexto, el Gobierno ha decidido aumentar la capacidad instalada de renovables, esperando que para el 2030 su participación en la generación eléctrica nacional sea entre 13% y 15%.
      .col-md.tarjeta.tarjeta--azul.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-15.svg', alt='')
        p Una de las ventajas de impulsar la implementación de las renovables dentro de la matriz energética nacional es disminuir la dependencia de la generación a los fenómenos hidrológicos y así aportar a la estabilización del precio en bolsa del energético. A futuro, con la entrada de renovables dentro de la matriz energética, se espera que el precio de la energía no solo se estabilice, sino que pueda disminuir. 


    .row.justify-content-center.align-items-center.mb-3
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para conocer más acerca de la renovación de la matriz energética colombiana, le invitamos a explorar el escrito del Banco interamericano de desarrollo, disponible en el enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://blogs.iadb.org/energia/es/la-matriz-energetica-de-colombia-se-renueva/#:~:text=Colombia%20tiene%20una%20de%20las,Mega%2Dwatts%20(MW)" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    p(data-aos="fade-left") Podemos concluir que teniendo en cuenta las tendencias en costos y los potenciales de recursos energéticos renovables en Colombia, es posible pensar que el escenario está dado para el fomento de las tecnologías renovables y se espera que, mediante la formulación de políticas adecuadas, se favorezca su implementación.

</template>

<script>
export default {
  name: 'Tema2',
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
