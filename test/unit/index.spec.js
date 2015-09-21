import _ from 'lodash';
import Component from '../../src/hence-product-card';

describe('ES6 component Tests - hence-product-card', () => {
  let component;

  beforeEach(() => {
    component = _.cloneDeep(Component);
  });

  afterEach(() => {
  });

  it('should have the default greeting property set', () => {
    expect(component.properties.greeting.value).to.equal('Hello!');
  });

  it('should sayHello', () => {
    expect(component.sayHello()).to.equal('hence-product-card says, Hello World!');
  });

  it('should have a polymer config', () => {
    expect(component.is).to.equal('hence-product-card');
  });
});
