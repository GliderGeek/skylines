import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  ajax: service(),

  model({ user_id }) {
    return this.get('ajax').request(`/api/users/${user_id}?extended`);
  },
});
