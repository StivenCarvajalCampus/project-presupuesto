export let wsmyingreso={
    showingreso(title, dinner){
        return`
    <div class="card" style ="width: 18rem;">
        <div class="card-body text-success">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${dinner}</p>        
        <a id="boton" class="btn btn-danger">Eliminar</a>
        </div>
    </div>
        `
    },
    parseString(total) {
        let convertion = total.split('')
        convertion.shift('$')
        return convertion.join('')
    },

    operationPlus(incoming, current) {
        let total_parse = this.parseString(current)
        let total = parseInt(total_parse) + parseInt(incoming)
        let convertion = String(total).split('')
        convertion.unshift('$')
        return convertion.join('')
    },
    dropElement(){
        let button = document.querySelector('#boton');
        console.log("funciona");
        button.addEventListener('click', function () {
            console.log("funciona");
        })

      },
}

self.addEventListener("message", (e)=>{
    postMessage(
        [
            wsmyingreso.operationPlus(e.data.resources[1], e.data.resources[2]),
            wsmyingreso.showingreso(e.data.resources[0],e.data.resources[1])
        ]);
})