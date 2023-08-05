<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5(data-aos="fade-down")
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Apreciado aprendiz, a continuación, le invitamos a explorar el siguiente recurso, que le ilustrará acerca de la temática que abordará durante el estudio del presente componente formativo. ¡Adelante!
    
    figure(data-aos="flip-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xLtJ6fT2HVY" title="Viabilidad del aprovechamiento de fuentes de energía renovable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
