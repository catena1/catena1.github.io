<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cattedn - Full Stack Developer & Termux Expert</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #fff;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .bonus-alert {
            background: linear-gradient(90deg, #ff6b6b, #ff8e53);
            border-radius: 12px;
            padding: 12px 20px;
            margin-bottom: 30px;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: pulse 2s infinite;
        }
        
        .bonus-text {
            font-weight: 600;
            font-size: 18px;
        }
        
        .bonus-amount {
            font-weight: 700;
            font-size: 20px;
        }
        
        .profile-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 40px;
            text-align: center;
        }
        
        .profile-name {
            font-size: 28px;
            margin-bottom: 5px;
            color: #4ecca3;
        }
        
        .profile-title {
            font-size: 22px;
            margin-bottom: 15px;
            color: #eeeeee;
        }
        
        .profile-description {
            font-size: 18px;
            max-width: 600px;
            line-height: 1.6;
            color: #b0b0b0;
        }
        
        .skills-section {
            margin-bottom: 40px;
        }
        
        .skills-title {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
            color: #4ecca3;
        }
        
        .skills-tabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .skill-tab {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #4ecca3;
            border-radius: 30px;
            padding: 12px 25px;
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .skill-tab:hover {
            background: #4ecca3;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(78, 204, 163, 0.4);
        }
        
        .skill-tab.active {
            background: #4ecca3;
            box-shadow: 0 5px 15px rgba(78, 204, 163, 0.4);
        }
        
        .skill-content {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            min-height: 300px;
        }
        
        .skill-tab-content {
            animation: fadeIn 0.5s ease;
        }
        
        .skill-tab-content h3 {
            font-size: 26px;
            margin-bottom: 15px;
            color: #4ecca3;
        }
        
        .skill-tab-content p {
            font-size: 18px;
            line-height: 1.6;
            color: #dddddd;
            margin-bottom: 15px;
        }
        
        .skill-tab-content ul {
            margin-left: 20px;
        }
        
        .skill-tab-content li {
            margin-bottom: 10px;
            font-size: 17px;
        }
        
        .hidden {
            display: none !important;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            }
            50% {
                box-shadow: 0 4px 20px rgba(255, 107, 107, 0.6);
            }
            100% {
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .bonus-alert {
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
            
            .skills-tabs {
                gap: 10px;
            }
            
            .skill-tab {
                padding: 10px 20px;
                font-size: 16px;
            }
            
            .skill-content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="bonus-alert">
            <div class="bonus-text">Big Bonus Alert! • now</div>
            <div class="bonus-amount">Claim your ₩100 FREE airtime + ₩9...</div>
        </div>
        
        <div class="profile-section">
            <h1 class="profile-name">Hello, I'm cattedn</h1>
            <h2 class="profile-title">Full Stack Developer & Termux Expert</h2>
            <p class="profile-description">Building amazing web applications from mobile to cloud</p>
        </div>
        
        <div class="skills-section">
            <h2 class="skills-title">My Skills & Expertise</h2>
            
            <div class="skills-tabs">
                <div class="skill-tab active" data-tab="javascript">JavaScript</div>
                <div class="skill-tab" data-tab="react">React</div>
                <div class="skill-tab" data-tab="nodejs">Node.js</div>
                <div class="skill-tab" data-tab="python">Python</div>
                <div class="skill-tab" data-tab="termux">Termux</div>
            </div>
            
            <div class="skill-content">
                <div id="javascript-content" class="skill-tab-content">
                    <h3>JavaScript Expertise</h3>
                    <p>I have extensive experience with modern JavaScript (ES6+), including:</p>
                    <ul>
                        <li>Frontend development with vanilla JS and modern frameworks</li>
                        <li>Asynchronous programming and API integration</li>
                        <li>DOM manipulation and event handling</li>
                        <li>Building interactive web applications</li>
                        <li>Working with JSON and data structures</li>
                    </ul>
                </div>
                
                <div id="react-content" class="skill-tab-content hidden">
                    <h3>React Development</h3>
                    <p>Specialized in building dynamic user interfaces with React:</p>
                    <ul>
                        <li>Component-based architecture and reusable UI elements</li>
                        <li>State management with hooks and context API</li>
                        <li>Integration with backend APIs</li>
                        <li>React Router for single-page applications</li>
                        <li>Performance optimization techniques</li>
                    </ul>
                </div>
                
                <div id="nodejs-content" class="skill-tab-content hidden">
                    <h3>Node.js Backend Development</h3>
                    <p>Building robust server-side applications with Node.js:</p>
                    <ul>
                        <li>RESTful API development with Express.js</li>
                        <li>Database integration (MongoDB, MySQL, PostgreSQL)</li>
                        <li>Authentication and authorization systems</li>
                        <li>Real-time applications with Socket.io</li>
                        <li>Deployment and scaling strategies</li>
                    </ul>
                </div>
                
                <div id="python-content" class="skill-tab-content hidden">
                    <h3>Python Programming</h3>
                    <p>Versatile Python development for various applications:</p>
                    <ul>
                        <li>Web development with Django and Flask</li>
                        <li>Data analysis and visualization</li>
                        <li>Automation scripts and tools</li>
                        <li>Machine learning and AI projects</li>
                        <li>Integration with other technologies</li>
                    </ul>
                </div>
                
                <div id="termux-content" class="skill-tab-content hidden">
                    <h3>Termux Expertise</h3>
                    <p>Mobile development and Linux environment on Android:</p>
                    <ul>
                        <li>Setting up development environments on mobile devices</li>
                        <li>Running servers and applications directly from Android</li>
                        <li>SSH and remote development workflows</li>
                        <li>Scripting and automation with Termux</li>
                        <li>Mobile-first development approaches</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Simple and reliable tab switching
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Script loaded - tabs should work now');
            
            const tabs = document.querySelectorAll('.skill-tab');
            const contents = document.querySelectorAll('.skill-tab-content');
            
            // Function to switch tabs
            function switchTab(tabName) {
                console.log('Switching to tab:', tabName);
                
                // Hide all contents
                contents.forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Remove active class from all tabs
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Show selected content and activate tab
                const activeContent = document.getElementById(tabName + '-content');
                const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
                
                if (activeContent && activeTab) {
                    activeContent.classList.remove('hidden');
                    activeTab.classList.add('active');
                }
            }
            
            // Add click events to tabs
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');
                    switchTab(tabName);
                });
            });
            
            // Initialize with JavaScript tab active
            switchTab('javascript');
        });
    </script>
</body>
</html>
