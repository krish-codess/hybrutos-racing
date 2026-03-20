// ========================================
// SPONSOR DEFINITIONS (shared across all members)
// ========================================
const ALL_SPONSORS = [
    { name: 'SolidWorks',          logo: 'assets/sponsors/solidworks.png',    tier: 'bronze', short: '3D CAD Modelling',             url: 'https://www.solidworks.com/' },
    { name: 'Ansys',               logo: 'assets/sponsors/ansys.png',         tier: 'bronze', short: 'Simulation Software',          url: 'https://www.ansys.com/en-in' },
    { name: 'About Energy',        logo: 'assets/sponsors/aboutenergy.png',   tier: 'bronze', short: 'Battery Simulation',           url: 'https://www.aboutenergy.io/' },
    { name: 'VI Grade',            logo: 'assets/sponsors/vigrade.png',       tier: 'bronze', short: 'Vehicle Simulation',           url: 'https://www.vi-grade.com/' },
    { name: 'Global Tech Art',     logo: 'assets/sponsors/globaltechart.png', tier: 'silver', short: 'Water Jet Cutting',            url: 'https://globaltechart.in/' },
    { name: 'Axicut Solutions',    logo: 'assets/sponsors/axicut.png',        tier: 'gold',   short: 'Laser Cutting',                url: 'http://axicut.com/' },
    { name: 'Matrix',              logo: 'assets/sponsors/matrix.png',        tier: 'gold',   short: 'CNC Machining',                url: null },
    { name: 'Winston Batteries',   logo: 'assets/sponsors/winston.png',       tier: 'silver', short: 'Battery Sponsor',             url: 'https://en.winston-battery.com/' },
    { name: 'Bender',              logo: 'assets/sponsors/bender.png',        tier: 'gold',   short: 'Insulation Monitoring Device', url: 'https://www.bender.de/en/' },
    { name: 'OnlyScrews',          logo: 'assets/sponsors/onlyscrews.png',    tier: 'silver', short: 'Screws & Fasteners',          url: 'http://onlyscrews.in/' },
    { name: 'Delta 5 Performance', logo: 'assets/sponsors/delta5.png',        tier: 'silver', short: 'Tuning & Upgrades',           url: 'https://deltaa5performance.com/' },
    { name: 'Centre For eMobility',logo: 'assets/sponsors/cfe.png',           tier: 'bronze', short: 'Technical Partnership',        url: 'https://www.srmist.edu.in/department/centre-for-electric-mobility/' },
];

// ========================================
// PROFILE DATA
// ========================================
const profileData = {
    'viswa-sirashini': {
        name: 'Viswa Sirashini Sathiyanathan',
        role: 'Vehicle Dynamics Lead',
        team: 'Suspension & Vehicle Dynamics Team',
        image: 'member-pictures/Suspension/Viswa Sirashini Sathiyanathan.jpeg',
        bio: "Working as the Vehicle Dynamics Lead at Hybrutos Racing, I focus on improving the handling and stability of our Formula Student car through suspension design, simulations, and data-driven testing. As a B.Tech engineering student at SRMIST, I apply theoretical vehicle dynamics concepts to practical race car development while guiding team members in understanding performance optimisation.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'viswa.sirashini@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/viswasirashini' }
    },
    'saatvik-saripallai': {
        name: 'Saatvik Saripallai',
        role: 'Vehicle Dynamics Associate',
        team: 'Suspension & Vehicle Dynamics Team',
        image: 'member-pictures/Suspension/Saatvik Saripallai.jpeg',
        bio: "As part of the vehicle dynamics division at Hybrutos Racing, I assist with suspension analysis, simulation studies, and performance data evaluation. While pursuing my B. Tech at SRMIST, I work with the team to improve handling characteristics and optimise the car's setup for testing and competition.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'saatvik.saripallai@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/saatviksaripallai' }
    },
    'kelvin-john': {
        name: 'Kelvin John Samson',
        role: 'Aerodynamics Lead',
        team: 'Aerodynamics Team',
        image: 'member-pictures/Aerodynamics/Kelvin John Samson.jpeg',
        bio: "Leading the aerodynamics division at Hybrutos Racing, I work on designing and optimising components such as wings, diffusers, and bodywork to enhance the car's aerodynamic efficiency. My work involves CFD analysis, aerodynamic simulations, and integrating the aero package with the overall vehicle architecture while studying engineering at SRMIST.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'kelvin.john@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/kelvinjohnsamson' }
    },
    'harman-virk': {
        name: 'Harman Virk',
        role: 'Electrical Lead',
        team: 'Electronics Team',
        image: 'member-pictures/Electronics/Harman Virk.jpeg',
        bio: "Managing the electrical systems for Hybrutos Racing, I oversee the design and implementation of the car's wiring architecture, sensors, and electronic control systems. Alongside my B. Tech studies at SRMIST, I focus on ensuring reliable electrical integration across the vehicle and supporting data acquisition during testing.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'harman.virk@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/harmanvirk' }
    },
    'harshita-kundan': {
        name: 'G. Harshita Kundan',
        role: 'ESO (Electrical Safety Officer)',
        team: 'Electronics Team',
        image: 'member-pictures/Electronics/G. Harshita Kundan.jpeg',
        bio: "Within Hybrutos Racing, I serve as the Electrical Safety Officer, managing high-voltage safety compliance and the vehicle's tractive electrical systems. I ensure adherence to Formula Student electrical regulations and assist in system-level validation and integration. Alongside my engineering studies at SRMIST, I contribute to maintaining safe, reliable vehicle electrical architecture while promoting structured technical workflows across the team.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'harshita.kundan@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/harshitakundan' }
    },
    'aravindhan-balamurugan': {
        name: 'Aravindhan Balamurugan',
        role: 'Electrical Associate',
        team: 'Electronics Team',
        image: 'member-pictures/Electronics/Aravindhan Balamurugan.jpeg',
        bio: "Contributing to the electrical division of Hybrutos Racing, I assist with wiring systems, sensor integration, and electronic components used in the Formula Student car. As an engineering student at SRMIST, I focus on supporting reliable electrical performance and helping maintain the vehicle's electronic systems during development and testing.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'aravindhan.balamurugan@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/aravindhanbalamurugan' }
    },
    'manu-pramod': {
        name: 'Manu Pramod',
        role: 'Powertrain Associate',
        team: 'Powertrain Team',
        image: 'member-pictures/Powertrain/Manu Pramod.jpeg',
        bio: "My work with Hybrutos Racing focuses on the powertrain system of our Formula Student car, where I contribute to drivetrain development and performance testing. As a B.Tech engineering student at SRMIST, I support the team in improving efficiency, reliability, and overall propulsion system performance.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'manu.pramod@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/manupramod' }
    },
    'swarup-nandakumar': {
        name: 'Swarup Nandakumar',
        role: 'President',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Swarup Nandakumar.jpeg',
        bio: "I'm Swarup, a B.Tech Aerospace Engineering student at SRMIST and the Team Lead of Hybrutos Racing, where I work on designing and developing high-performance Formula Student cars for regional and international competitions. I lead a multidisciplinary team, conduct training across domains, and focus on building a strong technical and collaborative culture within the club.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'swarup@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/swarupnandakumar' }
    },
    'anirudh-nagarajan': {
        name: 'Anirudh Nagarajan',
        role: 'Project Manager',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Anirudh Nagarajan.jpeg',
        bio: "Coordinating the development process for Hybrutos Racing, I serve as the team's Project Manager and ensure that all departments stay aligned with our design and competition timelines. As an engineering student at SRMIST, I manage communication between divisions, monitor progress, and help maintain an efficient workflow across the team.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'anirudh.nagarajan@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/anirudhnagarajan' }
    },
    'syed-bukhari': {
        name: 'Syed Mohammed Bukhari',
        role: 'Vice Captain',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Syed Mohammed Bukhari.jpeg',
        bio: "Supporting the leadership of Hybrutos Racing as Vice Captain, I assist in coordinating team activities and maintaining communication between different technical divisions. While pursuing my B. Tech at SRMIST, I also contribute to mentoring members and ensuring smooth execution of the team's development plans.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'syed.bukhari@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/syedbukhari' }
    },
    'daksh-vitthani': {
        name: 'Daksh Vitthani',
        role: 'Corporate Member',
        team: 'Business & Operations Team',
        image: 'member-pictures/Business and Operations/Daksh Vitthani.jpeg',
        bio: "As part of the corporate division of Hybrutos Racing, I handle sponsorship outreach and industry relations that help support our Formula Student program. Currently pursuing my B. Tech at SRMIST, I focus on building partnerships with companies, coordinating communications with sponsors, and helping secure resources that enable the team's technical development.",
        sponsors: ALL_SPONSORS,
        contact: { email: 'daksh.vitthani@hybrutos-racing.com', linkedin: 'https://linkedin.com/in/dakshvitthani' }
    },
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
    const tier     = TIER_LABELS[sponsor.tier] || TIER_LABELS.bronze;
    const initials = sponsor.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const tag      = sponsor.url ? 'a' : 'div';
    const attrs    = sponsor.url ? `href="${sponsor.url}" target="_blank" rel="noopener" style="text-decoration:none;"` : '';
    return `
        <${tag} ${attrs} class="sponsor-card sponsor-tier-${sponsor.tier}">
            <div class="sponsor-logo-wrap">
                <img
                    src="${sponsor.logo}"
                    alt="${sponsor.name} logo"
                    class="sponsor-logo-img"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                >
                <div class="sponsor-logo-placeholder" style="display:none;" aria-label="${sponsor.name} logo">
                    <span class="sponsor-initials">${initials}</span>
                </div>
            </div>
            <div class="sponsor-info">
                <p class="sponsor-name">${sponsor.name}</p>
                <span class="sponsor-tier-badge" style="color:${tier.color};border-color:${tier.color};">${tier.label}</span>
                <p class="sponsor-years">${sponsor.short}</p>
            </div>
        </${tag}>
    `;
}

// ========================================
// PROFILE TAB SWITCHING
// ========================================
function initProfileTabs() {
    const tabBtns   = document.querySelectorAll('.profile-tab-btn');
    const tabPanels = document.querySelectorAll('.profile-tab-panel');
    const slider    = document.querySelector('.profile-tab-slider');

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

    const activeBtn = document.querySelector('.profile-tab-btn.active');
    if (activeBtn) moveSlider(activeBtn);

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

    document.title = `${member.name} — Hybrutos Racing`;

    document.getElementById('profileImage').src         = member.image;
    document.getElementById('profileImage').alt         = member.name;
    document.getElementById('profileName').textContent  = member.name;
    document.getElementById('profileRole').textContent  = member.role;
    document.getElementById('profileTeam').textContent  = member.team;

    document.getElementById('profileLinkedinBtn').href = member.contact.linkedin;
    document.getElementById('profileEmailBtn').href    = `mailto:${member.contact.email}`;

    document.getElementById('profileBio').textContent = member.bio;

    const sponsorsGrid = document.getElementById('profileSponsors');
    if (member.sponsors && member.sponsors.length) {
        sponsorsGrid.innerHTML = member.sponsors.map(buildSponsorCard).join('');
    } else {
        sponsorsGrid.innerHTML = '<p class="no-sponsors">No sponsor data available for this member.</p>';
    }

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