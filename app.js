var _ = require('lodash');

const user = {
  name: 'Imie',
  surname: 'Nazwisko',
  allGrades: [
    {
      subjectName: 'Name1',
      grades: [5, 4, 3, 5, 2],
      weight: 3
    },
    {
      subjectName: 'Name2',
      grades: [3, 3.5, 2],
      weight: 1
    },
    {
      subjectName: 'Name3',
      grades: [4, 3, 3.5],
      weight: 5
    }
  ]
}

const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ['aaa', 'bbb', 5],
  'admin@gmail.com',
  undefined,
  'a34@yahoo.com',
  '321@a',
  '321.pl'
];

console.log("---------------Zadanie 1.")
function mean(){
  var items = _.filter(arguments, function(n){
        if(_.isNumber(n)) return true;
        else{
          return false;
        }
      });
  return _.mean(items);
}
console.log("mean = " + mean(1,2,3,"a",12));

console.log("---------------Zadanie 2.")
function min(){
  var items = _.filter(arguments, function(n){
        if(_.isNumber(n)) return true;
        else{
          return false;
        }
      })

  return _.min(items);
}
console.log("min = " +min(1,2,3,"a",12));
function max(){
  var items = _.filter(arguments, function(n){
        if(_.isNumber(n)) return true;
        else{
          return false;
        }
      })

  return _.max(items);
}
console.log("max = " + max(1,2,3,"a",12));

console.log("---------------Zadanie 3.")
function wMean(u){
  var av_d = 0;
  var sum_w = 0;
  for(var s of u.allGrades){
    av_d += _.mean(s.grades) * s.weight;
    sum_w += s.weight;
  }
  return av_d / sum_w;
}
console.log("Srednia wazona = " + wMean(user));

console.log("---------------Zadanie 4.")
console.log(_.find(user.allGrades, function(o){
  if(o.weight == 1) return true;
}).subjectName);

console.log("---------------Zadanie 5.")
function getMails(collections){
  const regex = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}');
  var arr = [];
  for(var o of collections){
    if(regex.test(o)){
      arr.push(o);
    }
  }
  return arr.sort();
}
console.log(getMails(collections));
