const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: "",
      cipherText: "",
      cipherTextArray: "",
    };
  },
  methods: {
    addCounter() {
      this.counter += 1;
    },
    subtractCounter() {
      this.counter -= 1;
    },

    getText(event) {
      this.text = event.target.value;
    },
  },
});

app.mount("#events");
