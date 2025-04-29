import { GoalService } from "../services/GoalService"



export const GoalPage = (): string => {
    return `<h1> Bem vindos a Goals!!!</h1>
    
        <form id="goalForm">
                <input type="hidden" id="id" />
                <input type="text" id="description" placeholder="Description" > 
                <input type="number" id="hours" placeholder="Hours">
                <button> Add </button>
                <button id="btnReset"> Reset </button>
        </form> 
        <ul id="goalList"></ul> 
    `
}

export const renderGoalList = (goalService:GoalService) =>{
    const ulGoalList = document.getElementById('goalList') as HTMLUListElement 
    const list =  goalService.getGoals()
    const listHtml =  list.map( (goal)=> `<li> ${goal.description} - ${goal.hours} 
        <button data-id=${goal.id} class='btn-del'  > DELETE </button>
        <button data-id=${goal.id} class='btn-upd'> UPDATE </button>
    </li>`)
    ulGoalList.innerHTML =  listHtml.join("")

    const buttonsDelete =  ulGoalList.querySelectorAll('.btn-del')
    buttonsDelete.forEach( (b ) => {

        b.addEventListener('click', (event)=>{
             const button = event.target as HTMLButtonElement
             const id = Number(button.getAttribute('data-id'))
             goalService.delete(id)
             renderGoalList(goalService)
        })

    } )

    const buttonsUpdate =  ulGoalList.querySelectorAll('.btn-upd')
    buttonsUpdate.forEach( (b ) => {

        b.addEventListener('click', (event)=>{
             const button = event.target as HTMLButtonElement
             const id = Number(button.getAttribute('data-id'))
            
             console.log("Atualizando o id : "+  id)

             //Buscar  id 
             const goal =    goalService.getGoalById(id)


             //Preencher o form
            const editId =  document.getElementById("id") as HTMLInputElement
            const description = document.getElementById("description") as HTMLInputElement
            const hours = document.getElementById("hours") as HTMLInputElement
            editId.value =  goal?.id.toString() || ""
            description.value = goal?.description || ""
            hours.value= goal?.hours?.toString() || ""
        }) 

    } )
}


export const setUpGoalEvents = (goalService:GoalService) => {
    const form = document.getElementById("goalForm") as HTMLFormElement

    if (form) {

        const ediId = document.getElementById("id") as HTMLInputElement
        const description = document.getElementById("description") as HTMLInputElement
        const hours = document.getElementById("hours") as HTMLInputElement
    

        form.addEventListener('submit', (event) => {
            console.log(event)
            event.preventDefault()

           
            if(ediId.value) {
                console.log("Updating  " + ediId.value)
                //goalService.updateGoal(id , description.value, Number(hours.value))
            }  else {
                goalService.addGoal(description.value, Number(hours.value))
            }
    
            renderGoalList(goalService)
        })


        const btnReset =  document.getElementById("btnReset") as HTMLButtonElement
        btnReset.addEventListener('click', ()=>{
            ediId.value= ''
            description.value =''
            hours.value= ''

        })
        
    }

    

}