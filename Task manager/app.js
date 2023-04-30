Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    exportToTxt() {
      const data = this.goals.join("\n");
      const blob = new Blob([data], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "tasks.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
}).mount("#app");
