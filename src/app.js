export function initializeApp() {
  const app = document.getElementById('app');
  
  // Create the main layout
  app.innerHTML = `
    <div class="min-h-screen">
      <nav class="bg-green-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Gardening Calendar</h1>
          <button id="themeToggle" class="p-2">🌙</button>
        </div>
      </nav>
      
      <main class="container mx-auto p-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div id="calendar"></div>
            </div>
          </div>
          
          <div class="space-y-4">
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4">Quick Actions</h2>
              <div class="space-y-2">
                <button class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                  Add Plant
                </button>
                <button class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                  Schedule Task
                </button>
              </div>
            </section>
            
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4">Upcoming Tasks</h2>
              <div id="upcomingTasks" class="space-y-2">
                <!-- Tasks will be populated here -->
              </div>
            </section>
            
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4">Weather</h2>
              <div id="weather" class="text-center">
                <!-- Weather info will be added here -->
                <p>Local weather information will appear here</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;

  // Initialize theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Check system preference for dark mode
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    themeToggle.textContent = '☀️';
  }
}