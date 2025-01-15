AFRAME.registerComponent('vtk', {
    init: function () {
      var self = this.el;
      var images = ["assets/vtk/1.jpg", "assets/vtk/2.jpg", 
        "assets/vtk/3.jpg", "assets/vtk/4.jpg", "assets/vtk/5.jpg"];

      var swithcflip = 0;

      setInterval(vtkjpg, 3000);

      function vtkjpg() {
        swithcflip = swithcflip + 1;
        
        if (swithcflip > images.length) swithcflip = 0;
        self.setAttribute("material", "src", images[swithcflip]);
      }
    }
  });