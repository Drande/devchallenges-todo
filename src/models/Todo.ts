
import { v4 } from 'uuid';
export class TodoModel {
    task: String;
    completed: Boolean;
    id: string;
    constructor(taskName: string, state?: boolean) {
        this.task = taskName;
        this.completed = state??false;
        this.id = v4();
    }
};