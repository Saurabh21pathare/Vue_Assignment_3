<template>
  <br />
  <br />
  <div style="text-align: center">
    <input
      type="text"
      class="s1"
      placeholder="Search record"
      v-model="term"
      @input="onSearch"
    />
  </div>
  <div style="text-align: center">
    <br />
    <br />
    <!-- <button @click="ind === 0 ? sortRecords() : sortRecords1()" class="s1">
      Sort Record
    </button> -->
  </div>

  <div v-if="employee !== 0">
    <SearchItem :employee="this.employee" />
  </div>
  <br />
  <br />
  <div>
    <table class="table1" border="10px">
      <tr>
        <th>Employee No</th>
        <th>_id</th>
        <th>firstLogin</th>
        <th>owner</th>
        <th>
          createdOn<button
            @click="ind === 0 ? sortRecords() : sortRecords1()"
            class="s1"
          >
            {{ ind === 0 ? "↓" : "↑" }}
          </button>
        </th>
        <th>username</th>
        <th>email</th>
        <th>tenantSpecs</th>
        <th>userData</th>
      </tr>
      <tr
        v-on:click="single(index)"
        v-for="(item, index) in listItems"
        v-bind:key="item.communicationData.email"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ item._id }}</td>
        <td>{{ item.firstLogin }}</td>
        <td>{{ item.owner }}</td>
        <td>{{ convert(item.record.createdOn) }}</td>
        <td>
          <RouterLink to="/SearchItem" class="routerlink"
            >{{ item.credentials.username }}
          </RouterLink>
        </td>
        <td>{{ item.communicationData.email }}</td>
        <td>{{ item.tenantSpecs.tags[0] }}</td>
        <td>{{ item.userData.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import SearchItem from "./SearchItem.vue";

export default {
  name: "ApiCall",
  data() {
    return {
      items: [],
      listItems: [],
      term: "",
      sortIndex: null,
      sortDirection: null,
      RouterLink,
      employee: null,
      ind: 0,
    };
  },

  components: {
    SearchItem,
  },
  mounted() {
    this.getData();
  },
  methods: {
    single(e) {
      this.employee = e + 1;
      console.log(this.employee);
    },
    async getData() {
      try {
        const res = await fetch("https://tempapi.proj.me/api/sBMVd9nZO");
        const finalRes = await res.json();
        this.items = finalRes;
        this.listItems = finalRes;
      } catch (error) {
        console.error(error);
      }
    },
    convert(arg1) {
      let date = new Date(arg1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();

      return year + "-" + month + "-" + dt;
    },
    onSearch() {
      const searchValue = this.term.toLowerCase().trim();
      this.listItems = this.items.filter((item) => {
        const username = item.credentials.username.toLowerCase();
        const email = item.communicationData.email.toLowerCase();
        const userData = item.userData.name.toLowerCase();
        return (
          (typeof username === "string" && username.includes(searchValue)) ||
          (typeof email === "string" && email.includes(searchValue)) ||
          (typeof userData === "string" && userData.includes(searchValue))
        );
      });
    },
    sortRecords() {
      this.listItems = this.listItems.sort((a, b) => {
        const fieldC = a.record.createdOn;
        const fieldA = new Date(fieldC).getTime().toString();
        const fieldD = b.record.createdOn;
        const fieldB = new Date(fieldD).getTime().toString();
        this.ind = 1;
        return fieldA.localeCompare(fieldB);
      });
    },
    sortRecords1() {
      this.listItems = this.listItems.sort((a, b) => {
        const fieldC = a.record.createdOn;
        const fieldA = new Date(fieldC).getTime().toString();
        const fieldD = b.record.createdOn;
        const fieldB = new Date(fieldD).getTime().toString();
        this.ind = 0;
        return fieldB.localeCompare(fieldA);
      });
    },
  },
};
</script>

<style>
.table1 {
  margin-left: auto;
  margin-right: auto;
  padding: 3rem;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>
