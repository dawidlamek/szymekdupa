const API_URL = 'http://localhost:8080';

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
};

export const getInventory = async () => {
    const response = await fetch(`${API_URL}/inventory`, {
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch inventory');
    }

    return await response.json();
};

export const addPart = async (part) => {
    const response = await fetch(`${API_URL}/inventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(part),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Failed to add part');
    }

    return await response.json();
};

export const updatePartQuantity = async (partId, quantity) => {
    const response = await fetch(`${API_URL}/inventory/${partId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Failed to update part quantity');
    }

    return await response.json();
};

export const getAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch appointments');
    }
    return await response.json();
};

export const scheduleAppointment = async (appointment) => {
    const response = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to schedule appointment');
    }
    return await response.json();
};

export const getOrders = async () => {
    const response = await fetch(`${API_URL}/orders`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return await response.json();
};

export const updateOrderStatus = async (orderId, status) => {
    const response = await fetch(`${API_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to update order status');
    }
    return await response.json();
};

export const createOrder = async (order) => {
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to create order');
    }
    return await response.json();
};