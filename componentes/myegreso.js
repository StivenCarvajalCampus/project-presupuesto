import config from "../storage/config.js";
export default{
    showegreso(){
        config.myegreso(data);
        Object.assign(this, JSON.parse(localStorage.getItem("myegreso")));
        
        const ws = new Worker("storage/wsmyegreso.js", { type: "module" });
        
        ws.postMessage({ module: "displayegreso", data: this.flujo });

        ws.addEventListener("message", (e) => {
           
            document.querySelector("#egreso").innerHTML = e.data;
            
            ws.terminate();
        })
    }
}