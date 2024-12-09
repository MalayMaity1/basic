document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name').value;

    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameInput })
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
        console.error('Error sending data to the server:', error);
        document.getElementById('responseMessage').innerText = 'An error occurred.';
    }
});
