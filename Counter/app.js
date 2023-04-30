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
      const alphabet = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
      };

      this.text = event.target.value;

      this.cipherText = this.text;

      this.cipherTextArray.push(
        this.cipherText.charCodeAt(0) - "a".charCodeAt(0) + 1
      );
    },
  },
});

app.mount("#events");
