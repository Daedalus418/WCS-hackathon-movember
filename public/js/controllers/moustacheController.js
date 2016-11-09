class moustacheController {

    constructor(moustacheService) {
        this.moustacheService = moustacheService;
        this.load();
    }

    load() {
        this.moustacheService.getAll().then((res) => {
            this.moustaches = res.data;
        })
    }

    create() {
        this.moustacheService.create(this.moustache).then(() => {
            this.moustache = '';
            this.load()
        })
    }

    update(moustache) {
        this.moustacheService.update(moustache._id, moustache).then(() => {
            this.load()
        })
    }

    delete(moustache) {
        this.moustacheService.delete(moustache._id).then(() => {
            this.load()
        })
    }

}
