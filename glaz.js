AFRAME.registerComponent('glaz', {
    init: function () {
      var self = this.el;
      var images = ["assets/glaz/1.jpg", "assets/glaz/2.jpg", 
        "assets/glaz/3.png", "assets/glaz/4.png", 
        "assets/glaz/5.png", "assets/glaz/6.png", 
        "assets/glaz/7.jpg","assets/glaz/8.jpg","assets/glaz/9.jpg", 
        "assets/glaz/10.jpg", "assets/glaz/11.jpg"];

      var swithcflip = 0;

      setInterval(canvjpg, 3000);

      function canvjpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });