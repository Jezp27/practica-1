import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inicio-sesion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inicio-sesion');
    assert.ok(route);
  });
});
