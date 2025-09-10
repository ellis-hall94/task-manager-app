import React from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    assignedUserId: string;
}

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'to-do': return '#f39c12';
            case 'in-progress': return '#3498db';
            case 'done': return '#27ae60';
            default: return '#95a5a6';
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <div>
                    {tasks.map((task) => (
                        <div 
                            key={task.id} 
                            style={{ 
                                border: '1px solid #ddd', 
                                padding: '1rem', 
                                margin: '0.5rem 0',
                                borderRadius: '4px'
                            }}
                        >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>
                                <strong>Status: </strong>
                                <span style={{ 
                                    color: getStatusColor(task.status),
                                    fontWeight: 'bold'
                                }}>
                                    {task.status}
                                </span>
                            </p>
                            <p><strong>Assigned to:</strong> {task.assignedUserId || 'Unassigned'}</p>
                            <button 
                                onClick={() => onEdit(task)}
                                style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => onDelete(task.id)}
                                style={{ padding: '0.25rem 0.5rem', backgroundColor: '#e74c3c', color: 'white' }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;