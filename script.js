class Person {
    constructor(name, age, sub, contact, address, country) {
      this.name = name;
      this.age = age;
      this.sub = sub;
      this.contact = contact;
      this.address = address;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Age: ${this.sub}`);
      console.log(`Age: ${this.contact}`);
      console.log(`Age: ${this.address}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person('Ajith Kumar', 25,'Fullstack',54548641549,'14/15,eeee,rrrd.','India');
  const person2 = new Person('Shaeed', 24, 'Devops',54548641549,'10/12,cccc,ddd.','India');
  
  // Display data of person1
  console.log('Person-1 Data:');
  person1.displayDetails();
  
  // Display data of person2
  console.log('\nPerson-2 Data:');
  person2.displayDetails();

  //Uber price calculation

  class UberPriceCalculator {

    static basic_price = 25;
    static per_km_price = 15;
    static per_min_waiting_price = 1;
    
    constructor(distance, time) {
    
    this.distance = distance;
    this.time = time;
    
    }
    
    priceCalc() {
    const distancePrice = this.distance * UberPriceCalculator.per_km_price;
    const waitingPrice = this.time * UberPriceCalculator.per_min_waiting_price;
    const totalFare = UberPriceCalculator.basic_price + distancePrice + waitingPrice;
        return totalFare;
        }
    
    getDistance() {
    return this.distance;
     }

    setDistance(distance) {
    this.distance = distance;
     }

     getDuration() {
    return this.time;
     }

    setDuration(time) {
    this.time = this.time;
     }

    toString() {
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} Km, duration=${this.time} minutes]`;
    }
    }
    
    const calculator = new UberPriceCalculator(5.5, 15);
    console.log(calculator.toString());
    const fare = calculator.priceCalc();
    console.log(`Total Fare: RS:${fare.toFixed(2)}`);