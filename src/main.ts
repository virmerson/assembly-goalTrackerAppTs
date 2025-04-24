import './style.css'
import { GoalPage, renderGoalList, setUpGoalEvents } from './components/Goal'
import { HomePage } from './components/Home'
import { GoalService } from './services/GoalService'


const pageContent = document.getElementById('pageContent') as HTMLDivElement
const btnHome  = document.getElementById('btnHome') as HTMLButtonElement
const btnGoals =  document.getElementById('btnGoals') as HTMLButtonElement

const goalService:GoalService = new GoalService();

const loadPage = (page:string)=>{
  if (page==='home'){
    pageContent.innerHTML = HomePage()
  }else if (page==='goals'){
    pageContent.innerHTML = GoalPage()
    setUpGoalEvents(goalService)
    renderGoalList(goalService)

  }
}

btnHome.addEventListener('click', (event)=>{
  console.log(event)
  loadPage('home')
})

btnGoals.addEventListener('click', ()=>{
  loadPage('goals')
})

loadPage('home')