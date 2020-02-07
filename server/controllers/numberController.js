const Number = require('../models/number');

exports.saveNumber = async (req, res) => {
  const { number } = req.body;

  // Validation
  if (isNaN(number) || number === '' || number === true) {
    return res.status(400).json({ message: 'Input must be a valid number.' });
  }

  Number.save(parseInt(number))
    .then(result => res.status(200).json(result))
    .catch(error => res.status(400).json(error));
}

exports.loadNumber = async (req, res) => {
  Number.load()
    .then(result => JSON.parse(result))
    .then(data => res.status(200).json(data))
    .catch(error => res.status(404).json(error));
}