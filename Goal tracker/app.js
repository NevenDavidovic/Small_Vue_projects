const app = Vue.createApp({
  // we can use it like this data: function(){} or like it is shown below
  data() {
    // function always return the object
    return {
      // you can setup any key:value pairs
      courseGoal: "Finish the course to learn Vue!",
      motivationalSayingA: "You are awesome!!",
      motivationalSayingB: "You can do it!!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    // it can be called as data solike this outputGoal(){}
    outputGoal: function () {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return this.motivationalSayingA;
      } else {
        return this.motivationalSayingB;
      }
    },
  },
});
// controling section user-goal(css selector -> ID)
app.mount("#user-goal");
