import './style.css'
import { Goal } from './components/Goal'
import { Home } from './components/Home'


const pageContent = document.getElementById('pageContent') as HTMLDivElement
const btnHome  = document.getElementById('btnHome') as HTMLButtonElement
const btnGoals =  document.getElementById('btnGoals') as HTMLButtonElement


const loadPage = (page:string)=>{
  if (page==='home'){
    pageContent.innerHTML = Home()
  }else if (page==='goals'){
    pageContent.innerHTML = Goal()
  }
}

btnHome.addEventListener('click', ()=>{
  loadPage('home')
})

btnGoals.addEventListener('click', ()=>{
  loadPage('goals')
})

loadPage('home')