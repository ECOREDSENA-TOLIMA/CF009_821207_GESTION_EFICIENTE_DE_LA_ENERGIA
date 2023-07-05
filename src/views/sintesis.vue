<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En este mapa conceptual, el tema principal "Viabilidad del aprovechamiento de fuentes de energía renovable" y siete subtemas relacionados con la energía renovable en Colombia. 
    p.mb-5 Los subtemas abarcan diferentes aspectos relacionados con la energía renovable, desde la estructura tarifaria de los servicios de gas y de energía eléctrica, pasando por la integración de energías renovables en Colombia, el marco normativo y las barreras para la inclusión de las energías renovables, hasta los instrumentos y mecanismos para incorporarlas y los mecanismos de financiación de proyectos. 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
