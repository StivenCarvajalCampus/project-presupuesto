export let wsmyBanner ={
    showMyContainer(p1){
        let content_title = `${p1.title}`
        let content_dinner = `${p1.dinner}`
        let content_renevu = `${p1.renevu}`
        let content_expenses = `${p1.expenses}`

        return [content_title, content_dinner,content_renevu,content_expenses] 
    },

}

self.addEventListener("message", (e)=>{
    postMessage(wsmyBanner[`${e.data.module}`](e.data.data));
});

