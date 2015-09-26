import assert from 'power-assert';
import _ from 'lodash';
import jsdom from 'mocha-jsdom';
import AddStatus from 'lib/add-status';

describe('AddStatus', ()=> {
  jsdom();

  it('should extends from Vue class', ()=> {
    assert(AddStatus.super.name.toString() === 'Vue');
  });

  it('should have a data initialization function', ()=> {
    assert(typeof AddStatus.options.data === 'function');
  });

  it('should have a props array', ()=> {
    assert(_.isArray(AddStatus.options.props));
  });

  it('should have a stores as props', ()=> {
    assert(AddStatus.options.props[0].name === 'stores');
  });

  it('should set correct default data', ()=> {
    const addStatusInsatnce = new AddStatus();
    const initialData = { message: '', emoji: ''};
    assert(_.isMatch(addStatusInsatnce.newStatus, initialData));
  });

  it('should can create custom element', ()=> {
    const AddStatusElement = document.createElement('add-status');
    AddStatusElement.setAttribute('stores', '{{ stores }}');
    assert(_.isElement(AddStatusElement));
  });

  it('should have a onStatusAdd method', ()=> {

  });
});
