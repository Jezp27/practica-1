import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | inicio-sesion', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:inicio-sesion');
    assert.ok(controller);
  });
});
