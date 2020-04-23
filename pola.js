// const a = document.querySelector(".a");
// const b = document.querySelector(".b");
// const a1 = document.querySelector(".a1");
// const h = document.querySelector(".h");
// const r = document.querySelector(".r");
// const oblicz = document.querySelector(".oblicz");
// const oblicz1 = document.querySelector(".oblicz1");
// const oblicz2 = document.querySelector(".oblicz2");
// const wynik = document.querySelector(".wynik");
// const wynik1 = document.querySelector(".wynik1");
// const wynik2 = document.querySelector(".wynik2");


// oblicz.addEventListener("click", function(){

//     wynik.innerText = a.value * b.value

// })

// oblicz1.addEventListener("click", function(){

//     wynik1.innerText = (a1.value * h.value) / 2

// })

// oblicz2.addEventListener("click", function(){

//     wynik2.innerText = 3.14 * (r.value * r.value)

// })

let liczenie = {
    a: document.querySelector(".a"),
    b: document.querySelector(".b"),
    a1: document.querySelector(".a1"),
    h: document.querySelector(".h"),
    r: document.querySelector(".r"),
    oblicz: document.querySelector(".oblicz"),
    oblicz1: document.querySelector(".oblicz1"),
    oblicz2: document.querySelector(".oblicz2"),
    wynik: document.querySelector(".wynik"),
    wynik1: document.querySelector(".wynik1"),
    wynik2: document.querySelector(".wynik2"),

    init: function() {
        this.oblicz.addEventListener("click", function(){

            this.wynik.innerText = this.a.value * this.b.value;
           
        }.bind(this))
        
        this.oblicz1.addEventListener("click", function(){
        
            this.wynik1.innerText = (this.a1.value * this.h.value) / 2;
        
        }.bind(this))
        
        this.oblicz2.addEventListener("click", function(){
        
            this.wynik2.innerText = 3.14 * (this.r.value * this.r.value);
        
        }.bind(this))
    }
}

liczenie.init();
