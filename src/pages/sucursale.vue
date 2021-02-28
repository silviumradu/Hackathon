<template>
  <div class="flex">
    <div class="fit col-grow items-center justify-center">
      <div class="q-pa-md row justify-left items-start q-gutter-md">
        <div class="row">
          <div class="column"><div class="v-sucursale">
          <div class="card-view">
            <div class="style-input">
            <p class="title-text">{{ titleText }}</p>
            </div>
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              v-on:submit.prevent="adaugaSucursale"
            >
            </q-form>
            <template>
              <div class="style-input-a">
              </div>
            </template>
          </div>
        </div></div>
          <div class="column"><div class="v-sucursale">
          <div class="card-view1">
            <div class="style-input">
            <p class="title-text1">{{ titleText1 }}</p>
            </div>
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              v-on:submit.prevent="adaugaCereri"
            >
            </q-form>
            <template>
              <div class="style-input-a">
              </div>
            </template>
          </div>
        </div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sucursale",
  data() {
    return {};
  },
  methods: {
    addSucursale() {
      axios
        .post("/addSucursala", {})
        .then(res => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch(err => {});
    }
  },
  props: {

    titleText: { type: String, default: "SUCURSALE"},
    titleText1: { type: String, default: "CERERI" }
  }
};
</script>

<style lang="scss">
@import "../src/css/app.scss";
.v-sucursale {
  background-color: $white;
  padding: 29px 28px 29px 29px;
  position: relative;
}
.card-view {
  width: 316px;
  height: 752px;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 55px;
  position: relative;
  border: 1px solid $black;
}
.card-view1 {
  width: 1000px;
  height: 752px;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 55px;
  position: relative;
  border: 1px solid $black;
}
.title-text {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 65px;
  top: 20px;
}
.title-text1 {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 400px;
  top: 20px;
}
.style-input {
  background-color: $transparent-white-2;
  margin-bottom: 50px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top:30px;
  backdrop-filter: blur(4px);
  border-radius: 20px;
  padding: 60px 10px 0px 5px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.style-input-a {
  background-color: $transparent-white-2;
  margin-bottom: 0px;
  margin-left: 27px;
  margin-right: 27px;
  margin-top: 0px;
  backdrop-filter: blur(4px);
  border-radius: 20px;
  padding: 50px 20px 0px 5px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.relative-wrapper-one {
  margin-bottom: 3px;
  position: relative;
}
.vector {
  width: 25px;
  height: 43px;
  background-color: rgba(255, 95, 0, 1);
  position: absolute;
  right: -12px;
  top: 6px;
}
.vector-two {
  position: relative;
}
.vector-three {
  position: absolute;
  right: -47px;
  top: 0;
}
.vector-four {
  margin-left: 5px;
}
</style>
