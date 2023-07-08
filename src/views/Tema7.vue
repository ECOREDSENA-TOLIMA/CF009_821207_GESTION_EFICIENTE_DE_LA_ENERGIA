<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 7
      h1 Evaluación financiera de proyectos de energía renovable 

    p.mb-5(data-aos="fade-left") Observe, a continuación, qué implica tomar decisiones financieras para un proyecto de inversión de energía renovable.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Proyectos de energía renovable")
        .col-md-6.mb-4.mb-md-0
          p Cuando se habla de proyectos de energía renovable, en términos generales, se habla de proyectos de inversión que están formulados para la inclusión de las fuentes alternativas de energía.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-01.png', alt='')
      .row(titulo="Retos más importantes en proyectos de inversión")
        .col-md-6.mb-4.mb-md-0
          p Uno de los retos más importantes en proyectos de inversión es dar respuesta a interrogantes como: ¿Es viable el proyecto? ¿Se puede financiar? ¿Cómo se determina la viabilidad a partir de un flujo de caja? ¿Qué indicadores son los adecuados para hacer el análisis? En este capítulo, se mostrarán algunos conceptos básicos que permitirán dar respuesta a los anteriores interrogantes.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-02.png', alt='')
      .row(titulo="Proyectos de inversión")
        .col-md-6.mb-4.mb-md-0
          p Los proyectos de inversión pueden precisarse como una propuesta o idea de inversión analizada técnica y financieramente, que, mediante la obtención de bienes o servicios, busca resolver una necesidad de un grupo de personas.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-03.png', alt='')
      .row(titulo="Compañías generadoras de energía")
        .col-md-6.mb-4.mb-md-0
          p En el contexto de compañías generadoras de energía, hace referencia a proyectos orientados a los activos de la compañía, comprendiendo desde la construcción, compra y remodelación, hasta el mantenimiento de estos para aumentar su vida útil.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-04.png', alt='')
      .row(titulo="Proyectos")
        .col-md-6.mb-4.mb-md-0
          p Son proyectos o programas que involucran un aporte monetario por parte de la compañía, el cual se verá reflejado en su balance financiero.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-05.png', alt='')
      .row(titulo="Evaluación económica")
        .col-md-6.mb-4.mb-md-0
          p El punto de partida de la evaluación económica y estructuración de un proyecto de inversión es la generación de la idea de proyecto, en otras palabras, la identificación de una oportunidad de negocio. Finaliza con la administración y monitoreo del mismo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-06.png', alt='')
      .row(titulo="Evaluación económica y la estructuración")
        .col-md-6.mb-4.mb-md-0
          p En el caso de proyectos de energía renovable, la evaluación económica y la estructuración comprenden desde el planteamiento de la idea para desarrollar una planta de generación con fuentes renovables, hasta la administración, operación y mantenimiento de esta.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-07.png', alt='')
      .row(titulo="Análisis proyectos de inversión")
        .col-md-6.mb-4.mb-md-0
          p Para analizar proyectos de inversión, por lo general, se ejecutan estudios previos, que serán el insumo para tomar la decisión de realizar o no la inversión. Estos estudios detallan las condiciones del mercado, parámetros técnicos, aspectos monetarios, ambientales y sociales.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/tema7-08.png', alt='')

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 7.] #[i Representación de la secuencia de estudios para la toma de decisión de desarrollo del proyecto] 
        figure
          img(src='@/assets/curso/temas/tema7/tema7-09.svg', alt='') 
          figcaption Nota. Tomada de: https://www.apercc.org.mx/wp-content/uploads/2019/11/ENREN2019-Factibilidad-financiera-comprimido.pdf 

    .cajon-b.color-primario.p-3.mb-4
      p.mb-0 En la figura anterior, se observan las fases de los estudios previos y el nivel de detalle de estos, que servirán para decidir si se desarrolla e invierte en un proyecto o no. Los cuatro primeros se agrupan y forman la etapa de preinversión. Mientras que el último estudio conformaría una etapa de transición entre la preinversión y la inversión como tal. Ahora bien, independientemente del nivel de detalle de los estudios de la etapa de preinversión, la evaluación financiera de un proyecto de inversión está conformada por los elementos que se observan en la siguiente figura.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-5(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 8.] #[i Estructura resumida de la evaluación de proyectos] 
        figure
          img(src='@/assets/curso/temas/tema7/tema7-10.svg', alt='') 
          figcaption Nota. Tomada de https://www.apercc.org.mx/wp-content/uploads/2019/11/ENREN2019-Factibilidad-financiera-comprimido.pdf

      .col-12.col-md-10.mb-3(data-aos="fade-down")
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[strong Evaluación de mercado:] mercado objetivo, estrategia comercial, análisis de oferta y demanda, entre otros.
          li 
            i.lista-ul__vineta
            | #[strong Evaluación técnica:] materias primas, tipo de producción, localización, tamaño del proyecto, tecnología a utilizar, etc.
          li 
            i.lista-ul__vineta
            | #[strong Evaluación financiera:] ordenar la información de tipo monetario, inversión del proyecto, calendario de inversiones, horizonte de evaluación, método de financiamiento, criterios de rentabilidad (indicadores).
          li 
            i.lista-ul__vineta
            | #[strong Evaluación ambiental y social:] impactos a la flora y fauna, alcances de tipo social que tenga el proyecto, entre otros.
            
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/tema7-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este numeral se centra en la evaluación financiera del proyecto, último peldaño dentro de la cadena de actividades de análisis de factibilidad global de un proyecto. Si se cumple a cabalidad la secuencia, en este punto se cuenta con la información de las entradas (o insumos) relacionadas con el mercado (la oferta y la demanda), ubicación y tamaño del proyecto, costos y monto de la inversión necesaria para desarrollarlo. Pero es a partir de dicha fase que se define si el proyecto es rentable o no. Sin importar la naturaleza del proyecto que se formula, manufactura de un producto, servicios de mantenimiento, etc., a través de la evaluación financiera, se conocerá si los ingresos del proyecto superan el monto de inversión requerida para desarrollarlo, y, de ser así, se decidirá desarrollar el proyecto. 

    Separador
    #t_7_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.1 Generalidades factibilidad financiera de proyectos de energía renovable

    p.mb-5(data-aos="fade-down") La evaluación financiera de un proyecto de energía renovable se realiza utilizando como materia prima los estudios previos de las condiciones de mercado, aspectos técnicos, ambientales y sociales, y se refiere a proyectar en un horizonte temporal de inversión, la diferencia entre los beneficios (ingresos) estimados y los costos totales (de ejecución y operación) calculados. 

    .row.justify-content-center.align-items-center
      .col-12.col-md-11.col-lg-10
        .row.justify-content-center.align-items-center.mb-5(style="background-color:#7125C8")
          .col-10.col-md-4.col-lg-3.p-2(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema7/tema7-12.svg', alt='')  
          .col-12.col-md-8.col-lg-9.mb-md-0(data-aos="fade-left")
            p.mb-md-0.texto-blanco La proyección en el tiempo de dicha diferencia es, en otras palabras, un flujo de caja o un modelo financiero.

    p.mb-5(data-aos="fade-down") En la siguiente figura, se muestra un esquema resumido de la evaluación financiera de un proyecto de energía renovable:


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 9.] #[i Ajustes de la Ley 2099 de 2021 a los beneficios tributarios de la Ley 1715 de 2014] 
        figure
          img(src='@/assets/curso/temas/tema7/tema7-13.svg', alt='') 
          figcaption.mt-2 Nota. Adaptada de https://www.apercc.org.mx/wp-content/uploads/2019/11/ENREN2019-Factibilidad-financiera-comprimido.pdf

    p.mb-3(data-aos="fade-down-left") A partir del modelo financiero elaborado, se cuantifican una serie de parámetros o indicadores, que servirán para saber si el proyecto de energía renovable es rentable o no y, además, para decidir acerca de su desarrollo. En el escenario de obtener una rentabilidad atractiva, se establece entonces la factibilidad financiera del proyecto de inversión. 
    p.mb-5(data-aos="fade-down-left") Respondiendo a las siguientes características:


    .row.justify-content-center.align-items-center.mb-3
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            p.mb-0 El presupuesto de ingresos y egresos se caracteriza por ser expresado de acuerdo con la vida útil estimada del proyecto, y también se relaciona con el sector industrial en el que aplique la inversión.

    .row.justify-content-center.align-items-center.mb-3
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            p.mb-0 De acuerdo con UPME (2015), estos horizontes oscilan entre 20 y 30 años, según la tecnología, siendo lo más común 20 años, para energía de la biomasa, 25 años, para solar y eólica, y 30, para geotérmica.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones.p-3
          .row.justify-content-around.align-items-center
            p.mb-0 Por ejemplo, en un proyecto de una planta solar fotovoltaica, el horizonte de tiempo de la instalación se estima como sigue:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Vida útil de los módulos fotovoltaicos: 25 años
              li 
                i.lista-ul__vineta
                | Vida útil contable: 25 años
              li 
                i.lista-ul__vineta
                | Incentivos: 15 años (por reducción de impuesto sobre la renta)
              li 
                i.lista-ul__vineta
                | Horizonte temporal elegido: 15 años

    p.mb-5(data-aos="fade-down-left") Los elementos que se deben definir para el análisis financiero, responden al horizonte temporal de evaluación, el cual se refiere al tiempo máximo (en años) para proyectar las entradas (ingresos) y salidas (egresos) del proyecto. 


    .row.justify-content-center.align-items-center.mb-5
      .col-12.mb-5(data-aos="fade-left")
        ul.lista-ul.mb-2
            li.mb-0
              i.fas.fa-angle-right(style="color:#AD84FF")
              | #[strong Determinación de ingresos generales del proyecto]

      .col-12(data-aos="fade-down")
        .row 
          .col-md-4.d-none.d-md-block 
            figure
              img(src='@/assets/curso/temas/tema7/tema7-14.png', alt='') 
          .col-md-8
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Los ingresos del proyecto pueden generarse a través de:")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul.ps-4
                    li.mb-0
                      i.lista-ul__vineta
                      | La venta del producto (energía producida).
                    li.mb-0
                      i.lista-ul__vineta
                      | Los costos de energía evitados (se obtienen al multiplicar la energía, calor o electricidad por la tarifa).
                    li.mb-0
                      i.lista-ul__vineta
                      | Los ahorros por disminución en costos operativos.
              .row(numero="2" titulo="Calculo de ingresos totales esperados del proyecto")
                .col-12.mb-4.mb-md-0
                  p Con la información suministrada del estudio de mercado, que abarca precios de venta, cantidad de energía producida, entre otros, se calculan los ingresos totales esperados del proyecto. 
                  ul.lista-ul.ps-4
                    li.mb-0
                      i.lista-ul__vineta
                      | Producción de energía bruta = capacidad instalada x factor de planta x horas de operación. 
                    li.mb-0
                      i.lista-ul__vineta
                      | Producción de energía neta = capacidad neta x factor de planta x horas de operación.
                    li.mb-0
                      i.lista-ul__vineta
                      | Capacidad neta = capacidad instalada x (1- Usos de la planta).
              .row(numero="3" titulo="De lo anterior, se tiene:")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul.ps-4
                    li.mb-0
                      i.lista-ul__vineta
                      | Ingresos por venta de energía = producción neta x precio de venta de la energía.
                    li.mb-0
                      i.lista-ul__vineta
                      | Ingresos por venta de potencia = capacidad neta x precio de venta de la potencia.
                  p En cuanto a la energía producida, una de las maneras de conocerla es a partir de la curva de consumo. Además, la curva de generación del sistema de energía renovable se puede obtener a partir del diseño y dimensionamiento del mismo, según el tipo de tecnología energética. 
              .row(numero="4" titulo="Los perfiles de consumo y producción")
                .col-12.mb-4.mb-md-0
                  p Se representan mediante gráficas y su interpretación es como se describe a continuación:
                  ul.lista-ul.ps-4
                    li.mb-0
                      i.lista-ul__vineta
                      | Total energía generada = área bajo la curva de producción (Generación).
                    li.mb-0
                      i.lista-ul__vineta
                      | Total energía consumida = área bajo la curva de consumo.
                    li.mb-0
                      i.lista-ul__vineta
                      | Energía auto consumida = área de la región entre las dos curvas.
                    li.mb-0
                      i.lista-ul__vineta
                      | Energía producida y no consumida (excedente para inyectar a la red) = área bajo la curva de producción que está por encima de la curva de consumo.
                    li.mb-0
                      i.lista-ul__vineta
                      | Energía adicional necesaria, consumida de la red = área bajo la curva de consumo y sobre la línea de producción.

    p.mb-5(data-aos="fade-down") Para determinar la rentabilidad de implementar un sistema de generación a partir de renovables, por ejemplo, en el caso de autoconsumo, es necesario examinar el ahorro en el consumo por parte del usuario, es decir, lo que deja de comprar a la empresa prestadora y comercializadora del servicio.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 10.] #[i Curva de Consumo y Curva de Producción de electricidad de un proyecto de generación solar fotovoltaica para uso residencial] 
        figure
          img(src='@/assets/curso/temas/tema7/tema7-15.svg', alt='') 
          figcaption Nota. El precio de venta del kWh se obtiene de las tarifas aplicadas por la empresa de servicio de energía correspondiente 


    .row.justify-content-center.align-items-center.mb-2
      .col-12(data-aos="fade-left")
        ul.lista-ul
            li.mb-0
              i.fas.fa-angle-right(style="color:#AD84FF")
              | #[strong Determinación de los Costos de Inversión (CAPEX )]


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8(data-aos="fade-down")
        p Son los costos relacionados con la construcción de la infraestructura y las facilidades de la planta (materiales, instrumentos, etc.), costos de adquisición de equipos de generación, costo de interconexión (líneas de transmisión, subestaciones, etc.), costos de desarrollo (contratación de servicios de diseño, ingeniería y construcción, licencias y permisos, estudios de prefactibilidad y legales, entre otros). 
        p También incluye el costo de terrenos e inmuebles, y paisajismo, que, si bien no suman en el monto global, son importantes para el progreso de proyectos de generación de energía. 
        p Es importante mencionar que la definición del valor de la inversión requiere conocer la procedencia de los recursos. La financiación del proyecto puede proceder de una institución financiera, de recursos propios, o de una combinación de ambos.
        p Definir el monto de inversión requerido implica examinar el origen de los recursos financieros, ya sean internos o externos. Los primeros se refieren a fondos de accionistas, uso de utilidades de la empresa, etc., mientras que los segundos se refieren básicamente a un crédito bancario. 
      .col-12.col-md-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-16.png', alt='') 



    Separador
    #t_7_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.2 Conceptos básicos para la evaluación financiera

    p En este apartado, se presentan los principales parámetros que se tienen en cuenta para la evaluación financiera de proyectos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5(data-aos="fade-down")
        h4 Flujo de caja
        p Las operaciones financieras se componen de una serie de flujos de caja con diferentes valores y distintas fechas. Estos flujos pueden ser ingresos o egresos. Comúnmente, se conoce el flujo de caja de un proyecto como un esquema en el que se representan las entradas (ingresos) y salidas (egresos) del proyecto registradas en un período dado, que generalmente es de 1 año. 
        p La representación gráfica se muestra en la figura 11. 
        p La línea horizontal representa el tiempo y las flechas representan el dinero. Las flechas orientadas hacia arriba representan las entradas de dinero (ingreso, ahorro, beneficio, entre otros); son valores positivos. Mientras que las flechas orientadas hacia abajo representan salida de dinero (egreso, inversión, gasto, pérdida, entre otros); son valores negativos.
      .col-12.col-md-7(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-17.png', alt='') 


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 #[b Figura 11.] #[i Diagrama de flujo de caja] 
        figure
          img(src='@/assets/curso/temas/tema7/tema7-18.svg', alt='') 

    p.mb-3(data-aos="fade-down") Algunas consideraciones de la práctica común para simplificar el cálculo en los flujos de caja son:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta
            | Se asume que los flujos se ocurren al final de cada periodo.
          li.mb-0
            i.lista-ul__vineta
            | La inversión inicial se produce en el 'año 0'. Esto aplica principalmente en proyectos pequeños y sencillos. En proyectos de gran escala, puede arrojar resultados erróneos.
          li.mb-0
            i.lista-ul__vineta
            | Cuando no se incluyen tasas inflacionarias, en el análisis solo se deben especificar los precios, la tasa de interés, y tasa de descuento.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5(data-aos="fade-down")
        h4 Tasa de descuento
        p Es la tasa que se utiliza para actualizar los valores futuros al valor presente, o viceversa. Las tasas de descuento pueden ser reales o nominales (tienen en cuenta la inflación). Existen varios métodos para estimar la tasa de descuento, destacándose el modelo de valoración de activos financieros (CAPM: <i>Capital Asset Pricing Model</i>) y el costo ponderado de capital (WACC: <i>Weighted Average Cost of Capital</i>). Este último complementa al primero, agrega costos marginales de endeudamiento y tiene en cuenta la razón de deuda capital. 
      .col-12.col-md-7(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-19.png', alt='') 

    .row.justify-content-center.align-items-center
      .col-12.col-md-11.col-lg-10
        .row.justify-content-center.align-items-center.mb-5(style="background-color:#D3E7F7")
          .col-10.col-md-4.col-lg-3.p-2(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema7/tema7-20.svg', alt='')  
          .col-12.col-md-8.col-lg-9.mb-md-0(data-aos="fade-left")
            p.mb-md-0 En este curso, no se profundizará en cómo se determina este factor, no obstante, es importante mencionar que su elección lleva implícitos aspectos relacionados con riesgo y liquidez.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5(data-aos="fade-down")
        h4 Valor Presente (VP) y Valor Futuro (VF)
        p Se denomina Valor Presente (o Valor Actual) a la inversión inicial. Otros nombres con los que también se conoce a la inversión inicial son: Principal y Valor Actual (VA). Para este curso, se usará Valor Presente, no obstante, es importante recordar que, para cálculos en Excel, se utiliza la notación VA, ya que así está agregada la función en dicho programa. Cabe destacar que la inversión inicial representa un costo, es decir, la empresa o la persona no harán uso del capital de forma inmediata, sino que los puede ahorrar o invertir, buscando obtener un provecho de ello en el futuro.
      .col-12.col-md-7(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-21.png', alt='') 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-left")
      .col-12
        .cajon.color-acento-botones.p-4
          p El valor presente indica cuánto vale hoy la suma futura de dinero, dada una tasa de rendimiento especificada. Este es un importante concepto financiero basado en el principio de que el dinero recibido en el futuro no vale tanto como una suma igual recibida hoy. 

    p.mb-3(data-aos="fade-down") El valor actual se puede calcular utilizando la siguiente fórmula:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-left")
      .col-12
        div.text-center
          mfrac
            mi.italic VA =&nbsp;
          math.text-center
            mfrac
              msup
                mi.italic VF
              msup
                mi.italic (1+i)n
        div.text-center.mt-3
          math.text-center
            mfrac
              msup
                mi.italic VF
              msup
                mi.italic (1+i)n
          mfrac
            mi.italic &nbsp;= Factor de descuento
        p.mt-3 Donde,
        div(data-aos="fade-right")
          mfrac
            mi.italic VA: es el valor presente del flujo de caja futuro (cantidad actual).
        div(data-aos="fade-right")
          mfrac
            mi.italic VF: es el valor futuro (cantidad a recibir en n años).
        div(data-aos="fade-right")
          mfrac
            mi.italic i: es la tasa de interés (o tasa de descuento).
        div(data-aos="fade-right")
          mfrac
            mi.italic n: es el número de años (o meses u otra unidad de tiempo) durante los cuales se realiza el cálculo.

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-md-7(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-22.png', alt='') 
      .col-12.col-md-5(data-aos="fade-down")
        p El valor futuro es el valor que puede alcanzar un capital en el futuro a partir de los intereses ganados. Ambos conceptos, valor presente y valor futuro, se relacionan con la idea de valor de dinero en el tiempo. Un monto de dinero hoy tiene un valor más alto que el valor de la misma cantidad en el futuro. Las personas y las empresas prefieren recibir efectivo hoy que en el futuro y esto se debe al potencial que posee el dinero en producir más dinero. Por ejemplo, al solicitar un crédito actualmente para devolverlo en 1 periodo de 1 año, la cantidad que se devolverá no es la misma que la prestada, puesto que el dinero valdrá menos pasado el periodo. 


    .row.justify-content-center.align-items-center
      .col-12.col-md-11.col-lg-10
        .row.justify-content-center.align-items-center.mb-5(style="background-color:#D3E7F7")
          .col-10.col-md-4.col-lg-3.p-2(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/tema7/tema7-20.svg', alt='')  
          .col-12.col-md-8.col-lg-9.mb-md-0(data-aos="fade-left")
            p.mb-md-0 Por ello, en los préstamos se paga capital inicial más intereses. 


    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down")
        h4 Valor Presente Neto (VPN) o Valor Actual Neto (VAN)
        p El Valor Presente Neto se refiere a traer los flujos de efectivo (positivos o negativos) del futuro a su valor presente equivalente. En el contexto de evaluación económica, cuando se traen cantidades monetarias del futuro al presente, se utiliza el concepto de tasa de descuento. Mientras que, si el monto se traslada del presente al futuro, se utiliza el concepto de tasa de interés. Por esta razón, los flujos de dinero que se han traído al presente también se conocen como flujos descontados. ¡Observe!
      

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-down")
        h4 Tasa Interna de retorno (TIR)
        p La ganancia que obtienen los inversionistas cada año se puede expresar como una tasa de interés o rendimiento, que se conoce como tasa interna de rendimiento. ¡Observe!
         

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-down")
        h4 Otros factores para la evaluación de proyectos de inversión en el sector energía
        p Existen otros aspectos que se tienen en cuenta a la hora de evaluar proyectos de inversión en energías renovables y eficiencia energética. 
        p Algunos de los más comunes en la práctica son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-down")
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta
            | #[strong Los incentivos], subvenciones y beneficios establecidos por el gobierno y organismos oficiales que pueden influir en los costos de la inversión. 
          li.mb-0
            i.lista-ul__vineta
            | #[strong Exclusión de impuestos] que pueden reducir los costos totales de inversión.
          li.mb-0
            i.lista-ul__vineta
            | Cambios en los precios de la energía de origen convencional que se reemplaza con energía renovable, 
          li.mb-0
            i.lista-ul__vineta
            | #[strong La tasa de inflación], que en general afecta a toda la economía.




</template>

<script>
export default {
  name: 'Tema7',
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
