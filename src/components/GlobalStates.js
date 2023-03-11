import {
  reactive
} from "vue";
export const globalStates = reactive({
  SECTIONS: {
    home: {
      ref: null,
      index: 0,
    },
    aboutUs: {
      ref: null,
      index: 1,
    },
    plans: {
      ref: null,
      index: 2,
    },
    contactUs: {
      ref: null,
      index: 3,
    },
  },
  isSectionActive: [true, false, false, false],
  lastSectionActive: [false, false, false, false],
  currentRefOffset: 0,
  changeSubmitStatus() {
    this.isFormSubmitted = true;
    setTimeout(() => (this.isFormSubmitted = false), 4000);
  },
  addRefToGlobalState(refName, ref) {
    if (refName in this.SECTIONS) {
      //The in operator alone will return true if a specified key/property is in an object
      this.SECTIONS[refName].ref = ref;
    }
  },
  scrollToEl(refName) {
    const SECTION_OFFSET_ADJUSTMENT = 70;

    this.lastSectionActive = this.isSectionActive;
    this.isSectionActive = [false, false, false, false];
    const section = this.SECTIONS[refName];
    if (refName === "home") {
      this.currentRefOffset = section.ref.offsetTop;
    } else {
      this.currentRefOffset = section.ref.offsetTop - SECTION_OFFSET_ADJUSTMENT;
    }
    this.isSectionActive[section.index] = true;
    window.scrollTo({
      top: this.currentRefOffset,
      behavior: "smooth",
    });
  },
  changeClassOnScroll(refName) {
    this.lastSectionActive = this.isSectionActive;
    this.isSectionActive = [false, false, false, false];
    if (refName in this.SECTIONS) {
      const index = this.SECTIONS[refName].index;
      this.isSectionActive[index] = true;
    }
  },
});