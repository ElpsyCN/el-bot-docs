<template>
  <div style="display: inline-block;">
    <img
      v-if="avatar || id"
      class="avatar"
      :src="avatar || getAvatarById(this.id, this.type, this.size)"
    />
    <div v-else class="avatar" :style="`background-color:${color}`">
      {{ nickname[0] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
    type: {
      type: String,
      default: "qq",
    },
    size: {
      type: Number,
      default: 100,
    },
    nickname: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "steelblue",
    },
  },
  methods: {
    getAvatarById(id, type, size) {
      let url = "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/avatar/none.jpg";
      if (type === "qq") {
        url = `https://q1.qlogo.cn/g?b=qq&nk=${id}&s=${size}`;
      } else if (type === "group") {
        url = `https://p.qlogo.cn/gh/${id}/${id}/${size}`;
      }
      return url;
    },
  },
};
</script>

<style>
.avatar {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  line-height: 0;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
