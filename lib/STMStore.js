import each from 'lodash/each';
import { DataStore } from 'js-data';


export default class STMStore extends DataStore {

  constructor(config) {
    super(config);
    this.modelsMap = new Map();
  }

  clear() {
    super.clear();
    // eslint-disable-next-line
    each(this._mappers, mapper => {
      mapper.clear();
    });
  }

  addModel(name, model) {
    this.modelsMap.set(name, model);
  }

  getModel(name) {
    return this.modelsMap.get(name);
  }

}
