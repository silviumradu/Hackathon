<template>
<!-- <div class="flex"> -->
  <div class="flex">
  <div class="fit col-grow items-center justify-center">
     <div class="q-pa-md row justify-center items-start q-gutter-md">
  <div class="v-register-new">
    <div class="title">
      <p class="title-text">{{ titleText }}</p>
    </div>
    <q-form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
      v-on:submit.prevent="registerUser"
    >
    <div class="style-input">
      <q-input input-class="" input-style="" borderless v-model="tf_nume" label="Nume" >
        <template v-slot:prepend>
          <q-icon name="fas fa-user" />
        </template>
      </q-input>
    </div>
    <div class="style-input">
      <q-input input-class="" input-style="" borderless v-model="tf_prenume" label="Prenume" >
        <template v-slot:prepend>
          <q-icon name="fas fa-user" />
        </template>
      </q-input>
    </div>
    <div class="style-input">
      <q-input input-class="" input-style="" :type="isPwd ? 'password' : 'text'" borderless v-model="tf_parola" label="Parola" >
        <template v-slot:prepend>
          <q-icon name="fas fa-key" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="style-input">
      <q-input type="tel" mask="##########" borderless v-model="tf_telefon" label="Telefon" >
        <template v-slot:prepend>
          <q-icon name="fas fa-mobile-alt" />
        </template>
      </q-input>
    </div>
    <div class="style-input">
      <q-input input-class="" type="email" borderless v-model="tf_email" label="Email" >
        <template v-slot:prepend>
          <q-icon name="fas fa-envelope" />
        </template>
      </q-input>
    </div>

    <div class="style-input">
      <q-input mask="#############" borderless v-model="tf_cnp" label="CNP" >
        <template v-slot:prepend>
          <q-icon name="far fa-id-card" />
        </template>
      </q-input>
    </div>

    <!-- <div class="gdpr">
      <p class="checkbox-two">{{ checkbox }}</p>
    </div> -->

    <!-- <div class="signup"> -->
      <q-btn rounded color="red-10" type="submit" :label="btnText" />
    <!-- </div> -->
    </q-form>
  </div>
</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "VRegisterNew",
  data () {
  return{
    tf_nume: '',
    tf_prenume: '',
    tf_parola: '',
    tf_telefon: '',
    tf_email: '',
    tf_cnp: '',
    ck_gdpr: false,
    isPwd: true
  }
  },
  methods: {
    registerUser (){
      if (!this.ck_gdpr) {
        axios.post('/addUtilizator',
        {
          tf_nume_user: this.tf_nume,
          tf_prenume_user: this.tf_prenume,
          tf_parola_user: this.tf_parola,
          tf_telefon_user: this.tf_telefon,
          tf_email_user: this.tf_email,
          tf_cnp_user: this.tf_cnp
        }).then((res) => {
          console.log(res)
          this.$router.push({ name: 'home' })
        }).catch((err) => {

        })
      }
    }
  },
  props: {
    btnText: { type: String, default: "înregistreaza-te" },
    checkbox: {
      type: String,
      default:
        " Sunt de acord cu prelucrarea datelor cu caracter personal"
    },
    emailText: { type: String, default: "email" },
    firstnameIcon: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/83b296a7-201f-493a-b3da-32eb15d0feb8.svg"
    },
    firstnameText: { type: String, default: "Prenume" },
    nameIcon: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/a85465e0-4665-4971-b063-ae46ce7935af.svg"
    },
    numeText: { type: String, default: "Nume" },
    passText: { type: String, default: "parola" },
    telIcon: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/6ef41be6-5c1f-4dd5-ada2-e7565643bfb3.svg"
    },
    telText: { type: String, default: "telefon" },
    titleText: { type: String, default: "Înregistrare" }
  }
};
</script>

<style lang="scss">
@import "src/css/app.scss";
.v-register-new {
  padding: 88px 65px 79px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url("https://static.overlay-tech.com/assets/45aaa931-0671-4841-a8ee-aa9f62aaff8d.png");
}
.title {
  background-color: $transparent-dim-gray;
  backdrop-filter: blur(4px);
  margin-bottom: 35px;
  padding: 17px 29px 0px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
}
.title-text {
  @include montserrat-24-bold;
  color: $snow;
  text-transform: uppercase;
}
.style-input {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 9px;
  backdrop-filter: blur(4px);
  border-radius: 25px;
  padding: 0px 10px 0px 10px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}



.gdpr {
  margin-bottom: 34px;
  margin-left: 16px;

  display: flex;
  align-items: flex-start;
}
.checkbox {
  width: 19px;
  height: 20px;
  background-color: $silver;
  margin-right: 13px;
}
.checkbox-two {
  width: 165px;
  @include montserrat-11-bold;
  color: $white;
  text-transform: uppercase;
}
.signup {
  background-color: $transparent-brown;
  margin-left: 35px;
  border-radius: 25px;
  backdrop-filter: blur(4px);
  padding: 16px 18px 16px 19px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.btn-text {
  width: 133px;
  @include roboto-14-bold;
  color: $white;
  text-transform: uppercase;
}
</style>
