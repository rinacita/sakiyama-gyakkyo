<template lang="pug">
.top
  .top__inner
    .top__items
      .top__item.top__item-title
      .top__item.top__item-profile
      .top__item.top__item-jacket
        img(src="~/assets/image/jacket.jpg")
      .top__item.top__item-text
        h3 Amazon Prime Video ドラマ <br>「賭ケグルイ双（ツイン）」主題歌 test
        h1 崎山蒼志 <span>配信シングル</span><br> "逆&nbsp;行"
        h1 2021 3.31 web Release
        a(href="https://soushi.lnk.to/rYhw3ZA") Download &amp; Streaming &gt;
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.top {
  width: 100%;
  background-image: url('~@/assets/image/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  // -- Web
  $horizontal_padding: 120px;
  $min_vertical_padding: 64px;
  $jacket_width: min(
    (100vw - #{$horizontal_padding}) * (2 / 5),
    100vh - #{$min_vertical_padding} * 2
  );
  $vertical_padding: calc((100vh - #{$jacket_width}) / 2);

  // -- Tablet
  $t_vertical_padding: 80px;
  $t_min_horizontal_padding: 40px;
  $t_jacket_height: min(
    (100vh - #{$t_vertical_padding} * 2) * (1 / 2),
    100vw - #{$t_min_horizontal_padding} * 2
  );
  $t_horizontal_padding: calc((100vw - #{$t_jacket_height}) / 2);

  // -- Mobile
  $m_vertical_padding: 40px;
  $m_min_horizontal_padding: 40px;
  $m_jacket_height: min(
    (100vh - #{$m_vertical_padding} * 2) * (1 / 2),
    100vw - #{$m_min_horizontal_padding} * 2
  );
  $m_horizontal_padding: calc((100vw - #{$m_jacket_height}) / 2);

  &__inner {
    padding: $vertical_padding $horizontal_padding;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    @include mq(lg) {
      padding: $t_vertical_padding $t_horizontal_padding;
    }

    @include mq(sm) {
      padding: $m_vertical_padding $m_horizontal_padding;
    }
  }

  &__items {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: 12vw 1fr;
    grid-template-columns: 20vw $jacket_width auto;
    grid-template-areas:
      'title   jacket text'
      'profile jacket text';
    grid-row-gap: 1vw;
    grid-column-gap: 3.2vw;

    $m_title_width: 15vh;

    @include mq(lg) {
      grid-template-rows: $m_title_width $t_jacket_height auto;
      grid-template-columns: $m_title_width 1fr;
      grid-template-areas:
        'title  profile'
        'jacket jacket'
        'text   text';
      grid-row-gap: 2vh;
      grid-column-gap: 8px;
    }

    @include mq(sm) {
      grid-template-rows: $m_title_width $m_jacket_height auto;
    }
  }

  &__item {
    &-title {
      grid-area: title;
      background-image: url('~@/assets/image/single_title.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top left;
    }

    &-profile {
      grid-area: profile;
      background-image: url('~@/assets/image/profile_white.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }

    &-jacket {
      grid-area: jacket;
    }

    &-text {
      grid-area: text;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      @include mq(lg) {
        justify-content: flex-start;
      }

      > h1 {
        font-weight: bold;
        font-size: 2vw;
        line-height: 3.2vw;

        &:first-of-type {
          margin-bottom: 2vw;
        }

        &:last-of-type {
          font-weight: 500;
          margin-bottom: 0.6vw;
        }

        > span {
          font-size: 1.3vw;
        }
      }

      > h3 {
        font-size: 1.1vw;
        line-height: 1.7vw;
        margin-bottom: 2vw;
      }

      > a {
        font-size: 2vw;
        text-decoration: underline;

        &:hover {
          opacity: 0.5;
        }
      }

      @include mq(lg) {
        > h1 {
          font-size: 5vw;
          line-height: 5.2vw;

          &:first-of-type {
            margin-bottom: 2vh;
          }

          &:last-of-type {
            margin-bottom: 1vh;
          }

          > span {
            font-size: 3.6vw;
          }

          > br {
            display: none;
          }
        }

        > h3 {
          font-size: 2vw;
          line-height: 3vw;
          margin-bottom: 2vh;

          > br {
            display: none;
          }
        }

        > a {
          font-size: 5vw;
          line-height: 5.2vw;
        }
      }

      @include mq(sm) {
        > h1 {
          font-size: 6.4vw;
          line-height: 6.4vw;

          > span {
            font-size: 4vw;
          }
        }

        > h3 {
          font-size: 2.4vw;
          line-height: 3vw;
        }

        > a {
          font-size: 6.4vw;
          line-height: 6.4vw;
        }
      }
    }
  }
}
</style>
