// Code your solution here
// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const drivers1= [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  findMatching(drivers,"Bobby");

function fuzzyMatch(drivers,name){
    return drivers.filter(driver => driver[0] === name[0])
}
fuzzyMatch(drivers, "Sa");

const matchName =(drivers1, name) =>{return drivers1.filter(driver => driver.name ===name)};

matchName(drivers1, "Bobby");