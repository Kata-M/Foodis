const httpOptions = {
  headers: {'X-Mashape-Key': 'YOUR_API_KEY'}
};

const DataModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  let listOfFoodItems = [];

  var FoodItem = function(id,name, price, quantity,used,wasted,wastedPrecentage) {
  this.id = id
  this.name = name
  this.price = price
  this.quantity = quantity
  this.used = used
  this.wasted = wasted
  this.wastedPrecentage = wastedPrecentage
  }
  var testFood1 = new FoodItem(1,"Milk", 1.5, "1",true,false,0); 
  var testFood2 = new FoodItem(2,"Bread", 1.05, "1",false,false,0);
  var testFood3 = new FoodItem(3,"Cucumber", .07, "3",true,false,0);
  var testFood4 = new FoodItem(4,"Chocolate", 1.25, "2",false,false,0);
  var testFood5 = new FoodItem(5,"Mango", 3.5, "100",false,false,0);
  listOfFoodItems.push(testFood1);
  listOfFoodItems.push(testFood2);
  listOfFoodItems.push(testFood3);
  listOfFoodItems.push(testFood4);
  listOfFoodItems.push(testFood5);

  this.getlistOfFoodItems = function () {
    console.log(listOfFoodItems)
    return listOfFoodItems;
  };

  this.toggleUsed = function (tab){
    var i;
    for (i = 0; i < listOfFoodItems.length; i++) { 
      if(listOfFoodItems[i].name == tab.name){
        console.log("testiiing")
        console.log(listOfFoodItems[i].name)
        console.log("tab")
        console.log(tab)
        listOfFoodItems[i].used = !listOfFoodItems[i].used
      }
    }

  }


  let sliderValue = 0;

  this.setSliderValue = function (value) {
    sliderValue = value;
    notifyObservers();
  };

  this.getSliderValue = function () {
    console.log("in model " + sliderValue);
    return sliderValue;
  };

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  // API Calls

  this.getAllDishes = function () {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }
  
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DataModel();
