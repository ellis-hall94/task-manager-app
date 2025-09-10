const API_BASE_URL = 'https://localhost:7000/api'; // Adjust to match your backend port

export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    assignedUserId?: string;
    createdAt: string;
    updatedAt: string;
}

export const login = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    return response.json();
};

export const register = async (username: string, email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    return response.json();
};

export const getTasks = async (): Promise<Task[]> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }

    return response.json();
};

export const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    if (!response.ok) {
        throw new Error('Failed to create task');
    }

    return response.json();
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<void> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...task, id }),
    });

    if (!response.ok) {
        throw new Error('Failed to update task');
    }
};

export const deleteTask = async (id: number): Promise<void> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
};