// ========================================
// PROFILE DATA
// ========================================

const profileData = {
    'john-doe': {
        name: 'Swarup Nandakumar',
        role: 'President',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Swarup Nandakumar.jpeg',
        bio: "I'm Swarup, a B.Tech Aerospace Engineering student at SRMIST and the Team Lead of Hybrutos Racing, where I work on designing and developing high-performance Formula Student cars for regional and international competitions. I lead a multidisciplinary team, conduct training across domains, and focus on building a strong technical and collaborative culture within the club.",
        sponsors: [
            { name: 'TechDrive Solutions',   logo: null, tier: 'gold',   years: '2023–2024' },
            { name: 'AeroComposites Inc.',   logo: null, tier: 'silver', years: '2022–2024' },
            { name: 'VoltCore Energy',       logo: null, tier: 'gold',   years: '2024'      },
            { name: 'SRMIST Alumni Fund',    logo: null, tier: 'silver', years: '2022–2024' },
            { name: 'MachineWorks Pro',      logo: null, tier: 'bronze', years: '2023'      },
            { name: 'Castrol Racing',        logo: null, tier: 'bronze', years: '2022–2023' },
        ],
        contact: {
            email: 'swarup@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/swarupnandakumar'
        }
    },
    'sarah-johnson': {
        name: 'Sarah Johnson',
        role: 'Electric Motor Specialist',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=SJ',
        bio: "Sarah is an electrical engineer specialising in high-performance electric motors for racing applications. With a background in power electronics and control systems, she designed and optimised the vehicle's electric propulsion components. Her innovative approach to motor cooling and efficiency pushed the hybrid system to new heights.",
        sponsors: [
            { name: 'VoltCore Energy',       logo: null, tier: 'gold',   years: '2024'      },
            { name: 'TechDrive Solutions',   logo: null, tier: 'gold',   years: '2023–2024' },
            { name: 'AeroComposites Inc.',   logo: null, tier: 'silver', years: '2022–2024' },
            { name: 'MachineWorks Pro',      logo: null, tier: 'bronze', years: '2023'      },
        ],
        contact: {
            email: 'sarah.johnson@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/sarahjohnson'
        }
    },
    'mike-chen': {
        name: 'Mike Chen',
        role: 'Combustion Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=MC',
        bio: "Mike specialises in internal combustion engine optimisation and fuel system design. His deep understanding of thermodynamics and combustion chemistry enabled significant improvements in engine power output and fuel efficiency. He led the engine calibration and testing efforts, ensuring peak performance under racing conditions.",
        sponsors: [
            { name: 'Castrol Racing',        logo: null, tier: 'gold',   years: '2022–2023' },
            { name: 'TechDrive Solutions',   logo: null, tier: 'silver', years: '2023–2024' },
            { name: 'SRMIST Alumni Fund',    logo: null, tier: 'bronze', years: '2022–2024' },
        ],
        contact: {
            email: 'mike.chen@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/mikechen'
        }
    },
    'emily-rodriguez': {
        name: 'Emily Rodriguez',
        role: 'Hybrid Integration Lead',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=ER',
        bio: "Emily leads the integration of the hybrid powertrain system, coordinating between combustion and electric subsystems. Her expertise in system-level design and power management ensures seamless operation of the dual-power architecture. She develops control strategies that optimise power distribution between the engine and motor.",
        sponsors: [
            { name: 'VoltCore Energy',       logo: null, tier: 'gold',   years: '2024'      },
            { name: 'AeroComposites Inc.',   logo: null, tier: 'silver', years: '2022–2024' },
            { name: 'MachineWorks Pro',      logo: null, tier: 'bronze', years: '2023'      },
        ],
        contact: {
            email: 'emily.rodriguez@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/emilyrodriguez'
        }
    },
    'david-kumar': {
        name: 'David Kumar',
        role: 'Transmission Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=DK',
        bio: "David is responsible for the design and optimisation of the vehicle's transmission and drivetrain systems. His expertise in gear design, finite element analysis, and mechanical systems ensures reliable power delivery to the wheels. He pioneered lightweight transmission solutions that maintain strength while reducing overall vehicle weight.",
        sponsors: [
            { name: 'TechDrive Solutions',   logo: null, tier: 'gold',   years: '2023–2024' },
            { name: 'SRMIST Alumni Fund',    logo: null, tier: 'silver', years: '2022–2024' },
            { name: 'Castrol Racing',        logo: null, tier: 'bronze', years: '2022–2023' },
        ],
        contact: {
            email: 'david.kumar@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/davidkumar'
        }
    },
    'lisa-anderson': {
        name: 'Lisa Anderson',
        role: 'Cooling Systems Engineer',
        team: 'Powertrain Team',
        image: 'https://via.placeholder.com/400x400/662d91/ffffff?text=LA',
        bio: "Lisa specialises in thermal management for high-performance racing powertrains. She designs and optimises cooling systems for both the combustion engine and electric components, ensuring optimal operating temperatures under extreme racing conditions. Her CFD expertise has led to innovative cooling solutions that maximise efficiency while minimising drag.",
        sponsors: [
            { name: 'VoltCore Energy',       logo: null, tier: 'gold',   years: '2024'      },
            { name: 'AeroComposites Inc.',   logo: null, tier: 'gold',   years: '2022–2024' },
            { name: 'MachineWorks Pro',      logo: null, tier: 'silver', years: '2023'      },
            { name: 'Castrol Racing',        logo: null, tier: 'bronze', years: '2022–2023' },
        ],
        contact: {
            email: 'lisa.anderson@hybrutos-racing.com',
            linkedin: 'https://linkedin.com/in/lisaanderson'
        }
    }
};

// ========================================
// SPONSOR TIER CONFIG
// ========================================
const TIER_LABELS = {
    gold:   { label: 'Gold Sponsor',   color: '#FFD700' },
    silver: { label: 'Silver Sponsor', color: '#C0C0C0' },
    bronze: { label: 'Bronze Sponsor', color: '#CD7F32' },
};

function buildSponsorCard(sponsor) {
    const tier = TIER_LABELS[sponsor.tier] || TIER_LABELS.bronze;
    // Generate a simple SVG placeholder logo from the sponsor name initials
    const initials = sponsor.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return `
        <div class="sponsor-card sponsor-tier-${sponsor.tier}">
            <div class="sponsor-logo-wrap">
                <div class="sponsor-logo-placeholder" aria-label="${sponsor.name} logo">
                    <span class="sponsor-initials">${initials}</span>
                </div>
            </div>
            <div class="sponsor-info">
                <p class="sponsor-name">${sponsor.name}</p>
                <span class="sponsor-tier-badge" style="color:${tier.color};border-color:${tier.color};">${tier.label}</span>
                <p class="sponsor-years">${sponsor.years}</p>
            </div>
        </div>
    `;
}

// ========================================
// PROFILE TAB SWITCHING
// ========================================
function initProfileTabs() {
    const tabBtns    = document.querySelectorAll('.profile-tab-btn');
    const tabPanels  = document.querySelectorAll('.profile-tab-panel');
    const slider     = document.querySelector('.profile-tab-slider');

    function moveSlider(btn) {
        if (!slider) return;
        slider.style.left  = btn.offsetLeft + 'px';
        slider.style.width = btn.offsetWidth + 'px';
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = 'ptab-' + btn.dataset.profileTab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(targetId)?.classList.add('active');
            moveSlider(btn);
        });
    });

    // Set initial slider position
    const activeBtn = document.querySelector('.profile-tab-btn.active');
    if (activeBtn) moveSlider(activeBtn);

    // Recalculate on resize
    window.addEventListener('resize', () => {
        const ab = document.querySelector('.profile-tab-btn.active');
        if (ab) moveSlider(ab);
    });
}

// ========================================
// LOAD PROFILE DATA
// ========================================
function loadProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId  = urlParams.get('member');

    if (!memberId || !profileData[memberId]) {
        window.location.href = 'index.html#team';
        return;
    }

    const member = profileData[memberId];

    // Page title
    document.title = `${member.name} — Hybrutos Racing`;

    // Header
    document.getElementById('profileImage').src       = member.image;
    document.getElementById('profileImage').alt       = member.name;
    document.getElementById('profileName').textContent  = member.name;
    document.getElementById('profileRole').textContent  = member.role;
    document.getElementById('profileTeam').textContent  = member.team;

    // Social icons
    document.getElementById('profileLinkedinBtn').href = member.contact.linkedin;
    document.getElementById('profileEmailBtn').href    = `mailto:${member.contact.email}`;

    // About tab
    document.getElementById('profileBio').textContent = member.bio;

    // Sponsors tab
    const sponsorsGrid = document.getElementById('profileSponsors');
    if (member.sponsors && member.sponsors.length) {
        sponsorsGrid.innerHTML = member.sponsors.map(buildSponsorCard).join('');
    } else {
        sponsorsGrid.innerHTML = '<p class="no-sponsors">No sponsor data available for this member.</p>';
    }

    // Contact tab
    const emailLink    = document.getElementById('profileEmailLink');
    const linkedinLink = document.getElementById('profileLinkedinLink');
    emailLink.href          = `mailto:${member.contact.email}`;
    emailLink.textContent   = member.contact.email;
    linkedinLink.href       = member.contact.linkedin;
    linkedinLink.textContent = member.contact.linkedin.replace('https://', '');
}

// ========================================
// INITIALISE
// ========================================
if (document.getElementById('profileName')) {
    loadProfile();
    initProfileTabs();
}