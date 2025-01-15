AFRAME.registerComponent('sarapul', {
    init: function () {
      var self = this.el;
      var images = ["assets/sar/1.jpg", 
        "assets/sar/2.jpg", 
        "assets/sar/3.jpg", 
        "assets/sar/4.jpg", 
        "assets/sar/5.jpg", "assets/sar/6.jpg", "assets/sar/7.jpg", 
        "assets/sar/8.jpg", "assets/sar/9.jpg","assets/sar/10.jpg", 
        "assets/sar/11.jpg", 
        "assets/sar/12.jpg"];

      var swithcflip = 0;

      setInterval(sarjpg, 3000);

      function sarjpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });