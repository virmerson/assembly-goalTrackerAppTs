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
    const listHtml =  list.map( (goal)=> `<li> ${goal.description} - ${goal.hours} </li>`)
    ulGoalList.innerHTML =  listHtml.join("")
}

export const setUpGoalEvents = (goalService:GoalService) => {
    const form = document.getElementById("goalForm") as HTMLFormElement

    if (form) {

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const description = document.getElementById("description") as HTMLInputElement
            const hours = document.getElementById("hours") as HTMLInputElement
            goalService.addGoal(description.value, Number(hours.value))   
            renderGoalList(goalService)
           })
          
        }
    }