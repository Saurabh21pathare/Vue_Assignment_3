<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { provide, ref } from "vue";

export default {
  data: () => ({
    length: 1,
    tab: null,
    // selectedTitle: "",
  }),
  watch: {
    length(val) {
      this.tab = val - 1;
    },
  },
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    let selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      tabTitles,
      selectedTitle,
    };
  },
};
</script>

<style scoped>
.tabs {
  max-width: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tabs_header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.tabs_header li {
  width: 35px;
  text-align: center;
  padding: 5px 50px;
  margin-right: 5px;
  background-color: #ddd;
  border-radius: 5px;
  transition: 0.4s all ease-out;
}

.tabs_header li.selected {
  background-color: #0984e3;
  color: white;
}

.saurabh {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}
</style>
