import Datastore from 'nedb';

export default {
  users: new Datastore({
    filename: '../storage/users.db',
    autoload: true
  })
}
