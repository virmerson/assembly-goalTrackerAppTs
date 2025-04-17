export interface Goal{
    id:number;
    description:string;
    hours:number;
}

export class GoalService{

    private goals: Goal[] = []
    private nextId = 1

    addGoal(description:string, hours:number): Goal{
            const newGoal: Goal =  {
                id: this.nextId++ ,
                description,
                hours
            }
            this.goals.push(newGoal);
        return newGoal;
    }

    getGoals():Goal[]{
        return this.goals
    }
}
