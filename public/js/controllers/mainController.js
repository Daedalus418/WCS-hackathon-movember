class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();
    }

    var myApp = angular.module('myApp', ['ngMap']);

    app.controller('MyController', function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  });

  app.controller('mapController', function($interval) {
  var vm = this;
  vm.positions =[
    [40.71, -74.21], [40.72, -74.20], [40.73, -74.19], [40.74, -74.18],
    [40.75, -74.17], [40.76, -74.16], [40.77, -74.15], [40.77, -74.15]
  ];

  $interval(function() {
    var numMarkers = Math.floor(Math.random() * 4) + 4; //between 4 to 8 markers
    vm.positions = [];
    for (i = 0; i < numMarkers; i++) {
      var lat = 40.71 + (Math.random() / 100);
      var lng = -74.21 + (Math.random() / 100);
      vm.positions.push([lat, lng]);
    }
  }, 2000);
});

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load()
        })
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load()
        })
    }

}
