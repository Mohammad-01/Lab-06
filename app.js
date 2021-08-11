"use strict"

let Seattle = {

    min : "23",
    max : "65",
    Total : 0 ,
    AvgCookie : "6.3" ,
  
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

    CoustemrsPerHour : [] ,

    CockiesPerHour : [],

    GitCockiePH : function () {

        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,

    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Seattle';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }



    }
    
    Seattle.GitCockiePH();
    Seattle.render();
 

let Tokyo = {

    min : "3" ,
    max : "24" ,
    AvgCookie : "1.2",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

    CoustemrsPerHour : [] ,

    CockiesPerHour : [],

    GitCockiePH : function () {

        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,

    
    render: function () {

        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Tokyo';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }



    }
    
    Tokyo.GitCockiePH();
    Tokyo.render();
   

let Dubai = {

    min : "11" ,
    max : "38" ,
    AvgCookie : "3.7",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

    CoustemrsPerHour : [] ,

    CockiesPerHour : [],

    GitCockiePH : function () {

        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,

    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Dubai';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }



    }
    
    Dubai.GitCockiePH();
    Dubai.render();

let Paris = {

    min : "20" ,
    max : "38" ,
    AvgCookie : "2.3",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

    CoustemrsPerHour : [] ,

    CockiesPerHour : [],

    GitCockiePH : function () {

        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,

    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Paris';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }



    }
    
    Paris.GitCockiePH();
    Paris.render();

let Lima = {

    min : "2" ,
    max : "16" ,
    AvgCookie : "4.6", 
    Total : 0 , 

    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

    CoustemrsPerHour : [] ,

    CockiesPerHour : [],

    GitCockiePH : function () {

        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,

    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Lima';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }



    }
    
    Lima.GitCockiePH();
    Lima.render();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 

  }
