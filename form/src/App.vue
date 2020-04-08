<template>
  <div class="container">
    <form>
      <div class="row" v-if="!isSubmitted">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Signup</h1>
          <hr />
          <div>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" v-model="userData.firstName" />
          </div>
          <div>
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" v-model="userData.lastName" />
          </div>
          <app-full-name
            :firstName="userData.firstName"
            :lastName="userData.lastName"
          ></app-full-name>
          <div>
            <label for="email">Mail</label>
            <input type="email" id="email" v-model="userData.email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userData.password" />
          </div>
          <div>
            <label for="store-data">Store Data?</label>
            <label for="Yes">
              <input type="radio" id="yes" value="Yes" v-model="storeData" />
              Yes
            </label>
            <label for="No">
              <input type="radio" id="no" value="No" v-model="storeData" />
              No
            </label>
            <div>
              <button @click="submitted">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.firstName + ' ' + userData.lastName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';
export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      storeData: '',
      isSubmitted: false,
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
  },
  components: {
    appFullName: FullName,
  },
};
</script>

<style></style>
