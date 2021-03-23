<template lang="pug">
.footer 
  .footer__inner
    p Copyright &copy; Sony Music Records <br>All rights reserved.
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.footer {
  width: 100%;
  // height: 160px;
  background: #464650;

  &__inner {
    width: 100%;
    height: 160px;

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
}
</style>
