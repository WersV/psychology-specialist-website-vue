import {
  reactive
} from "vue";
export const formSubmit = reactive({
  isFormSubmitted: false,
  changeSubmitStatus() {
    this.isFormSubmitted = true;
    setTimeout(() => {
      this.isFormSubmitted = false;
    }, 4000);
  },
});