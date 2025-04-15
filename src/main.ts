import './style.css'


const pageContent = document.getElementById('pageContent') as HTMLDivElement
const btnHome  = document.getElementById('btnHome') as HTMLButtonElement
const btnGoals =  document.getElementById('btnGoals') as HTMLButtonElement


const loadPage = (page:string)=>{
  if (page==='home'){
    pageContent.innerHTML = `Bem vindos a Home!`
  }else if (page==='goals'){
    pageContent.innerHTML = `Bem vindos a Goals!` 
  }
}

btnHome.addEventListener('click', ()=>{
  loadPage('home')
})

btnGoals.addEventListener('click', ()=>{
  loadPage('goals')
})

loadPage('home')