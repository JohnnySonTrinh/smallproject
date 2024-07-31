document.addEventListener('DOMContentLoaded', () => {
  const activities = [
      { activity_name: 'Hiking', description: 'A nice hike in the mountains.', url_link: 'https://example.com', level: 'Beginner', category: 'Outdoor' },
      { activity_name: 'Cycling', description: 'A refreshing bike ride.', url_link: 'https://example.com', level: 'Intermediate', category: 'Outdoor' },
      { activity_name: 'Swimming', description: 'Swimming in the lake.', url_link: 'https://example.com', level: 'Advanced', category: 'Outdoor' }
  ];

  const activitiesContainer = document.getElementById('activities-container');

  activities.forEach(activity => {
      const activityCard = document.createElement('div');
      activityCard.className = 'col-md-4 mb-3';

      activityCard.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${activity.activity_name}</h5>
                  <p class="card-text">${activity.description}</p>
                  ${activity.url_link ? `<p><a href="${activity.url_link}" target="_blank" class="card-link">${activity.url_link}</a></p>` : ''}
                  <p><strong>Category:</strong> ${activity.category}</p>
                  <p><strong>Level:</strong> ${activity.level}</p>
                  <div class="mt-2">
                      <button class="btn btn-primary" onclick="editActivity('${activity.activity_name}')">Edit</button>
                      <button class="btn btn-danger" onclick="deleteActivity('${activity.activity_name}')">Delete</button>
                  </div>
              </div>
          </div>
      `;

      activitiesContainer.appendChild(activityCard);
  });
});

function editActivity(activityName) {
  alert(`Edit ${activityName}`);
}

function deleteActivity(activityName) {
  if (confirm(`Are you sure you want to delete ${activityName}?`)) {
      alert(`${activityName} deleted`);
  }
}
