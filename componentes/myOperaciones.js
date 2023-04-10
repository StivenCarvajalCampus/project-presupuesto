let option = document.querySelector('#select_option')
let task = document.querySelector('#val')
let dinner = document.querySelector('#pre')
let current_dinner = document.querySelector('#current_dinner')
let renevu = document.querySelector('#div_renevu')
let expenses = document.querySelector('#div_expenses')
let div_expenses_incoming = document.querySelector('#expenses_incoming')
let div_renevus_incomming = document.querySelector('#renevus_incomings')
let dropElement = document.querySelector('#boton')

export default {
    plus(){
        const wsPlus = new Worker('storage/wsmyingreso.js', {type:'module'})
        wsPlus.postMessage({resources: [task.value, dinner.value,current_dinner.innerHTML]})
        wsPlus.addEventListener('message', e => {
            current_dinner.innerHTML = e.data[0]
            renevu.innerHTML = "Ingreso " +  e.data[0]
            div_renevus_incomming.insertAdjacentHTML('beforeend', e.data[1])
        })
    },
    
    less(){
        const wsLess = new Worker('storage/wsmyegreso.js', {type: 'module'})
        wsLess.postMessage({resources: [task.value, dinner.value,current_dinner.innerHTML]})
        wsLess.addEventListener('message', e => {
            current_dinner.innerHTML = e.data[0]
            expenses.innerHTML = "Egreso " + e.data[0]
            console.log(div_expenses_incoming)
            div_expenses_incoming.insertAdjacentHTML('beforeend', e.data[1])
        })
    },

    render_option(option){
        option == "+" ? this.plus() : this.less()
    },

    render_operation() {
        document.querySelector('#submit_btn').addEventListener('click', () => {
            this.render_option(option.value)
        })
    },
    
    dropElement(){
        let button = document.querySelector('#boton');
        button.addEventListener('click', function () {
            console.log("funciona");
        })

      },
}


 