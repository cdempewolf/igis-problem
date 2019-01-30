var express = require('express'),
    app = express();

app.get('/node/longest_prefix/api/fetchPrefix', function (req, res) {
    res.send({ items: ["abc", "abcd", "abccd", "abcde", "abcdde", "abcdee"] });
});

app.set('port', process.env.PORT);
app.listen(process.env.PORT);