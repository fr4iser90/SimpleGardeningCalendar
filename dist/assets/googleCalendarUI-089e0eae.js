import{googleCalendarSettings as i,googleCalendar as l}from"./googleCalendar-310a8a83.js";import{o as g}from"./index-ec39d61d.js";function C(){const e=document.createElement("div");e.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50";const t=i.load();e.innerHTML=`
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold dark:text-white">🗓️ Google Calendar Integration</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-6">
        <!-- Help Section -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Setup Instructions</h3>
          <div class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>Step 1:</strong> Go to <a href="https://console.cloud.google.com/" target="_blank" class="underline hover:text-blue-600">Google Cloud Console</a></p>
            <p><strong>Step 2:</strong> Create a new project or select existing one</p>
            <p><strong>Step 3:</strong> Enable the "Google Calendar API"</p>
            <p><strong>Step 4:</strong> Create OAuth 2.0 Client ID credentials</p>
            <p><strong>Step 5:</strong> Add your domain to authorized origins</p>
            <button onclick="showDetailedHelp()" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
              📖 Show Detailed Guide
            </button>
          </div>
        </div>
        
        <!-- Connection Status -->
        <div id="connectionStatus" class="p-3 rounded-lg ${l.isSignedIn?"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800":"bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"}">
          <div class="flex items-center space-x-2">
            <span class="text-lg">${l.isSignedIn?"✅":"❌"}</span>
            <span class="font-medium dark:text-white">
              ${l.isSignedIn?"Connected to Google Calendar":"Not Connected"}
            </span>
          </div>
          <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ${l.isSignedIn?"Loading user info...":"Enter your Client ID below to connect"}
          </div>
        </div>
        
        <!-- Configuration Form -->
        <form id="googleCalendarForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">
              🆔 Google Client ID
              <button type="button" onclick="showClientIdHelp()" class="ml-1 text-blue-500 hover:text-blue-600">ℹ️</button>
            </label>
            <input 
              type="text" 
              name="clientId" 
              value="${t.clientId}" 
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="123456789-abc.apps.googleusercontent.com"
              required
            >
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              💡 Only Client ID needed - no API Key required!
            </div>
          </div>
          
          <div class="flex space-x-2">
            <button type="button" id="connectBtn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              🔗 Connect to Google Calendar
            </button>
            <button type="button" id="saveSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Settings
            </button>
          </div>
        </form>
        
        <!-- Calendar Selection -->
        <div id="calendarSelection" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-2 dark:text-white">📅 Select Calendar</h3>
          <select id="calendarSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="primary">Primary Calendar</option>
          </select>
        </div>
        
        <!-- Sync Options -->
        <div id="syncOptions" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-3 dark:text-white">⚙️ Sync Settings</h3>
          
          <div class="space-y-3">
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="autoSync" ${t.autoSync?"checked":""} class="rounded">
              <label for="autoSync" class="text-sm dark:text-gray-200">
                🔄 Automatically sync new events to Google Calendar
              </label>
            </div>
            
            <div class="ml-6 space-y-2">
              <div class="text-sm font-medium dark:text-gray-200 mb-2">Sync these event types:</div>
              ${Object.entries(t.syncTypes).map(([o,n])=>`
                <div class="flex items-center space-x-2">
                  <input type="checkbox" id="sync_${o}" ${n?"checked":""} class="rounded">
                  <label for="sync_${o}" class="text-sm dark:text-gray-200 capitalize">
                    ${v(o)} ${o}
                  </label>
                </div>
              `).join("")}
            </div>
          </div>
          
          <div class="mt-4 space-x-2">
            <button type="button" id="syncAllEventsBtn" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              📤 Sync All Existing Events
            </button>
            <button type="button" id="saveSyncSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Sync Settings
            </button>
          </div>
        </div>
        
        <!-- Sign Out -->
        <div id="signOutSection" style="display: none;" class="border-t pt-4">
          <button type="button" id="signOutBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            🚪 Sign Out & Disconnect
          </button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e),y(),u()}function y(){const e=document.getElementById("googleCalendarForm"),t=document.getElementById("connectBtn"),o=document.getElementById("saveSettingsBtn"),n=document.getElementById("syncAllEventsBtn"),a=document.getElementById("saveSyncSettingsBtn"),r=document.getElementById("signOutBtn");t==null||t.addEventListener("click",async()=>{const d=new FormData(e).get("clientId");if(!d){alert("Please enter your Google Client ID");return}t.disabled=!0,t.textContent="🔄 Connecting...";try{await l.initialize(d),await l.signIn();const c=i.load();c.clientId=d,i.save(c),await u(),await p(),alert("✅ Successfully connected to Google Calendar!")}catch(c){console.error("Connection failed:",c),alert(`❌ Connection failed: ${c.message}`)}finally{t.disabled=!1,t.textContent="🔗 Connect to Google Calendar"}}),o==null||o.addEventListener("click",()=>{const s=new FormData(e),d=i.load();d.clientId=s.get("clientId"),i.save(d),alert("💾 Settings saved!")}),n==null||n.addEventListener("click",async()=>{if(!l.isSignedIn){alert("Please connect to Google Calendar first");return}n.disabled=!0,n.textContent="🔄 Syncing...";try{await b(),alert("✅ All events synced successfully!")}catch(s){console.error("Sync failed:",s),alert(`❌ Sync failed: ${s.message}`)}finally{n.disabled=!1,n.textContent="📤 Sync All Existing Events"}}),a==null||a.addEventListener("click",()=>{const s=i.load();s.autoSync=document.getElementById("autoSync").checked,s.selectedCalendarId=document.getElementById("calendarSelect").value,Object.keys(s.syncTypes).forEach(d=>{const c=document.getElementById(`sync_${d}`);c&&(s.syncTypes[d]=c.checked)}),i.save(s),l.setCalendar(s.selectedCalendarId),alert("💾 Sync settings saved!")}),r==null||r.addEventListener("click",async()=>{confirm("Are you sure you want to disconnect from Google Calendar?")&&(await l.signOut(),i.clear(),u(),alert("🚪 Disconnected from Google Calendar"))}),window.showDetailedHelp=()=>m(),window.showClientIdHelp=()=>h()}async function u(){const e=document.getElementById("connectionStatus"),t=document.getElementById("userInfo"),o=document.getElementById("calendarSelection"),n=document.getElementById("syncOptions"),a=document.getElementById("signOutSection");if(l.isSignedIn){e.className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800",e.querySelector("span:first-child").textContent="✅",e.querySelector("span:last-child").textContent="Connected to Google Calendar";try{const r=await l.getUserInfo();r&&(t.innerHTML=`
          <div class="flex items-center space-x-2">
            <img src="${r.imageUrl}" alt="Profile" class="w-6 h-6 rounded-full">
            <span>${r.name} (${r.email})</span>
          </div>
        `)}catch{t.textContent="Connected (unable to load user info)"}o.style.display="block",n.style.display="block",a.style.display="block"}else e.className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600",e.querySelector("span:first-child").textContent="❌",e.querySelector("span:last-child").textContent="Not Connected",t.textContent="Enter your Client ID below to connect",o.style.display="none",n.style.display="none",a.style.display="none"}async function p(){if(l.isSignedIn)try{const e=await l.getCalendars(),t=document.getElementById("calendarSelect"),o=i.load();t.innerHTML="",e.forEach(n=>{const a=document.createElement("option");a.value=n.id,a.textContent=n.summary,n.id===o.selectedCalendarId&&(a.selected=!0),t.appendChild(a)})}catch(e){console.error("Failed to load calendars:",e)}}async function b(){const t=await(await g("gardening-calendar")).getAll("events"),o=i.load(),n=t.filter(s=>o.syncTypes[s.type]);if(n.length===0)throw new Error("No events to sync based on your settings");const{results:a,errors:r}=await l.createEvents(n);return r.length>0&&console.warn("Some events failed to sync:",r),{synced:a.length,failed:r.length}}async function S(e){const t=i.load();if(!t.autoSync||!l.isSignedIn||!t.syncTypes[e.type])return!1;try{return await l.createEvent(e),!0}catch(o){return console.error("Auto-sync failed:",o),!1}}function m(){const e=document.createElement("div");e.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",e.innerHTML=`
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">📖 Google Calendar Setup Guide</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-6 text-sm">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="font-semibold text-blue-600 dark:text-blue-400">Step 1: Google Cloud Console</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to <a href="https://console.cloud.google.com/" target="_blank" class="text-blue-600 underline">Google Cloud Console</a></li>
            <li>Sign in with your Google account</li>
            <li>Create a new project or select an existing one</li>
            <li>Note your project name/ID for reference</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="font-semibold text-green-600 dark:text-green-400">Step 2: Enable Calendar API</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>In the Cloud Console, go to "APIs & Services" → "Library"</li>
            <li>Search for "Google Calendar API"</li>
            <li>Click on it and press "Enable"</li>
            <li>Wait for the API to be enabled</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="font-semibold text-purple-600 dark:text-purple-400">Step 3: Create OAuth Client ID</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "Credentials"</li>
            <li>Click "Create Credentials" → "OAuth client ID"</li>
            <li>Choose "Web application" as application type</li>
            <li>Add your website URL to "Authorized JavaScript origins"</li>
            <li>For local development, add: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">http://localhost:5173</code></li>
            <li>Copy the Client ID (ends with ".apps.googleusercontent.com")</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-orange-500 pl-4">
          <h3 class="font-semibold text-orange-600 dark:text-orange-400">Step 4: Configure OAuth Consent</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "OAuth consent screen"</li>
            <li>Choose "External" user type (unless you have Google Workspace)</li>
            <li>Fill in required fields (app name, user support email)</li>
            <li>Add your email to test users if in testing mode</li>
            <li>Add scope: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">https://www.googleapis.com/auth/calendar.events</code></li>
          </ol>
        </div>
        
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200">✅ Why Only Client ID?</h3>
          <ul class="list-disc list-inside space-y-1 mt-2 text-green-700 dark:text-green-300">
            <li><strong>Simpler Setup:</strong> No API Key needed for OAuth flows</li>
            <li><strong>More Secure:</strong> OAuth handles authentication securely</li>
            <li><strong>Better UX:</strong> Users sign in with their Google account</li>
            <li><strong>Standard Practice:</strong> Most modern apps use this approach</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200">🔧 Testing Your Setup</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-blue-700 dark:text-blue-300">
            <li>Enter your Client ID in the form above</li>
            <li>Click "Connect to Google Calendar"</li>
            <li>You should see a Google sign-in popup</li>
            <li>Grant calendar permissions</li>
            <li>You should see "Connected" status with your profile</li>
          </ol>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e)}function h(){alert(`🆔 Client ID Help:

The Client ID is used for user authentication and authorization.

Where to find it:
1. Google Cloud Console → APIs & Services → Credentials  
2. Look for "OAuth 2.0 Client IDs" section
3. It ends with ".apps.googleusercontent.com"

Setup Requirements:
• Must be configured as "Web application"
• Add your domain to "Authorized JavaScript origins"
• For local development: http://localhost:5173
• Used to request calendar permissions from users

Why no API Key needed?
• OAuth 2.0 handles authentication securely
• Client ID is sufficient for calendar access
• Simpler and more secure than API Key + Client ID`)}function v(e){return{planting:"🌱",watering:"💧",fertilizing:"🌿",harvesting:"🌾",maintenance:"🔧"}[e]||"📅"}export{S as autoSyncEvent,C as showGoogleCalendarSetup};
