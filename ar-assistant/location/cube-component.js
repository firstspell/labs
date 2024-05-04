AFRAME.registerComponent("cube", {
  schema: {},
  init: function () {
    console.log("init....");
    var lastIndex = -1;
    var COLORS = ["red", "green", "blue"];
    this.el.addEventListener("touchstart", function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute("material", "color", COLORS[lastIndex]);
      console.log("I was clicked at: ", evt.detail.intersection.point);
      let element = document.querySelector("#naturebg");
      console.log("element :: ", element);
      element.setAttribute("autoplay", true);
    });
  },
  update: function () {
    console.log("update....");
  },
  //   tick: function () {
  //     console.log("ticket....");
  //   },
  remove: function () {
    console.log("remove....");
  },
  pause: function () {
    console.log("pause....");
  },
  play: function () {
    console.log("play....");
  }
});
