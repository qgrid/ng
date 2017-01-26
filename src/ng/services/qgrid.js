import Model from '../../core/infrastructure/model';
import QGridService from '../../core/services/qgrid';

export default class QGrid {
	constructor() {
	}

    model() {
        return new Model();
    }

    service(model) {
        return new QGridService(model);
    }

    get pipe() {

    }
}