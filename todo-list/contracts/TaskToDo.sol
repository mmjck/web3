// SPDX-Licence-Identifier: GPL-3.0
pragma solidity ^0.8.0;


contract TaskToDo {
    enum TaskStatus { Pending, Finished }

    address owner;
    struct Task {
        string description;
        TaskStatus status;
    }

    Task[] public tasks;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function add(string memory _description) public onlyOwner{
        tasks.push(
            Task(_description, TaskStatus.Pending)
            );
    }

    function asFinished(uint256 id) public onlyOwner {
        require(id < tasks.length, "No task has been mentioned");

        tasks[id].status = TaskStatus.Finished;
    }

    function getTasksCount() public view returns (uint256){
        return tasks.length;
    }

    function getAllTasks() public view returns (Task[] memory){
        return tasks;
    }


    function getTask(uint256 id) public view returns (string memory, TaskStatus){
        require(id < tasks.length, "No task has been mentioned");

        return (tasks[id].description, tasks[id].status);
    }
}