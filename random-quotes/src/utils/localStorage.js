function setItem(key, value) {
    if (typeof key !== 'string'){
        throw new Error('Error: Key must be a string');
    }

    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error('Error setting item in localStorage:', error);
    }
}