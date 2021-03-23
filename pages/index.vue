<template lang="pug">
.wrapper 
  fixed-navigation
  client-only
    full-page(:options="options" ref="fullpage")
      top.section(data-anchor="top")
      movie.section.fp-auto-height(data-anchor="movie")
      topics.section(data-anchor="topics")
      custom-footer.section.fp-auto-height(data-anchor="footer")
</template>

<script>
import topicData from '~/assets/data/topics.json'
import FixedNavigation from '~/components/FixedNavigation'
import Top from '~/components/sections/Top'
import Movie from '~/components/sections/Movie'
import Topics from '~/components/sections/Topics'
import CustomFooter from '~/components/sections/CustomFooter'

export default {
  components: {
    FixedNavigation,
    Top,
    Movie,
    Topics,
    CustomFooter,
  },
  data: () => {
    return {
      topicItems: topicData,
      options: {
        licenseKey: '96902202-2C234D9A-858D0BC1-342E4725',
        controlArrows: true,
        // scrollBar: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        // afterLoad: this.afterLoad,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.wrapper {
  width: 100%;
  height: 100vh;
}
</style>
