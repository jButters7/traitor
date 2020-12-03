const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const [user] = await db.check_username([username]);

    if (user) {
      return res.status(409).send('user already exists');
    };

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const [newUser] = await db.register_user([username, hash]);

    req.session.user = newUser;

    res.status(201).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const [existingUser] = await db.check_username([username]);

    if (!existingUser) {
      return res.status(404).send('Username not found')

    };

    const isAuthenticated = bcrypt.compareSync(password, existingUser.password_hash);

    if (!isAuthenticated) {
      return res.status(403).send('Incorrect username or password');
    }

    delete existingUser.password_hash;

    req.session.user = existingUser;
    res.status(200).send(req.session.user);
  },

  getUser: async (req, res) => {
    const db = req.app.get('db');
    if (req.session.user) {
      const [currentUser] = await db.get_user_info(req.session.user.traitor_users_id);
      res.status(200).send(currentUser);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
}