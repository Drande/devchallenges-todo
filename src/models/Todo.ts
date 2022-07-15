export class TodoModel {
    task: String;
    completed: Boolean;
    constructor(taskName: string) {
        this.task = taskName;
        this.completed = false;
    }
};