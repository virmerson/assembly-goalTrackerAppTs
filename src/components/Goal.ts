import { GoalService } from "../services/GoalService"



export const GoalPage = (): string => {
    return `<h1> Bem vindos a Goals!!!</h1>
    
        <form id="goalForm">
                <input type="text" id="description" placeholder="Description" > 
                <input type="number" id="hours" placeholder="Hours">
                <button> Add </button>
        </form> 
        <ul id="goalList"></ul> 
    `
}

export const renderGoalList = (goalService:GoalService) =>{
    const ulGoalList = document.getElementById('goalList') as HTMLUListElement 
    const list =  goalService.getGoals()
    const listHtml =  list.map( (goal)=> `<li> ${goal.description} - ${goal.hours} <button data-id=${goal.id} class='btn-del'  > DELETE </button></li>`)
    ulGoalList.innerHTML =  listHtml.join("")

    const buttons =  ulGoalList.querySelectorAll('.btn-del')
    buttons.forEach( (b ) => {

        b.addEventListener('click', (event)=>{
             const target = event .target as HTMLButtonElement
             const id = Number(target.getAttribute('data-id'))
             goalService.delete(id)
             renderGoalList(goalService)
        })

    } )
}


export const setUpGoalEvents = (goalService:GoalService) => {
    const form = document.getElementById("goalForm") as HTMLFormElement

    if (form) {

        form.addEventListener('submit', (event) => {
            console.log(event)
            event.preventDefault()
            const description = document.getElementById("description") as HTMLInputElement
            const hours = document.getElementById("hours") as HTMLInputElement
            goalService.addGoal(description.value, Number(hours.value))   
            renderGoalList(goalService)
           })
          
        }
    }