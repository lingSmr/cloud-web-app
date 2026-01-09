async function loadUsers() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const users = await response.json();
        const usersContainer = document.getElementById('users');
        
        usersContainer.innerHTML = users.map(user => 
            `<div class="user">
                <strong>${user.name}</strong><br>
                Email: ${user.email}<br>
                Создан: ${new Date(user.created_at).toLocaleDateString('ru-RU')}
            </div>`
        ).join('');
    } catch (error) {
        document.getElementById('users').innerHTML = 
            `<div class="error">Ошибка загрузки пользователей: ${error.message}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', loadUsers);