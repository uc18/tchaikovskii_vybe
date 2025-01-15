AFRAME.registerComponent('kamb', {
    init: function () {
      var self = this.el;
      var images = ["assets/kamb/1.jpg", "assets/kamb/5.jpg", "assets/kamb/6.jpg", 
        "assets/kamb/7.jpg", "assets/kamb/2.jpeg", "assets/kamb/3.jpeg", "assets/kamb/4.jpeg"];

      var swithcflip = 0;

      setInterval(kambjpg, 3000);

      function kambjpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });