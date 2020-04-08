<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
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
          <!-- <p>{{ userData.firstName + ' ' + userData.lastName }}</p> -->
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userData.password" />
          </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:</p>
            <p>Mail:</p>
            <p>Password:</p>
            <p>Store in Database?:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        password: '',
      },
      storeData: true,
    };
  },
};
</script>

<style></style>
