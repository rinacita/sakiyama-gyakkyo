<template lang="pug">
.movie
  .movie__inner
    .movie__inner-title Movie
    .movie__inner-content 
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aFR7TjHtG7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .movie__inner-description 崎山蒼志 Soushi Sakiyama<br>「逆行」Music Video
    .movie__inner-content 
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/x8h0CCHaYhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .movie__inner-description 【公式】「ドラマ賭ケグルイ双」60秒予告 <br>3.26配信開始

</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.movie {
  $padding: 64px;
  @include mq(sm) {
    $padding: 40px;
  }
  width: 100%;
  color: white;
  padding: $padding;
  background: $theme;

  &__inner {
    $content_max_width: 1000px;
    width: 100%;
    max-width: $content_max_width;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 48px;

      @include mq(sm) {
        font-size: 1.8rem;
      }
    }

    &-content {
      width: 100%; // =$_width
      $_width: min(#{$content_max_width}, 100vw - #{$padding} * 2);
      height: calc(#{$_width} / 16 * 9);
      margin-bottom: 32px;
    }

    &-description {
      font-size: 1.2rem;
      text-align: center;

      > br {
        display: none;
      }

      @include mq(sm) {
        font-size: 0.9rem;
        line-height: 1.4rem;

        > br {
          display: inline;
        }
      }

      // &:not(:last-of-type) {
      margin-bottom: 80px;
      // }
    }
  }
}
</style>
