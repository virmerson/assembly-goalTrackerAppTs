export const Goal = ():string=>{
    return `<h1> Bem vindos a Goals!!!</h1>
    
        <form id="goalForm">
                <input type="text" id="description" placeholder="Description" > 
                <input type="number" id="hours" placeholder="Hours">
                <button> Add </button>
        </form> `
}

//emmit event

document.addEventListener('DOMContentLoaded', ()=>{
   
        const form = document.getElementById("goalForm") as HTMLFormElement

        if (form){

            form.addEventListener('submit', (event)=>{
                event.preventDefault()
            })
        }

})