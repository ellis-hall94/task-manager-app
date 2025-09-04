import React, { useState } from 'react';

interface TaskFormProps {
    onSubmit: (task: { title: string; description: string; assignedUserId: string; status: string }) => void;
    existingTask?: { title: string; description: string; assignedUserId: string; status: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, existingTask }) => {
    const [title, setTitle] = useState(existingTask ? existingTask.title : '');
    const [description, setDescription] = useState(existingTask ? existingTask.description : '');
    const [assignedUserId, setAssignedUserId] = useState(existingTask ? existingTask.assignedUserId : '');
    const [status, setStatus] = useState(existingTask ? existingTask.status : 'to-do');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description, assignedUserId, status });
        setTitle('');
        setDescription('');
        setAssignedUserId('');
        setStatus('to-do');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Assigned User ID:</label>
                <input type="text" value={assignedUserId} onChange={(e) => setAssignedUserId(e.target.value)} />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="to-do">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <button type="submit">{existingTask ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;