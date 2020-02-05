// exports is an object included into every JS file in Node 
// you can attach properties and methods to it and they will be exposed as a module 

exports.decrease = (req, res) => {
  res.json({ result: parseInt(req.params.number) - 1});
};

exports.increase = (req, res) => {
  res.json({ result: parseInt(req.params.number) + 1});
}; 

exports.uppercase = (req, res) => {
  res.json({ result: req.params.letter.toUpperCase() });
}; 

exports.lowercase = (req, res) => {
  res.json({ result: req.params.letter.toLowerCase() });
}; 

