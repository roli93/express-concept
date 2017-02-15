import User from '../model/user.js';

class UserController {

  listUsers (req, res) {
    User.find().exec()
    .then((users) => 
      res.json(users)
    );
  }

  createUser (req, res) {

  }

  getUser (req, res) {

  }

  updateUser (req, res) {

  }

  deleteUser (req, res) {

  }

}

export default new UserController();
