<template lang="pug">
.topics
  .topics__inner
    .topics__title Topics
    .topics__items
      .topics__item(v-for="item in topicItems" :key="item.id")
        .topics__item-title {{ item.title }}
        .topics__item-article(v-html="autoLink(item.article)")

</template>

<script>
export default {
  data() {
    return {
      topicItems: '',
    }
  },
  async mounted() {
    await this.$jsonp(
      'https://www.sonymusic.co.jp/json/artist/soshisakiyama/information/start/0/count/5',
      {
        callbackName: 'callback',
      }
    ).then((json) => {
      this.topicItems = json.items
    })
  },
  methods: {
    autoLink(str) {
      const regexpUrl = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g // ']))/;
      const regexpMakeLink = function (all, url, h, href) {
        return '<a href="h' + href + '" style="color: blue;">' + url + '</a>'
      }

      return str.replace(regexpUrl, regexpMakeLink)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.topics {
  width: 100%;
  padding: 64px;

  @include mq(sm) {
    padding: 48px;
  }

  &__inner {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq(lg) {
      max-width: 600px;
    }
  }

  &__title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 48px;

    @include mq(sm) {
      font-size: 1.8rem;
    }
  }

  &__items {
    width: 100%;
  }

  &__item {
    &-title {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 2rem;
      margin-bottom: 1rem;

      @include mq(sm) {
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }

    &-article {
      font-size: 1rem;
      font-weight: 300;
      white-space: pre-wrap;
      line-height: 1.8rem;

      @include mq(sm) {
        font-size: 0.8rem;
        line-height: 1.4rem;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 64px;
    }
  }
}
</style>
