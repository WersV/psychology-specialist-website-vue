import {
  reactive
} from "vue";
export const globalStates = reactive({
  isFormSubmitted: false,
  homeRef: null,
  aboutUsRef: null,
  plansRef: null,
  contactUsRef: null,
  changeSubmitStatus() {
    this.isFormSubmitted = true;
    setTimeout(() => {
      this.isFormSubmitted = false;
    }, 4000);
  },
  addRefToGlobalState(ref, refName) {
    // this.aboutUsRef = compInstance.$refs.aboutUs;
    // console.log(ref, refName);
    switch (refName) {
      case "home":
        this.homeRef = ref;
        break;
      case "aboutUs":
        this.aboutUsRef = ref;
        break;
      case "plans":
        this.plansRef = ref;
        break;
      case "contactUs":
        this.contactUsRef = ref;
        break;
    }
  },
  scrollToEl(refName) {
    let currentRef = "";
    switch (refName) {
      case "home":
        currentRef = this.homeRef;
        break;
      case "aboutUs":
        currentRef = this.aboutUsRef;
        break;
      case "plans":
        currentRef = this.plansRef;
        break;
      case "contactUs":
        currentRef = this.contactUsRef;
        break;
    }
    window.scrollTo({
      top: currentRef.offsetTop - 70,
      behavior: "smooth",
    });
  },
});