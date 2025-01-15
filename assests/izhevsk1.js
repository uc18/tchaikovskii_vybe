AFRAME.registerComponent('izh1', {
    init: function () {
      var self = this.el;
      var images = ["assets/izh1/1.jpg", "assets/izh1/2.jpg", 
        "assets/izh1/3.jpg", 
        "assets/izh1/4.jpg", "assets/izh1/5.jpg", 
        "assets/izh1/6.jpg", "assets/izh1/7.jpg", "assets/izh1/8.jpg",
    "assets/izh1/9.jpg", "assets/izh1/10.jpg", "assets/izh1/11.jpg", 
    "assets/izh1/12.jpg"];

      var swithcflip = 0;

      setInterval(izh1jpg, 3000);

      function izh1jpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });