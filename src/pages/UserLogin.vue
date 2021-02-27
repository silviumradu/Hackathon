<template>
  <div class="v-login">
    <div class="title">
      <p class="title-text">{{ titleText }}</p>
    </div>
    <div class="email-two">
      <img
        alt=""
        class="email"
        src="https://static.overlay-tech.com/assets/fe22865d-3554-43ba-ad3d-a05db2fc0ad8.svg"
      />
      <p class="emailtelefon-text">
        {{ emailtelefonText }}
      </p>
    </div>
    <div class="password">
      <div class="pass-icon"></div>
      <p class="emailtelefon-text">{{ passText }}</p>
    </div>
    <div class="signup">
      <p class="btn-text">{{ btnText }}</p>
    </div>
    <div class="signup-two">
      <p class="btn-text-two">{{ btnTextTwo }}</p>
    </div>
    <p class="forget-pass-text">{{ forgetPassText }}</p>
  </div>
</template>

<script>
export default {
  name: "VLogin",
  props: {
    titleText: { type: String, default: "log in" },
    emailtelefonText: {
      type: String,
      default: "EMaIL/Telefon"
    },
    passText: { type: String, default: "parola" },
    btnText: { type: String, default: "intră în cont" },
    btnTextTwo: {
      type: String,
      default: "înregistreaza-te"
    },
    forgetPassText: {
      type: String,
      default: "Recupereaza parola"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "/src/css/app.scss";
.v-login {
  padding: 86px 65px 82px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url("https://static.overlay-tech.com/assets/6b72939d-70e4-4875-8e8d-b3d13d911cbd.png");
}
.title {
  background-color: $transparent-dim-gray;
  margin-bottom: 104px;
  padding: 17px 79px 18px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
}
.title-text {
  @include montserrat-24-bold;
  color: $snow;
  text-transform: uppercase;
}
.email-two {
  background-color: $transparent-white-2;
  margin-bottom: 26px;
  margin-left: 8px;
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
.emailtelefon-text {
  width: 167px;
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
}
.password {
  background-color: $transparent-white-2;
  margin-bottom: 26px;
  margin-left: 8px;
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
.signup {
  background-color: $transparent-brown;
  margin-bottom: 151px;
  margin-left: 36px;
  border-radius: 25px;
  padding: 15px 34px 17px 35px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.btn-text {
  width: 101px;
  @include roboto-14-bold;
  color: $white;
  text-transform: uppercase;
}
.signup-two {
  background-color: $transparent-brown;
  margin-bottom: 44px;
  margin-left: 36px;
  border-radius: 25px;
  padding: 16px 18px 16px 19px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
.btn-text-two {
  width: 133px;
  @include roboto-14-bold;
  color: $white;
  text-transform: uppercase;
}
.forget-pass-text {
  @include roboto-14-bold;
  color: $white;
  text-transform: uppercase;
  text-decoration: underline;
  margin-left: 38px;
  text-shadow: 0 4px 3px $transparent-black;
}
</style>
