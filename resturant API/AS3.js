var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));

app.get('/restaurants/:selected_cuisine', function (req, res) {
    var cuisine = req.params.cuisine;
    var sort_by = req.query.sort_by;
    var price_filter = req.query.price_filter;
    var options = {
        url:
            'https://api.yelp.com/v3/businesses/search?term=restaurants&categories='+cuisine +'&locale=en_CA&location=vancouver,bc,canada&price='+price_filter+'&sort_by='+sort_by,
        headers: {
            'Authorization': 'Bearer q35wQ_8uMVcfntQMurgp6wIKh6a1AxNPfD4QRNjHaaEJZqdbKtkUryc8Jz99kx3mDskgwum2H4Yzjdt6_ipq3bwz358ASbB1VKDN0FY7f-7Te5iR169bxgufaFFbW3Yx'
        }
    };

    request(options,
        (err, response, body) => {
            if (err) {
                return console.log(err);
            } else {
                res.send(body);
            }
        });
});
app.get('/reviews/:num', function (req, res) {
    var _id = req.params.num;
    var options2 = {
        url: 'https://api.yelp.com/v3/businesses/'+ _id+'/reviews',
        headers: {
            'Authorization': 'Bearer q35wQ_8uMVcfntQMurgp6wIKh6a1AxNPfD4QRNjHaaEJZqdbKtkUryc8Jz99kx3mDskgwum2H4Yzjdt6_ipq3bwz358ASbB1VKDN0FY7f-7Te5iR169bxgufaFFbW3Yx'
        }
    };
    request(options2,
        (err, response2, body2) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('data from API call = ' + JSON.stringify(body2));
                res.send(body2);
            }
        });
});
app.listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
});