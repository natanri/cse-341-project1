const sarahRoute = (req, res) => {
    res.send('Sarah Birtch');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Birtch');
};

const emilyRoute = (req, res) => {
    res.send('Emily Birtch');
};

module.exports = {
    emilyRoute,
    sarahRoute,
    hannahRoute,
}