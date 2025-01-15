AFRAME.registerComponent('fly', {
    init: function () {
      var self = this.el;
      var images = ["assets/fly/1.jpg", "assets/fly/2.jpg", "assets/fly/3.jpg", "assets/fly/4.jpg", "assets/fly/5.jpg", "assets/fly/6.jpeg"];

      var swithcflip = 0;

      setInterval(flyjpg, 3000);

      function flyjpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });