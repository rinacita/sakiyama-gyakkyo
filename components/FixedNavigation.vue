<template lang="pug">
  .nav
    .nav__box.top-nav
      a Sakiyama Soushi
      h3 31 March 2021
    .nav__box.right-nav
      a(href="#topics") Topics  
      a(href="#movie") Movie
      a(href="#top") Top
    .nav__box.bottom-nav
      a(href="https://twitter.com/soushiclub")
        img(src="~/assets/image/twitter.svg")
      a(href="https://www.instagram.com/soush.i_sakiyama/")
        img(src="~/assets/image/instagram.svg")
      a(href="https://www.tiktok.com/@sakiyamasoushi_official")
        img(src="~/assets/image/tiktok.svg")
      a(href="https://www.youtube.com/channel/UCBrgK9ZtiUn0Gmn3cruQBkA")
        img(src="~/assets/image/youtube.svg")
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.nav {
  position: fixed;
  z-index: 1;
  color: $theme;
  text-shadow: 0px 0px 16px #00000070;
  // mix-blend-mode: difference;

  > .nav__box {
    position: fixed;
    box-sizing: border-box;
    padding: 16px;

    @include mq(lg) {
      padding: 8px;
    }

    &.top-nav {
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;

      @include mq(lg) {
        font-size: 1rem;
      }
    }

    &.right-nav {
      right: 0;
      top: 32px;
      display: flex;
      transform: rotateZ(-90deg);
      transform-origin: right bottom;

      a {
        display: flex;
        transform: rotateZ(180deg);
        transform-origin: center;
        border: 1px solid $theme;
        color: white;
        background: $theme;
        align-items: center;
        justify-content: center;

        font-size: 1rem;
        width: 110px;
        height: 32px;
        padding-bottom: 2px;
        border-radius: 16px;
        margin-left: 32px;

        @include mq(lg) {
          font-size: 13px;
          width: 64px;
          height: 20px;
          border-radius: 10px;
          margin-left: 16px;
        }

        &:hover {
          color: $theme;
          background: white;
        }
      }
    }

    &.bottom-nav {
      display: flex;
      flex-direction: row-reverse;
      bottom: 0;
      right: 0;

      @include mq(sm) {
      }

      > a {
        $width: 48px;
        display: flex;
        width: $width;
        height: $width;
        background: $theme;
        border-radius: calc(#{$width}/ 2);
        border: 1px solid $theme;
        justify-content: center;
        margin-left: 16px;

        @include mq(sm) {
          $width: 40px;
          width: $width;
          height: $width;
          border-radius: calc(#{$width}/ 2);
        }

        > img {
          width: 50%;
          height: auto;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
