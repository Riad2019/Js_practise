const smartphone= {
    brand : "Sumsang",
    model : "Note 10",
    makeCall : function(Number) {

        console.log(`Now Make a call to ${Number}`);
    },
    'make-Year': 2022,  // if there object name is using hyphen then use this '' 
    users : [ 'Rahim' ,'Karim' ,'Istiaq'],
    lastBuy : {
         shop: 'Basundhora',
         date: '24-4-2022'

    }

};

console.log(smartphone);
console.log(smartphone.model);
console.log(smartphone.brand);
console.log(smartphone.users);
console.log(smartphone.lastBuy);
console.log(`Buying Date :${smartphone.lastBuy.date}`);
let callingNumber = smartphone.makeCall('01937091332');

console.log(smartphone['make-Year']);//object working as a array .