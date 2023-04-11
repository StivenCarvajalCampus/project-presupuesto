import config from "../storage/config.js";
export default{
    showingreso({obj}){
        const ws = new Worker("storage/wsmyingreso.js", { type: "module" });
        
        ws.postMessage({ module: "displayingreso", data: obj });

        ws.addEventListener("message", (e) => {
           
            document.querySelector("#ingreso").innerHTML = e.data;
            
            ws.terminate();
        })
    }
}
