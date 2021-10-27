import Users from "../models/users.js";

export const createUser = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;

  const newUser = new Users({
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });

  newUser
    .save()
    .then((data) =>
      res.json({
        data,
        success: true,
      })
    )
    .catch((err) => res.json(err));
};

export const signIn = async (req, res) => {
  const { body } = req;
  const { username, password } = body;

  if (!username || !password) {
    return res.send({
      info: {
        success: false,
        message: "Wiersze nie mogą być puste!",
      },
    });
  } else {
    const validateUser = async (password, username) => {
      const user = await Users.findOne({ username });

      if (!user) {
        return res.status(200).json({
          success: false,
          message: "Niepoprawne dane logowania",
        });
      } else {
        const result = await user.comparePassword(password);

        if (result) {
          return res.status(200).json({
            success: true,
            message: `Zalogowałeś się ${username}`,
            user,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Niepoprawne dane logowania",
          });
        }
      }
    };

    validateUser(password, username);
  }
};
