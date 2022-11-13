const { user } = require("../../models");

exports.register = async (req, res) => {
  try {
    const newUser = await user.create({
      firstName: "Jody",
      lastName: "Septiawan",
      email: "jody.septiawan5@gmail.com",
    });

    res.send({ user: newUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const dataUser = await user.findAll();

    res.send({ user: dataUser });
  } catch (error) {
    res.status(400).send(error);
  }
};
