const Number = require('../models/number');

exports.saveNumber = async (number) => {
  try {
    return await Number.save(number);
  } catch (error) {
    throw error;
  }
}

exports.loadNumber = async () => {
  try {
    const result = await Number.load();

    return JSON.parse(result);
  } catch (error) {
    throw error;
  }
}