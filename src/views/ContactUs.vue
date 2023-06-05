<template>
  <section class="contact-us" ref="contactUs">
    <header>
      <h2>Our help offer</h2>
      <p>
        At our clinic, we provide a compassionate and supportive environment
        where individuals can find the guidance and tools they need to overcome
        challenges, discover personal growth, and achieve lasting well-being.
      </p>
      <ul>
        <li>Personalized therapy for resilience and growth.</li>
        <li>Evidence-based interventions for mental health and well-being.</li>
        <li>
          Strengthen relationships through effective communication and conflict
          resolution.
        </li>
      </ul>
    </header>
    <footer>
      <h3>Help form</h3>
      <form @submit.prevent="onSubmit">
        <label for="email-contact-us">Email</label>
        <input
          type="email"
          id="email-contact-us"
          placeholder="Enter your email"
          v-model="inputValue"
        />
        <label for="message">Message</label>
        <textarea
          name=""
          id="message"
          placeholder="Enter your message"
          v-model="textAreaValue"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </footer>
  </section>
</template>
<script>
import { globalStates } from "../components/GlobalStates.js";
export default {
  data() {
    return {
      name: "ContactUs",
      isFormSubmitted: false,
      inputValue: "",
      textAreaValue: "",
      globalStates,
    };
  },
  mounted() {
    this.globalStates.addRefToGlobalState("contactUs", this.$refs.contactUs);
  },
  methods: {
    onSubmit() {
      const key = "1a0bf743549b4122839c69f78395e388";
      const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${this.inputValue}`;

      const sendValidationRequest = async (emailAddress) => {
        try {
          const apiResponse = await fetch(emailAddress);
          const data = await apiResponse.json();
          const isValid = data.is_valid_format.value;
          return isValid;
        } catch (error) {
          console.error(error);
          throw new Error(`Failed to validate email: ${error.message}`);
        }
      };

      if (this.inputValue !== "" && this.textAreaValue !== "") {
        const validateEmail = async () => {
          const isValid = await sendValidationRequest(url);
          if (isValid) {
            this.inputValue = "";
            this.textAreaValue = "";
            this.globalStates.changeSubmitStatus();
          } else {
            alert("Please provide a correct email address.");
          }
        };
        validateEmail();
      } else {
        alert("The email and message fields cannot be left empty.");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixins";
@import "../assets/css/variables";
$font-size-basic: 20px;
.contact-us {
  padding: 20px 20px 70px 20px;
  margin-top: 50px;
  background-color: #f2f2f2;
  header {
    margin-top: 50px;
    h2 {
      font-size: $font-size-basic * 2;
    }
    p {
      @include paragraph(130%);
    }
    ul {
      padding: 20px;
      li {
        padding: 5px 0;
        font-size: $font-size-basic;
        color: $text-on-gray;
        font-weight: bold;
      }
    }
  }
  footer {
    h3 {
      font-size: $font-size-basic * 1.4;
      letter-spacing: 1px;
    }
    form {
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20px;
      border-radius: 20px;
      height: 300px;
      label {
        margin: 5px 0;
        font-size: 17px;
      }
      input,
      textarea {
        font-size: 17px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #aaa;
      }
      textarea {
        resize: vertical;
        min-height: 50px;
        height: 100px;
      }
      button {
        padding: 10px;
        width: 40%;
        align-self: flex-end;
        background-color: $text-on-white;
        color: white;
        border: 0;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 551px) {
  .contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
      width: 500px;
    }

    footer {
      width: 500px;
    }
  }
}

@media (min-width: 761px) {
  .contact-us {
    flex-direction: row;
    column-gap: 50px;
    justify-content: center;
    header {
      // flex-basis: 500px;
      margin: 0;
      h2 {
        margin: 10px 0;
      }
    }

    footer {
      // flex-basis: 500px;
      h3 {
        margin: 10px 0;
      }
    }
  }
}
</style>
