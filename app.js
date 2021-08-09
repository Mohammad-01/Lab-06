"use strict"

let seattle = [];
let openinghours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',"        Total"]

let con = document.getElementById('con');
let tableEl = document.createElement('table');
con.append(tableEl);

function Location (LocationName,min,max,AvgCookie){

    this.LocationName = LocationName;
    this.min = min;
    this.max = max;
    this.Total = 0;
    this.AvgCookie = AvgCookie;
    this.cockiesPerHour = [];
    seattle.push(this);

    
//************************************** */

Location.prototype.render = function () {
        
    let tre1 = document.createElement('tr');
    tableEl.appendChild(tre1);

    let tdEl1 = document.createElement('td');
    tre1.appendChild(tdEl1);
    tdEl1.textContent = this.LocationName;
    
    for (let b = 0; b < 14; b++){
    let tdEl5 = document.createElement('td');
    tre1.appendChild(tdEl5);
    tdEl5.textContent = this.cockiesPerHour[b];
    }

    for(let r = 0; r < openinghours.length; r++){

        let tdEl3 = document.createElement('td')
        tre1.appendChild(tdEl3)
        tdEl3.textContent = this.AvgCookie[r]
    }

    let tdEl2 = document.createElement('td')
    tre1.appendChild(tdEl2)
    tdEl2.textContent = this.Total

   // console.log(this.cockiesPerHour);
}

}

    //*********************************** */
    Location.prototype.Randomm = function () {

        for (let i = 0 ; i < openinghours.length ; i++ ){

            let value = getRandomInt(this.min,this.max);
            this.cockiesPerHour.push( value * this.AvgCookie);
            this.Total += this.cockiesPerHour[i];
            
        } 
      
    
    }

     
        function getRandomInt (min,max) {
        let minn = Math.ceil(min);
        let maxx = Math.floor(max);
        return Math.floor(Math.random() * (maxx - minn) + minn); 
    
    }

    function createTableHeader(){

        let tre1 = document.createElement('tr');
        tableEl.appendChild(tre1);
        
        let tdEl1 = document.createElement('td');
        tre1.appendChild(tdEl1);
        tdEl1.textContent = ' ';
        
        for (let i =0; i< openinghours.length; i++){

            let tdel = document.createElement('td');
            tre1.appendChild(tdel);
            tdel.textContent = openinghours[i];
        }

    }
 
    let seattel = new Location ('Seattle',23,65,6.3);
    let Tokyo = new Location ('Tokyo',3,24,1.2);
    let Dubai = new Location ('Dubai',11,38,3.7);
    let Paris = new Location ('Paris',20,38,2.3);
    let Lima = new Location ('Lima',2,16,4.6);

    function createTableFooter() {

        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
      
        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = 'Totals';
      
        let totalhour = 0;
        for (let i = 0; i < openinghours.length; i++) {
          let total = 0;
          for (let j = 0; j < seattle.length; j++) {
            total += seattle[j].cockiesPerHour[i];
      
          }
          totalhour += total;
          let tdEl2 = document.createElement('td');
          trEl.appendChild(tdEl2);
          tdEl2.textContent = total;
      
        }
        let tdEl3 = document.createElement('td');
        trEl.appendChild(tdEl3);
        tdEl3.textContent =  totalhour;
      
      }
   
    createTableHeader();
    
    seattel.Randomm();
    seattel.render();

    Tokyo.Randomm();
    Tokyo.render();

    Dubai.Randomm();
    Dubai.render();

    Paris.Randomm();
    Paris.render();

    Lima.Randomm();
    Lima.render();
    
    createTableFooter();