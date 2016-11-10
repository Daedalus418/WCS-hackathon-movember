class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();

        $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );

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
