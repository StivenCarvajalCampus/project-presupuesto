/*import config from "../storage/config.js";

export default {
    showHeader() {
        config.datamyContainer();
        Object.assign(this, JSON.parse(localStorage.getItem("myContainer")));
        
        const ws = new Worker("storage/wsMyContainer.js", { type: "module" });
        ws.postMessage({ module: "showMyContainer", data: this.datos});

        ws.addEventListener("message", (e) => {
            document.querySelector("#title").innerHTML = e.data[0];
            document.querySelector('#current_dinner').innerHTML = e.data[1]
            document.querySelector('#div_renevu').innerHTML = e.data[2]
            document.querySelector('#div_expenses').innerHTML = e.data[3]
            ws.terminate();
        })
    }


}*/