function fetchData() {
    let prefixList = [];
    axios.get('//web-who/node/longest_prefix/api/fetchPrefix')
        .then(function (data) {
            prefixList = data.items;
            document.getElementById('data').innerHTML = prefixList;
        })
        .catch(function (err) {
            console.log("error!");
        });
}

function textChange(text) {
    let testStr = text;
}

function findLongestPrefix() {
    let prefix = '';

    // takeWhile returns a new array, starting at first index until the parameter function returns false
    let prefixList = _.takeWhile(prefixList, function (i) {
        return i.length <= testStr.length;
    });
    // sorts array by the parameter function
    prefixList = _.sortBy(prefixList, [function (i) {
        return i.length;
    }]);
    // begins at last index, and moves backwards to the first
    _.forEachRight(prefixList, function(i) {
        // tests if the first parameter starts with the second
        if (_.startsWith(testStr, i)) {
            prefix = i;
            return false;
        }
    });

    document.getElementById('results').innerHTML = prefix;
}