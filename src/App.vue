<template>
  <div>
    <h1>Detail of Employees</h1>
  </div>
  <TabsWrapper>
    <TabCompo title="tab 0"> <RouterView></RouterView></TabCompo>
    <TabCompo title="tab 1"> <br />{{ listItems4[0] }} </TabCompo>
    <TabCompo title="tab 2"> <br />{{ listItems4[1] }} </TabCompo>
    <TabCompo title="tab 3"> <br />{{ listItems4[2] }} </TabCompo>
    <TabCompo title="tab 4"> <br />{{ listItems4[3] }} </TabCompo>
    <TabCompo title="tab 5"> <br />{{ listItems4[4] }} </TabCompo>
    <TabCompo title="tab 6"> <br />{{ listItems4[5] }} </TabCompo>
    <TabCompo title="tab 7"> <br />{{ listItems4[6] }} </TabCompo>
    <TabCompo title="tab 8"> <br />{{ listItems4[7] }} </TabCompo>
    <TabCompo title="tab 9"> <br />{{ listItems4[8] }} </TabCompo>
    <TabCompo title="tab10"> <br />{{ listItems4[9] }} </TabCompo>
  </TabsWrapper>
  <!-- <RouterView></RouterView> -->
  <TabCompo></TabCompo>
</template>

<script>
import { RouterView } from "vue-router";
import TabsWrapper from "./components/TabsWrapper.vue";
import TabCompo from "./components/TabCompo.vue";

export default {
  name: "App",
  data() {
    return {
      listItems4: [],
    };
  },
  components: {
    RouterView,
    TabCompo,
    TabsWrapper,
  },
  methods: {
    async getData() {
      const res = await fetch(" https://tempapi.proj.me/api/sBMVd9nZO");
      const finalRes = await res.json();
      this.listItems4 = finalRes;
      console.log(this.listItems4);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
h1 {
  text-align: center;
}
</style>
