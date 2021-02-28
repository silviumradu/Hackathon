<template>
<div class="flex">
  <div class="fit col-grow items-center justify-center">
     <div class="q-pa-md row justify-center items-start q-gutter-md">
  <div class="v-paymentgateway">

    <div class="card-view">
    <p class="title-text">{{ titleText }}</p>
    <p class="amount">{{ amount }}</p>

       <q-form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
      v-on:submit.prevent="addPayment"
    >
    <div class="style_one">
    <div class="style-input">
    <q-input input-class="" input-style="" borderless v-model="tf_nume_card" label="Nume card"  > </q-input>
    </div>
    <div class="style-input">
    <q-input input-class="" input-style="" borderless mask="################" v-model="tf_numar_card" label="Numar card"  > </q-input>
    </div>
    <div class="style-input">
    <q-input input-class="" input-style="" borderless mask="##/##" v-model="tf_data_expirare" label="Data de expirare" > </q-input>
    </div>
    <div class="style-input">
    <q-input input-class="" input-style="" borderless mask="###" v-model="tf_cvv" label="Cvv" > </q-input>
    </div></div>
    <!--div class="btn-pay"></!--div-->
    <div class="button">
    <template>
      <div class="q-pa-md q-gutter-sm">
      <q-btn color="secondary" class="on-right" label="FINALIZEAZA TRANZACTIA" />
      </div>
    </template>
    </div>


    <!-- <p class="card-number-text">{{ cardNumberText }}</p>
    <p class="expire-date-text">{{ expireDateText }}</p>
    <p class="cvv-text">{{ cvvText }}</p>
    <div class="btn-pay"></div>
    <div class="tf-expire-date"></div>
    <div class="tf-cvv"></div>
    <div class="tf-card-number"></div>
    <div class="tf-card-name"></div>
    <p class="card-name-text">{{ cardNameText }}</p> -->
    <div class="logo">
    <img
      alt=""
      class="logosvisa"
      src="https://static.overlay-tech.com/assets/8d8f23b2-12c4-4223-9925-0d8cf99ecbfc.svg"
    />
    <div class="logosmastercard">
      <div class="relative-wrapper-one">
        <div class="vector"></div>
        <img
          alt=""
          class="vector-two"
          src="https://static.overlay-tech.com/assets/c1a87e89-e793-481b-bb37-93b14c3074af.svg"
        /><img
          alt=""
          class="vector-three"
          src="https://static.overlay-tech.com/assets/07867232-047c-4303-856a-48d019c92f1b.svg"
        />
      </div>
      <img
        alt=""
        class="vector-four"
        src="https://static.overlay-tech.com/assets/db90868a-fb79-4a4e-8349-a37827952682.svg"
      />

    </div> </div>
          </q-form>
          </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "paymentgateway",
  data () {
    return{
    tf_nume_card: '',
    tf_numar_card: '',
    tf_data_expirare: '',
    tf_cvv: ''
  }
  },
  methods: {
    addPayment (){
      axios.post('/addPay',
      {
        tf_nume_card: this.tf_nume_card,
        tf_numar_card: this.tf_numar_card,
        tf_data_expirare: this.tf_data_expirare,
        tf_cvv: this.tf_cvv,
        tf_bnt_pay: this.tf_btn_pay
      }).then((res) => {
        console.log(res)
        this.$router.push({name: 'home'})
      }).catch((err) => {

        })

    }
  },
  props: {
    titleText: { type: String, default: "Payment amount" },
    amount: { type: String, default: "5.00 lei" },
    cardNumberText: { type: String, default: "Numar card" },
    expireDateText: {
      type: String,
      default: "Data de expirare"
    },
    cvvText: { type: String, default: "cVV" },
    cardNameText: { type: String, default: "nume card" }
  }
};
</script>

<style lang="scss" >
@import "/src/css/app.scss";
.v-paymentgateway {
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
.logo {
  width: 300px;
  height: 200px;
}
.title-text {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 81px;
  top: 90px;
}
.amount {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 121px;
  top: 126px;
}
.card-number-text {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 44px;
  top: 333px;
}
.expire-date-text {
  width: 157px;
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 44px;
  bottom: 333px;
}
.cvv-text {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  right: 82px;
  bottom: 333px;
}
.style_one {
  margin-top: 210px;
}
.style-input {
  background-color: $transparent-white-2;
  margin-bottom: 21px;
  margin-left: 9px;
  margin-right: 9px;
  backdrop-filter: blur(4px);
  border-radius: 20px;
  padding: 0px 10px 0px 10px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: center;
  border: 1px solid $black;
}
/*.btn-pay {
  width: 201px;
  height: 38px;
  background-color: rgba(111, 207, 151, 1);
  border-radius: 7px 8px 7px 7px;
  position: absolute;
  left: 55px;
  bottom: 180px;
  border: 1px solid $black;
}*/
.on-right {
  right: -35px;
  bottom: -10px;
}
.tf-expire-date {
  width: 155px;
  height: 26px;
  background-color: $white;
  position: absolute;
  left: 44px;
  bottom: 302px;
  border: 1px solid $black;
}
.tf-cvv {
  width: 100px;
  height: 26px;
  background-color: $white;
  position: absolute;
  right: 48px;
  bottom: 302px;
  border: 1px solid $black;
}
.tf-card-number {
  width: 170px;
  height: 25px;
  background-color: $white;
  position: absolute;
  left: 44px;
  top: 366px;
  border: 1px solid $black;
}
.tf-card-name {
  width: 170px;
  height: 26px;
  background-color: $white;
  position: absolute;
  left: 44px;
  top: 280px;
  border: 1px solid $black;
}
.card-name-text {
  @include roboto-18-regular;
  color: $black;
  text-transform: uppercase;
  position: absolute;
  left: 44px;
  top: 247px;
}
.logosvisa {
  position: absolute;
  left: 40px;
  bottom: 94px;

}
.logosmastercard {
  padding: 0 4px 0px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 40px;
  bottom: 70px;
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
