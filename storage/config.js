export default{
    datamyContainer(){
        localStorage.setItem("myContainer",JSON.stringify({
            datos:{
                title:"Presupuesto Disponible",
                dinner: "$0",
                renevu: "Ingreso",
                expenses: "Egresos"
            }
        }));
    },
    datamyingreso(){
        localStorage.setItem("myingreso",JSON.stringify({
            datos:{
                title:"INGRESO"
            }
        }));
      },

      datamyegreso(){
        localStorage.setItem("myegreso",JSON.stringify({
            datos:{
                title:"EGRESO"
            }
        }));
      },

}




  
