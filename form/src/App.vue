<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Signup</h1>
          <hr />

          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="email" id="email" v-model="userData.email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userData.password" />
          </div>
          <div class="form-group">
            <label for="store-data">Store Data?</label>
            <label for="Yes">
              <input type="radio" value="Yes" v-model="storeData" />
              Yes
            </label>
            <label for="No">
              <input type="radio" value="No" v-model="storeData" />
              No
            </label>
            <div>
              <button type="submit" @click.prevent="submitted">Submit</button>
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
            <p>Full Name: {{ userData.fullName }}</p>
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
        fullName: 'Kazuki Matsuzaki',
        email: '',
        password: '',
      },
      storeData: 'Yes',
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
