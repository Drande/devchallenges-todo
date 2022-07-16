
import { v4 } from 'uuid';
export class TodoModel {
    task: String;
    completed: Boolean;
    id: string;
    constructor(taskName: string) {
        this.task = taskName;
        this.completed = false;
        this.id = v4();
    }
};