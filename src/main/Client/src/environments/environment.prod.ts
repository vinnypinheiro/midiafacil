export const environment = {
    production: true,
    getBaseURL: function () {
            // console.log('getBaseURL -> production', this.production);
            return 'http://localhost:8080';

    }
};
