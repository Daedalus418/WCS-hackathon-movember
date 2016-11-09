class moustacheService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/moustaches', {
            image: data.image,
            like: data.like,
            lat: data.lat,
            lng: data.lng
        })
    }

    getAll() {
        return this.$http.get('/api/moustaches')
    }

    getOne(id) {
        return this.$http.get('/api/moustaches/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/moustaches/' + id, {
          image: data.image,
          like: data.like,
          lat: data.lat,
          lng: data.lng
        })
    }

    delete(id) {
        return this.$http.delete('/api/moustaches/' + id)
    }

}
