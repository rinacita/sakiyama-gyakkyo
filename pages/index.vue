<template lang="pug">
.wrapper
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
  #top
    .top__inner
      .top__inner-item.top__inner-item__title
        | 配信シングル<br>
        | "逆&nbsp;行"<br>
        | Special Site
      .top__inner-item.top__inner-item__profile
      .top__inner-item.top__inner-item__jacket 
        img(src="~/assets/image/jacket.jpg")
      .top__inner-item.top__inner-item__text
        h3 Amazon Prime Video ドラマ <br>「賭ケグルイ双（ツイン）」主題歌
        h1 崎山蒼志 <span>配信シングル</span><br> "逆&nbsp;行"
        h1 2021 3.31 web Release
        a(href="https://soushi.lnk.to/rYhw3ZA") Download &amp; Streaming &gt;
  #movie.movie
    .movie__title.title Movie
    .movie__content
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/x8h0CCHaYhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .movie__description 【公式】「ドラマ賭ケグルイ双」60秒予告 <br>3.26配信開始
  #topics.topics
    .topics__title.title Topics
    .topics__content
      .topics__content-item(v-for="item in topicItems" :key="item.id")
        .topics__content-item-title {{ item.title }}
        .topics__content-item-description {{ item.description }}
  footer
    p Copyright &copy; Sony Music Records <br>All rights reserved.
</template>

<script>
import topicData from '~/assets/data/topics.json'

export default {
  data: () => {
    return {
      topicItems: topicData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.wrapper {
  width: 100%;
  height: 100vh;
  // font-family: 'Noto Sans JP';
}

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
      padding: 32px;

      @include mq(sm) {
        padding: 16px;
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

#top {
  width: 100%;
  background-image: url('~@/assets/image/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 6vw;

  @include mq(lg) {
    padding: 12%;
  }

  .top__inner {
    display: grid;
    width: 100%;

    $grid-title-width: 12vw;

    grid-template-rows: $grid-title-width 1fr;
    grid-template-columns: 20vw auto 24vw;
    grid-template-areas:
      'title  jacket text'
      'profile jacket text';
    grid-row-gap: 1vw;
    grid-column-gap: 3.2vw;

    @include mq(lg) {
      grid-template-rows: 280px auto auto;
      grid-template-columns: auto 1fr;
      grid-template-areas:
        'title  profile'
        'jacket jacket'
        'text   text';
      grid-row-gap: 32px;
      grid-column-gap: 16px;
    }

    @include mq(sm) {
      grid-template-rows: 200px auto auto;
      grid-row-gap: 16px;
      grid-column-gap: 8px;
    }

    &-item {
      &__title {
        display: flex;
        align-items: center;
        grid-area: title;
        background: #363540;
        color: white;
        font-weight: 600;

        width: $grid-title-width;
        height: $grid-title-width;
        font-size: 1.1vw;
        padding-left: 2vw;
        line-height: 2.6vw;

        @include mq(lg) {
          width: 180px;
          height: 180px;
          font-size: 18px;
          padding-left: 28px;
          line-height: 36px;
        }

        @include mq(sm) {
          width: 100px;
          height: 100px;
          font-size: 10px;
          padding-left: 16px;
          line-height: 22px;
        }
      }

      &__profile {
        grid-area: profile;
        background-image: url('~@/assets/image/profile_white.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      &__jacket {
        grid-area: jacket;
      }

      &__text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        grid-area: text;
        padding-bottom: 0.5vw;

        > h3 {
          font-size: 1.1vw;
          line-height: 1.7vw;
          margin-bottom: 2vw;
        }

        > h1 {
          font-size: 2vw;
          font-weight: 600;
          line-height: 3.2vw;

          &:first-of-type {
            margin-bottom: 2vw;
          }

          &:last-of-type {
            margin-bottom: 0.6vw;
          }

          > span {
            font-size: 1.3vw;
          }
        }

        > a {
          font-size: 2vw;
          text-decoration: underline;
        }

        @include mq(lg) {
          > h3 {
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 36px;

            > br {
              display: none;
            }
          }

          > h1 {
            font-size: 48px;
            line-height: 28px;

            &:first-of-type {
              margin-bottom: 16px;
            }

            &:last-of-type {
              margin-bottom: 4px;
            }

            > span {
              font-size: 28px;
            }

            > br {
              display: none;
            }
          }

          > a {
            font-size: 48px;
          }
        }

        @include mq(sm) {
          > h3 {
            font-size: 12px;
            margin-bottom: 12px;
          }

          > h1 {
            font-size: 22px;

            > span {
              font-size: 18px;
            }
          }

          > a {
            font-size: 22px;
          }
        }
      }
    }
  }
}

.title {
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 48px;

  @include mq(sm) {
    font-size: 1.8rem;
  }
}

.movie {
  width: 100%;
  background: #464650;
  padding: 64px;
  padding-bottom: 88px;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq(sm) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
  }

  &__content {
    $content-width: 50vw;
    height: calc(#{$content-width} / 16 * 9);
    width: $content-width;
    margin-bottom: 48px;

    @include mq(lg) {
      $content-width: 75vw;
      height: calc(#{$content-width} / 16 * 9);
      width: $content-width;
    }

    @include mq(sm) {
      $content-width: 90vw;
      height: calc(#{$content-width} / 16 * 9);
      width: $content-width;
    }
  }

  &__description {
    font-size: 1.2rem;
    text-align: center;

    > br {
      display: none;
    }

    @include mq(sm) {
      font-size: 1rem;
      line-height: 1.4rem;

      > br {
        display: inline;
      }
    }
  }
}

.topics {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;

  &__content {
    max-width: 600px;
    &-item {
      &-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      &-description {
        font-size: 1rem;
        font-weight: 300;
        white-space: pre-wrap;
        line-height: 1.4rem;
      }

      &:not(:last-of-type) {
        margin-bottom: 32px;
      }
    }
  }
}

footer {
  width: 100%;
  height: 128px;
  background: #464650;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1rem;
  line-height: 0.75rem;

  > p > br {
    display: none;
  }

  @include mq(sm) {
    > p > br {
      display: inline;
    }
  }
}
</style>
