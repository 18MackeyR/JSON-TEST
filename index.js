
const jsonfile = require('jsonfile')
const file = 'data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)

for (i=0;i<obj.items.length; i++){
    let items = obj.items[i];
    console.log(items.fname, items.age); 
}

})