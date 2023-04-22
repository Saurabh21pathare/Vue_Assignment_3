<template>
  <h1>hell0</h1>
  <p v-for="(item, index) in listItems3" :key="index">
    <Strong v-if="index === employee - 1"
      >Employee Number {{ index + 1 }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Name : {{ item.userData.name }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Date of Joining : {{ item.userData.doj }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Date of : {{ item.userData.dot }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Manager EGID : {{ item.userData.managerEGID }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Base Salary : {{ item.userData.baseSalary }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Currency : {{ item.userData.currency }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >phone Number : {{ item.userData.phoneNumber }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Tags : {{ item.userData.tags }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >T2 : {{ item.userData.t2 }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Employee id : {{ item._id }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >firstLogin: {{ item.firstLogin }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1">owner: {{ item.owner }}&nbsp;</Strong>
    <Strong v-if="index === employee - 1"
      >Created on: {{ convert(item.record.createdOn) }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Updated on: {{ convert(item.record.updatedOn) }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >CreatedBy:{{ item.record.createdBy }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >UpdatedBy:{{ item.record.updatedBy }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Active:{{ item.record.active }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1">Type:{{ item.type }}&nbsp;</Strong>
    <Strong v-if="index === employee - 1"
      >Credentials:{{ item.credentials.username }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Communication Data - Email :
      {{ item.communicationData.email }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >Communication Data - Phone :
      {{ item.communicationData.phone }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >TenantSpecs:{{ item.tenantSpecs.employerGID }}&nbsp;</Strong
    >
    <Strong v-if="index === employee - 1"
      >TenantSpecs:{{ item.tenantSpecs.tags[0] }}&nbsp;</Strong
    >
  </p>
</template>

<script>
export default {
  props: ["employee"],
  data() {
    return {
      listItems3: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch(" https://tempapi.proj.me/api/sBMVd9nZO");
      const finalRes = await res.json();
      this.listItems3 = finalRes;
      console.log(this.listItems3);
    },
    convert(arg1) {
      let date = new Date(arg1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();
      return year + "-" + month + "-" + dt;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
