// ========================================
// PROFILE DATA
// ========================================

const profileData = {
    'john-doe': {
        name: 'Swarup Nandakumar',
        role: 'President',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Swarup Nandakumar.jpeg',
        bio: 'Im Swarup, a B.Tech Aerospace Engineering student at SRMIST and the Team Lead of Hybrutos Racing, where I work on designing and developing high-performance Formula Student cars for regional and international competitions. I lead a multidisciplinary team, conduct training across domains, and focus on building a strong technical and collaborative culture within the club.',
        skills: [
            { name: 'Engine Design', level: 95 },
            { name: 'CAD (SolidWorks)', level: 90 },
            { name: 'Testing & Validation', level: 88 },
            { name: 'Thermodynamics', level: 85 },
            { name: 'Project Management', level: 80 }
        ],
        education: {
            degree: 'Bachelor of Science in Mechanical Engineering',
            school: 'University Name',
            year: '2020 - 2024',
            specialization: 'Specialized in Automotive Engineering and Powertrain Design'
        },
        achievements: [
            'Led powertrain development for FS Germany 2024 winning car',
            'Improved hybrid system efficiency by 15%',
            'Published research on electric motor cooling systems',
            'Winner of Best Powertrain Design Award - Formula Bharat 2023'
        ],
        contact: {
            email: 'john.doe@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/johndoe'
        }
    },
    'sarah-johnson': {
        name: 'Sarah Johnson',
        role: 'Electric Motor Specialist',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=SJ',
        bio: 'Sarah is an electrical engineer specializing in high-performance electric motors for racing applications. With a background in power electronics and control systems, she has designed and optimized our vehicle\'s electric propulsion components. Her innovative approach to motor cooling and efficiency optimization has pushed our hybrid system to new heights.',
        skills: [
            { name: 'Motor Design', level: 92 },
            { name: 'Power Electronics', level: 90 },
            { name: 'Control Systems', level: 87 },
            { name: 'MATLAB/Simulink', level: 85 },
            { name: 'Circuit Design', level: 83 }
        ],
        education: {
            degree: 'Bachelor of Science in Electrical Engineering',
            school: 'University Name',
            year: '2021 - 2025',
            specialization: 'Focus on Power Systems and Motor Control'
        },
        achievements: [
            'Designed custom 80kW electric motor for hybrid system',
            'Reduced motor weight by 20% through innovative design',
            'Implemented advanced field-oriented control algorithm',
            'Published paper on thermal management in racing motors'
        ],
        contact: {
            email: 'sarah.johnson@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/sarahjohnson'
        }
    },
    'mike-chen': {
        name: 'Mike Chen',
        role: 'Combustion Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=MC',
        bio: 'Mike specializes in internal combustion engine optimization and fuel system design. His deep understanding of thermodynamics and combustion chemistry has enabled significant improvements in our engine\'s power output and fuel efficiency. He leads the engine calibration and testing efforts, ensuring peak performance under racing conditions.',
        skills: [
            { name: 'Combustion Analysis', level: 94 },
            { name: 'Engine Calibration', level: 91 },
            { name: 'Fuel Systems', level: 89 },
            { name: 'Data Analysis', level: 87 },
            { name: 'Dyno Testing', level: 90 }
        ],
        education: {
            degree: 'Master of Science in Mechanical Engineering',
            school: 'University Name',
            year: '2019 - 2024',
            specialization: 'Thesis on Advanced Combustion Strategies'
        },
        achievements: [
            'Achieved 15% increase in engine power output',
            'Optimized fuel mapping for all operating conditions',
            'Reduced emissions by 25% while maintaining performance',
            'Developed proprietary engine simulation model'
        ],
        contact: {
            email: 'mike.chen@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/mikechen'
        }
    },
    'emily-rodriguez': {
        name: 'Emily Rodriguez',
        role: 'Hybrid Integration Lead',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=ER',
        bio: 'Emily leads the integration of our hybrid powertrain system, coordinating between combustion and electric subsystems. Her expertise in system-level design and power management ensures seamless operation of our dual-power architecture. She develops the control strategies that optimize power distribution between our engine and motor.',
        skills: [
            { name: 'System Integration', level: 93 },
            { name: 'Power Management', level: 91 },
            { name: 'Control Strategy', level: 89 },
            { name: 'Simulation', level: 86 },
            { name: 'Team Leadership', level: 88 }
        ],
        education: {
            degree: 'Bachelor of Science in Mechatronics',
            school: 'University Name',
            year: '2020 - 2024',
            specialization: 'Focus on Hybrid Vehicle Systems'
        },
        achievements: [
            'Designed hybrid control algorithm improving lap times by 3%',
            'Coordinated successful integration of 2024 powertrain',
            'Implemented regenerative braking recovery system',
            'Led team to Best Integration Award at FS Austria'
        ],
        contact: {
            email: 'emily.rodriguez@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/emilyrodriguez'
        }
    },
    'david-kumar': {
        name: 'David Kumar',
        role: 'Transmission Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=DK',
        bio: 'David is responsible for the design and optimization of our vehicle\'s transmission and drivetrain systems. His expertise in gear design, finite element analysis, and mechanical systems ensures reliable power delivery to the wheels. He has pioneered lightweight transmission solutions that maintain strength while reducing overall vehicle weight.',
        skills: [
            { name: 'Gearbox Design', level: 92 },
            { name: 'FEA Analysis', level: 90 },
            { name: 'Drivetrain Systems', level: 91 },
            { name: 'CAD Modeling', level: 88 },
            { name: 'Materials Selection', level: 85 }
        ],
        education: {
            degree: 'Bachelor of Science in Mechanical Engineering',
            school: 'University Name',
            year: '2020 - 2024',
            specialization: 'Focus on Machine Design and Dynamics'
        },
        achievements: [
            'Designed custom sequential gearbox reducing shift time by 40%',
            'Achieved 25% weight reduction in drivetrain components',
            'Optimized gear ratios for maximum acceleration',
            'Implemented stress analysis preventing component failures'
        ],
        contact: {
            email: 'david.kumar@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/davidkumar'
        }
    },
    'lisa-anderson': {
        name: 'Lisa Anderson',
        role: 'Cooling Systems Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=LA',
        bio: 'Lisa specializes in thermal management for high-performance racing powertrains. She designs and optimizes cooling systems for both the combustion engine and electric components, ensuring optimal operating temperatures under extreme racing conditions. Her CFD expertise has led to innovative cooling solutions that maximize efficiency while minimizing drag.',
        skills: [
            { name: 'Thermal Management', level: 94 },
            { name: 'CFD Analysis', level: 91 },
            { name: 'Heat Exchanger Design', level: 90 },
            { name: 'Flow Simulation', level: 88 },
            { name: 'Cooling System Optimization', level: 92 }
        ],
        education: {
            degree: 'Master of Science in Thermal Engineering',
            school: 'University Name',
            year: '2019 - 2024',
            specialization: 'Research on Advanced Cooling Technologies'
        },
        achievements: [
            'Reduced powertrain operating temperature by 20°C',
            'Designed integrated cooling system for hybrid components',
            'Optimized radiator placement improving aerodynamic efficiency',
            'Published research on phase-change cooling materials'
        ],
        contact: {
            email: 'lisa.anderson@hybrutos-racing.com',
            linkedin: 'linkedin.com/in/lisaanderson'
        }
    }
};

// ========================================
// LOAD PROFILE DATA
// ========================================

function loadProfile() {
    // Get member ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('member');
    
    if (!memberId || !profileData[memberId]) {
        // Redirect to home if invalid member
        window.location.href = 'index.html#team';
        return;
    }
    
    const member = profileData[memberId];
    
    // Update page title
    document.title = `${member.name} - Hybrutos Racing`;
    
    // Update profile header
    document.getElementById('profileImage').src = member.image;
    document.getElementById('profileImage').alt = member.name;
    document.getElementById('profileName').textContent = member.name;
    document.getElementById('profileRole').textContent = member.role;
    document.getElementById('profileTeam').textContent = member.team;
    
    // Update bio
    document.getElementById('profileBio').textContent = member.bio;
    
    // Update skills
    const skillsGrid = document.getElementById('profileSkills');
    skillsGrid.innerHTML = member.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
    
    // Animate skill bars on load
    setTimeout(() => {
        document.querySelectorAll('.skill-level').forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transition = 'width 1s ease';
            }, index * 100);
        });
    }, 500);
}

// Load profile when page loads
if (document.getElementById('profileName')) {
    loadProfile();
}