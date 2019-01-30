let prefixList = [];
let testStr = '';
function fetchData() {
    prefixList = [];
    axios.get('http://web-who/node/longest_prefix/api/fetchPrefix')
        .then(function (data) {
            prefixList = data.data.items;
            document.getElementById('data').innerHTML = prefixList;
        })
        .catch(function (err) {
            console.log("error!");
        });
}

function textChange(text) {
    testStr = text.value;
}

function findLongestPrefix() {
    let prefix = '';

    // sorts array by the parameter function
    let prefixList2 = _.sortBy(prefixList, [function (i) {
        return i.length;
    }]);
    // takeWhile returns a new array, starting at first index until the parameter function returns false
    prefixList2 = _.takeWhile(prefixList2, function (i) {
        return i.length <= testStr.length;
    });
    // begins at last index, and moves backwards to the first
    _.forEachRight(prefixList2, function(i) {
        // tests if the first parameter starts with the second
        if (_.startsWith(testStr, i)) {
            prefix = i;
            return false;
        }
    });

    document.getElementById('results').innerHTML = prefix;
}