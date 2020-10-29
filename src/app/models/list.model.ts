import { ListItem } from './list-item.model';



export class List{

    id: number;
    tittle: string;
    create: Date;
    finish: Date;
    completed: boolean;
    items: ListItem[];

    constructor(tittle: string){

        this.tittle = tittle;
        this.create = new Date();
        this.completed = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}