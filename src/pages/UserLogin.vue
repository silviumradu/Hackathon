<template>
  <div class="flex bg-image">
    <div class="fit col-grow items-center justify-center">
      <div class="q-pa-md row justify-center items-start q-gutter-md">
        <div class="v-login">
          <div class="title">
            <p class="title-text">{{ titleText }}</p>
          </div>
          <q-form
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
            v-on:submit.prevent="login"
          >
            <div class="distantare">
              <q-input
                rounded
                outlined
                bg-color="grey-5"
                v-model="tf_email_user"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-envelope" />
                </template>
              </q-input>
            </div>

            <div class="distantare">
              <q-input
                rounded
                outlined
                bg-color="grey-5"
                :type="isPwd ? 'password' : 'text'"
                v-model="tf_parola_user"
                label="Parola"
              >
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
            <!-- <div class="signup"> -->
            <div class="distantare">
              <q-btn rounded color="red-10" type="submit" :label="btnText" />
            </div>
          </q-form>
          <div class="distantare">
            <q-btn
              rounded
              color="red-10"
              @click="redirectRegister()"
              :label="signupText"
            />
          </div>

          <div class="distantare">
            <p clickable style="color: white;" @click="forgetPass()">
              {{ forgetPassText }}
            </p>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VLogin",
  data() {
    return {
      tf_email_user: "",
      tf_parola_user: "",
      isPwd: true
    };
  },
  props: {
    titleText: { type: String, default: "Autentificare" },
    emailtelefonText: {
      type: String,
      default: "Email"
    },
    passText: { type: String, default: "parola" },
    btnText: { type: String, default: "intră în cont" },
    signupText: {
      type: String,
      default: "înregistreaza-te"
    },
    forgetPassText: {
      type: String,
      default: "Recupereaza parola"
    }
  },
  methods: {
    login() {
      axios
        .post("/api/loginUtilizator", {
          email: this.tf_email_user,
          password: this.tf_parola_user
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data.token);
          this.email = "";
          this.password = "";
          this.$forceUpdate();
          this.$q.notify({
            color: "green-5",
            position: "center",
            textColor: "white",
            icon: "warning",
            message: "Autentificat cu succes!"
          });
          this.$router.push({ name: "listainstitutii" });
        })
        .catch(err => {
          console.log(err);
          this.$q.notify({
            color: "red-5",
            position: "center",
            textColor: "white",
            icon: "warning",
            message: "Utilizator sau parola gresita!"
          });
        });
      // this.emitMethod()
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },
    redirectRegister() {
      this.$router.push({ name: "register" });
    },
    forgetPass() {


      this.$router.push({ name: "forgetPass" });
    }
  }
};
</script>

<style lang="scss">
@import "../src/css/app.scss";
.distantare {
  padding: 5px 0px 5px;
}
.bg-image {
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.v-login {
  padding: 86px 65px 82px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // background-image: url("https://static.overlay-tech.com/assets/6b72939d-70e4-4875-8e8d-b3d13d911cbd.png");
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
