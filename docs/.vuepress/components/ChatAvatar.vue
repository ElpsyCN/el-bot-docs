<template>
  <img class="avatar" :src="avatar" />
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 910426929,
    },
    type: {
      type: String,
      default: "qq",
    },
    size: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    avatar() {
      return this.getAvatarById(this.id, this.type, this.size);
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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  line-height: 0;
}
</style>
