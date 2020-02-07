const numberService = require('../services/numberService');

exports.saveNumber = async (req, res) => {
  const { number } = req.body;

  // Validation
  if (isNaN(number) || number === '' || number === true) {
    return res.status(400).json({ message: 'Input must be a valid number.' });
  }

  try {
    const resultMessage = await numberService.saveNumber(parseFloat(number));

    return res.status(200).json(resultMessage);
  } catch (err) {
    return res.status(400).json(err);
  }
}

exports.loadNumber = async (req, res) => {
  try {
    const loadedNumber = await numberService.loadNumber();

    return res.status(200).json(loadedNumber);
  } catch (err) {
    return res.status(404).json(err);
  }
}