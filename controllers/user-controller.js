import User from '../model/user.js';

class UserController {

  listUsers (req, res) {
    User.find().exec()
    .then((users) => {
      res.json(users);
    });
  }

  createUser (req, res) {
    let newUser = new User({
      ...req.body,
      books: []
    })

    newUser.save()
    .then((savedUser) => {
      res.json(savedUser);
    })
  }

  getUser (req, res) {
    User.byId(req.params.userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(404).end();
    })
  }

  updateUser (req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true } //Return the modified user
    )
    .then((updatedUser) => {
      if(updatedUser){
        res.json(updatedUser);
      } else {
        res.status(404).end();
      }
    })
  }

  deleteUser (req, res) {
    User.remove({ _id: req.params.userId }).exec()
    .then(() => {
      res.status(200).end();
    })
  }

}

export default new UserController();
