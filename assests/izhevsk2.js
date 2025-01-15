AFRAME.registerComponent('izh2', {
    init: function () {
      var self = this.el;
      var images = ["assets/izh2/1.png", 
        "assets/izh2/2.png", "assets/izh2/3.png", 
        "assets/izh2/4.png", "assets/izh2/5.png", 
        "assets/izh2/6.png", "assets/izh2/7.png", 
        "assets/izh2/8.png", "assets/izh2/9.png",
        "assets/izh2/10.png"];

      var swithcflip = 0;

      setInterval(izh2jpg, 3000);

      function izh2jpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });