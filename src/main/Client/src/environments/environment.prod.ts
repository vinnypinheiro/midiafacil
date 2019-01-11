export const environment = {
    production: true,
    getBaseURL: function () {
            // console.log('getBaseURL -> production', this.production);
            return 'http://192.168.0.32:8080';

    }
};
