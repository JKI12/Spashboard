import DB from './index';
import moment from 'moment';

const findUser = (id) => {
  return new Promise((resolve, reject) => {
    DB.users.findOne({
      id
    }, (err, document) => {
      if (err) {
        return reject(error);
      }

      return resolve(document);
    });
  })
};

const addUser = (user) => {
  return new Promise((resolve, reject) => {
    DB.users.insert(user, (err, document) => {

      if (err) {
        return reject(err);
      }

      return resolve(document);
    });
  });
};

const updateUserToken = (id, accessToken) => {
  return new Promise((resolve, reject) => {
    DB.users.update({
      id
    }, {
      $set: {
        accessToken,
        expires: moment(new Date()).add(55, 'minutes').toISOString()        
      }
    }, {}, (err, numberUpdated) => {
      if (err) {
        return reject(err);
      }

      DB.users.persistence.compactDatafile();

      return resolve();
    });
  });
};

const findOrCreate = (user) => {
  return new Promise((resolve, reject) => {
   findUser(user.id)
    .then((dbUser) => {
      if (dbUser) {
        if (dbUser.accessToken === user.accessToken) {
          return resolve(dbUser);
        }

        dbUser.accessToken = user.accessToken;

        updateUserToken(user.id, user.accessToken)
          .then(() => {
            console.log(`Updated user: ${dbUser.id}`);            
            return resolve(dbUser)
          })
          .catch((error) => {
            console.error('*Update User:*');
            console.error(error);
            return reject(error);
          });
      } else {
        addUser(user)
        .then((document) => {
          console.log(`Added user: ${document.id}`);
          return resolve(document);
        })
        .catch((error) => {
          console.error('*Add User:*');
          console.error(error);
          return reject(error);
        });
      }
    })
    .catch((error) => {
      console.error('*Find user:*');
      console.error(error);
      return reject(error);
    });
  });
};

export default {
  findUser,
  findOrCreate
};
