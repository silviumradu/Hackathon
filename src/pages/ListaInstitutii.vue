<template>
  <div class="flex">
    <div class="fit col-grow items-center justify-center">
      <div class="q-pa-md row justify-center items-start q-gutter-md">
        <div class="lista-institutii">
          <div class="flex-wrapper-one">
            <p class="header-text-institutii">
              {{ headerTextInstitutii }}
            </p>
          </div>
          <div class="flex-wrapper-two">
            <p class="header-text-institutii-two">
              {{ headerTextInstitutiiTwo }}
            </p>
          </div>
          <div class="flex-wrapper-five">
            <p class="header-text-institutii-three">
              {{ headerTextInstitutiiThree }}
            </p>
          </div>
          <div class="flex-wrapper-five">
            <p class="header-text-institutii-three">
              {{ headerTextInstitutiiFour }}
            </p>
          </div>
          <div class="flex-wrapper-two">
            <p class="header-text-institutii-three">
              {{ headerTextInstitutiiFive }}
            </p>
          </div>
          <div class="flex-wrapper-seven">
            <p class="header-text-institutii-three">
              {{ headerTextInstitutiiSix }}
            </p>
          </div>
          <div class="relative-wrapper-one">
            <div class="flex-wrapper-three">
              <p class="header-text-institutii-three">
                {{ headerTextInstitutiiSeven }}
              </p>
            </div>
            <p class="header-text-institutii-four">
              {{ headerTextInstitutiiEight }}
            </p>
            <div class="flex-wrapper-eight">
              <p class="header-text-institutii-three">
                {{ headerTextInstitutiiNine }}
              </p>
            </div>
          </div>
          <div class="flex-wrapper-four">
            <p class="header-text-institutii-two">
              {{ headerTextInstitutiiTen }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaInstitutii",
  props: {
    headerTextInstitutii: {
      type: String,
      default: "lista Institutii"
    },
    headerTextInstitutiiTwo: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiThree: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiFour: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiFive: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiSix: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiSeven: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiEight: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiNine: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    headerTextInstitutiiTen: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  }
};
</script>

<style lang="scss">
@import "../src/css/app.scss";
.lista-institutii {
  padding: 86px 27px 86px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // background-image: url("https://static.overlay-tech.com/assets/4749d5c9-a826-46d7-be0e-63fb5234f9fd.png");
}
.flex-wrapper-one {
  background-color: $transparent-dim-gray;
  padding: 37px 91px 50px 88px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
}
.header-text-institutii {
  @include roboto-18-regular;
  color: $white;
  text-transform: uppercase;
  text-decoration: underline;
}
.flex-wrapper-two {
  background-color: $transparent-dim-gray;
  padding: 7px 19px 12px 25px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
}
.header-text-institutii-two {
  width: 274px;
  @include roboto-18-regular;
  color: $white;
  text-transform: uppercase;
  text-decoration: underline;
}
.flex-wrapper-five {
  background-color: $transparent-dim-gray;
  padding: 0 19px 19px 25px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
}
.header-text-institutii-three {
  width: 274px;
  @include roboto-18-regular;
  color: rgba(252, 252, 252, 1);
  text-transform: uppercase;
  text-decoration: underline;
}
.flex-wrapper-seven {
  background-color: $transparent-dim-gray;
  margin-bottom: 50px;
  padding: 7px 19px 12px 25px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
}
.relative-wrapper-one {
  margin-bottom: 58px;
  position: relative;
}
.flex-wrapper-three {
  background-color: $transparent-dim-gray;
  padding: 5px 19px 14px 25px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  position: relative;
}
.header-text-institutii-four {
  width: 274px;
  @include roboto-18-regular;
  color: rgba(252, 252, 252, 1);
  text-transform: uppercase;
  text-decoration: underline;
  position: absolute;
  right: 19px;
  bottom: -39px;
}
.flex-wrapper-eight {
  background-color: $transparent-dim-gray;
  padding: 0 19px 19px 25px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: -50px;
}
.flex-wrapper-four {
  background-color: $transparent-dim-gray;
  padding: 0 24px 19px 20px;
  box-shadow: 0 4px 4px 0 $transparent-black;
  display: flex;
  align-items: flex-start;
}
</style>
