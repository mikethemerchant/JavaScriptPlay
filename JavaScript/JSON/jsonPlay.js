let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);

console.log(obj.employees[1].firstName);

obj.employees.forEach(x => {
    console.log(x.firstName)
});

