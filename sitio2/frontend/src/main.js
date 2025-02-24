document.addEventListener('DOMContentLoaded', () => {
    const apiReadUrl = 'http://localhost:8000/users';
    const apiWriteUrl = 'http://localhost:8080/create.php';

    // Fetch users
    fetch(apiReadUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const usersTableBody = document.querySelector('#users-table tbody');
            usersTableBody.innerHTML = ''; // Clear existing data

            if (data && data.length > 0) {
                data.forEach(user => {
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    nameCell.textContent = user.name;
                    const lastnameCell = document.createElement('td');
                    lastnameCell.textContent = user.lastname;

                    row.appendChild(nameCell);
                    row.appendChild(lastnameCell);
                    usersTableBody.appendChild(row);
                });
            } else {
                usersTableBody.innerHTML = '<tr><td colspan="2">No users found</td></tr>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('users-data').innerHTML =
                '<div class="error">Error loading users: ' + error.message + '</div>';
        });

    // Handle form submission
    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            lastname: document.getElementById('lastname').value
        };

        fetch(apiWriteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert('User added successfully');
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error creating user: ' + error.message);
        });
    });
});