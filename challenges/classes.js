// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

{class CuboidMaker {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    volume() {
        return this.length*this.width*this.height;
      }
    surfaceArea() {
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
      }
  }
}

  class CubeMaker extends CuboidMaker{
      constructor(attr){
          super(attr);
      }
  }
 
  {
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })
}


  const cube = new CubeMaker({
      length: 6,
      width: 7,
      height: 3
  })
  
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
// function({CuboidMaker})();
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


console.log(cube.volume()); //126
console.log(cube.surfaceArea()); // 162

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.