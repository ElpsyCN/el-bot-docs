IntelliJ IDEAIntelliJ IDEA
<template>
  <div class="chat-message" :class="{ show }">
    <chat-avatar
      :id="id"
      :avatar="avatar"
      :nickname="nickname"
      :color="color"
    ></chat-avatar>
    <div class="message-box">
      <div class="nickname">{{ nickname }}</div>
      <div class="message">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
    id: Number,
    nickname: String,
    color: String,
  },
  data: () => ({
    show: false,
    active: false,
    moving: false,
  }),
  watch: {
    active(value) {
      if (!value) return (this.show = false);
      const prev =
        this.$el.previousElementSibling &&
        this.$el.previousElementSibling.__vue__;
      if (prev && (prev.moving || !prev.show)) {
        prev.$once("appear", this.appear);
      } else {
        this.appear();
      }
    },
  },
  mounted() {
    this.handleScroll();
    addEventListener("scroll", this.handleScroll);
  },
  methods: {
    appear() {
      this.show = true;
      this.moving = true;
      setTimeout(() => {
        this.moving = false;
        this.$emit("appear");
      }, 200);
    },
    handleScroll() {
      const rect = this.$el.getBoundingClientRect();
      if (rect.top < innerHeight) this.active = true;
    },
  },
};
</script>

<style lang="stylus">
.chat-message {
  position: relative;
  margin: 1rem 0;
  opacity: 0;
  transform: translateX(-10%);
  transition: transform 0.4s ease-out, opacity 0.4s ease-in;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
}

.message-box {
  display: inline-block;
  margin-left: 0.5rem;
  max-width: 90%;
  vertical-align: top;
}

.nickname {
  font-size: 0.8rem;
  color: gray;
}

.message {
  position: relative;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  background-color: white;
  word-break: break-all;
  padding: 0.6rem 0.7rem;
  margin-top: 0.2rem;

  > img {
    border-radius: 0.5rem;
    vertical-align: middle;
  }

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 0px;
    width: 8px;
    height: 8px;
    border: 0 solid transparent;
    border-bottom-width: 5px;
    border-bottom-color: currentColor;
    border-radius: 0 0 0 1rem;
    color: white;
  }
}
</style>
