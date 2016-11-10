class mainController {

    constructor(todoService, NgMap, $interval) {
        this.todoService = todoService;
        this.load();

        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        var vm = this;
        vm.positions = [
            [48.57, 1.05],
            [48.50, 1.01],
            [48.53, 1.08],
            [48.55, 1.00],
            [48.51, 1.04]
        ];

        /*$interval(function() {
            var numMarkers = Math.floor(Math.random() * 4) + 4; //between 4 to 8 markers
            vm.positions = [];
            for (let i = 0; i < numMarkers; i++) {
                var lat = 48.47 + (Math.random() / 100);
                var lng = 1.00 + (Math.random() / 100);
                vm.positions.push([lat, lng]);
            }
        }, 2000);*/
        this.banane = 0;
    }
    modifier (incremente) {
      this.banane = Number(this.banane)+1
    }
    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        });
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load();
        });
    }

}
