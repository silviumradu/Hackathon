<template>
  <div class="v-register-new">
    <div class="title">
      <p class="title-text">{{ titleText }}</p>
    </div>
    <div class="name">
      <img :src="nameIcon" alt="" class="name-icon" />
      <p class="nume-text">{{ numeText }}</p>
    </div>
    <div class="name">
      <img :src="firstnameIcon" alt="" class="name-icon" />
      <p class="nume-text">{{ firstnameText }}</p>
    </div>
    <div class="password">
      <div class="pass-icon"></div>
      <p class="nume-text">{{ passText }}</p>
    </div>
    <div class="telephone">
      <img :src="telIcon" alt="" class="tel-icon" />
      <p class="nume-text">{{ telText }}</p>
    </div>
    <div class="email-two">
      <img :src="email" alt="" class="email" />
      <p class="nume-text">{{ emailText }}</p>
    </div>
    <div class="cnp">
      <img :src="cnpIcon" alt="" class="email" />
      <p class="nume-text">{{ cnpText }}</p>
    </div>
    <div class="gdpr">
      <div class="checkbox"></div>
      <p class="checkbox-two">{{ checkbox }}</p>
    </div>
    <div class="signup">
      <p class="btn-text">{{ btnText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VRegisterNew",
  props: {
    btnText: { type: String, default: "înregistreaza-te" },
    checkbox: {
      type: String,
      default: " Sunt de acord cu prelucrarea datelor cu caracter personal"
    },
    cnpIcon: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/d41fe99e-a16e-45dc-8501-c3fac077c515.svg"
    },
    cnpText: { type: String, default: "cnp" },
    email: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/67ab83e6-9456-4712-a4c3-48f0474252da.svg"
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

<style lang="scss" scoped>
.v-register-new {
  padding: 88px 65px 79px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url("https://static.overlay-tech.com/assets/45aaa931-0671-4841-a8ee-aa9f62aaff8d.png");
}
.title {
  background-color: $transparent-dim-gray;
  margin-bottom: 35px;
  padding: 17px 29px 18px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
}
.title-text {
  @include montserrat-24-bold;
  color: $snow;
  text-transform: uppercase;
}
.name {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 9px;
  border-radius: 25px;
  padding: 9px 19px 10px 17px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.name-icon {
  margin-right: 5px;
}
.nume-text {
  width: 167px;
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
}
.password {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 9px;
  border-radius: 25px;
  padding: 9px 19px 10px 15px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.pass-icon {
  width: 24px;
  height: 24px;
  background-color: $black;
  margin-right: 3px;
  border-radius: 50%;
}
.telephone {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 9px;
  border-radius: 25px;
  padding: 9px 19px 10px 20px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.tel-icon {
  margin-right: 7px;
}
.email-two {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 7px;
  border-radius: 25px;
  padding: 9px 19px 10px 20px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.email {
  margin-right: 3px;
}
.cnp {
  background-color: $transparent-white-2;
  margin-bottom: 16px;
  margin-left: 7px;
  border-radius: 25px;
  padding: 9px 19px 10px;
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
