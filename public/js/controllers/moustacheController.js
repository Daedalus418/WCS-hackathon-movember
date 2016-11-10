class moustacheController {


    constructor(moustacheService) {
        this.moustacheService = moustacheService;
        this.load();
    }

    function () {
        var takePicture = document.querySelector("#take-picture"),
            showPicture = document.querySelector("#show-picture");

        function uploadFile(file) {
            var url = '/api/picture';
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open("POST", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Every thing ok, file uploaded
                    console.log(xhr.responseText); // handle response.
                }
            };
            fd.append("upload_file", file);
            xhr.send(fd);
        };

        var uploadfiles = document.querySelector('#uploadImage');
        uploadfiles.addEventListener('change', function() {
            var files = this.files;
            for (var i = 0; i < files.length; i++) {
                uploadFile(this.files[i]); // call the function to upload the file
            }
        }, false);

    }


    load() {
        this.moustacheService.getAll().then((res) => {
            this.moustaches = res.data;
        });
    }

    create(moustache) {

        var urlImage = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(urlImage);
        moustache = moustache ? moustache : {};
        moustache.image = urlImage;

        this.moustacheService.create(moustache).then(() => {
            this.moustache = '';
            this.load();
        });
    }

    update(moustache) {
        this.moustacheService.update(moustache._id, moustache).then(() => {
            this.load();
        });
    }

    delete(moustache) {
        this.moustacheService.delete(moustache._id).then(() => {
            this.load();
        });
    }

}
