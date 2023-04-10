import config from "../storage/config.js";
export default{
    showingreso(){
        config.myingreso(data);
        Object.assign(this, JSON.parse(localStorage.getItem("myingreso")));
        
        const ws = new Worker("storage/wsmyingreso.js", { type: "module" });
        
        ws.postMessage({ module: "displayingreso", data: this.flujo });

        ws.addEventListener("message", (e) => {
           
            document.querySelector("#ingreso").innerHTML = e.data;
            
            ws.terminate();
        })
    }
}
