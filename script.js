// Zodiac Signs Data
const zodiacSigns = {
    'aries': { 
        name: 'Aries', 
        icon: '♈', 
        dates: '3/21-4/19',
        element: 'Fire',
        colors: ['Red', 'Orange', 'Gold'],
        numbers: [1, 8, 17, 25, 33],
        days: ['Tuesday', 'Wednesday']
    },
    'taurus': { 
        name: 'Taurus', 
        icon: '♉', 
        dates: '4/20-5/20',
        element: 'Earth',
        colors: ['Green', 'Pink', 'Blue'],
        numbers: [2, 6, 9, 12, 24],
        days: ['Friday', 'Monday']
    },
    'gemini': { 
        name: 'Gemini', 
        icon: '♊', 
        dates: '5/21-6/20',
        element: 'Air',
        colors: ['Yellow', 'Silver', 'Grey'],
        numbers: [5, 7, 14, 23, 32],
        days: ['Wednesday', 'Saturday']
    },
    'cancer': { 
        name: 'Cancer', 
        icon: '♋', 
        dates: '6/21-7/22',
        element: 'Water',
        colors: ['White', 'Silver', 'Sea Green'],
        numbers: [2, 7, 11, 16, 20],
        days: ['Monday', 'Thursday']
    },
    'leo': { 
        name: 'Leo', 
        icon: '♌', 
        dates: '7/23-8/22',
        element: 'Fire',
        colors: ['Gold', 'Orange', 'Yellow'],
        numbers: [1, 3, 10, 19, 31],
        days: ['Sunday', 'Tuesday']
    },
    'virgo': { 
        name: 'Virgo', 
        icon: '♍', 
        dates: '8/23-9/22',
        element: 'Earth',
        colors: ['Navy Blue', 'Grey', 'Brown'],
        numbers: [3, 15, 20, 27, 35],
        days: ['Wednesday', 'Friday']
    },
    'libra': { 
        name: 'Libra', 
        icon: '♎', 
        dates: '9/23-10/22',
        element: 'Air',
        colors: ['Pink', 'Blue', 'Green'],
        numbers: [4, 6, 13, 15, 24],
        days: ['Friday', 'Saturday']
    },
    'scorpio': { 
        name: 'Scorpio', 
        icon: '♏', 
        dates: '10/23-11/21',
        element: 'Water',
        colors: ['Deep Red', 'Black', 'Maroon'],
        numbers: [8, 11, 18, 22, 29],
        days: ['Tuesday', 'Thursday']
    },
    'sagittarius': { 
        name: 'Sagittarius', 
        icon: '♐', 
        dates: '11/22-12/21',
        element: 'Fire',
        colors: ['Purple', 'Turquoise', 'Orange'],
        numbers: [3, 9, 15, 21, 34],
        days: ['Thursday', 'Friday']
    },
    'capricorn': { 
        name: 'Capricorn', 
        icon: '♑', 
        dates: '12/22-1/19',
        element: 'Earth',
        colors: ['Black', 'Brown', 'Grey'],
        numbers: [6, 8, 10, 26, 30],
        days: ['Saturday', 'Sunday']
    },
    'aquarius': { 
        name: 'Aquarius', 
        icon: '♒', 
        dates: '1/20-2/18',
        element: 'Air',
        colors: ['Blue', 'Silver', 'Aqua'],
        numbers: [4, 7, 11, 22, 29],
        days: ['Saturday', 'Sunday']
    },
    'pisces': { 
        name: 'Pisces', 
        icon: '♓', 
        dates: '2/19-3/20',
        element: 'Water',
        colors: ['Sea Green', 'Lavender', 'Purple'],
        numbers: [3, 9, 12, 15, 18],
        days: ['Thursday', 'Monday']
    }
};

// Horoscope Predictions Templates
const horoscopePredictions = {
    aries: [
        "The full moon illuminates your path with fierce determination. Your natural leadership qualities shine brighter than ever, attracting opportunities that align with your ambitious spirit. Trust your instincts and take bold action.",
        "Under this powerful lunar energy, your pioneering spirit awakens new possibilities. The cosmos encourages you to embrace challenges as stepping stones to greatness. Your courage will inspire others around you.",
        "The full moon brings clarity to your goals and amplifies your inner fire. This is your time to break free from limitations and pursue what sets your soul ablaze. Adventure awaits those brave enough to seek it."
    ],
    taurus: [
        "The full moon grounds you in practical wisdom while opening doors to material abundance. Your patient nature and steady approach will yield remarkable results. Trust in the process of slow, meaningful growth.",
        "Lunar energy enhances your natural magnetism and draws prosperity into your life. Focus on building solid foundations and nurturing relationships that bring lasting value. Comfort and security are within reach.",
        "Under the full moon's glow, your determination transforms dreams into tangible reality. The universe rewards your consistent efforts with unexpected opportunities for financial growth and personal satisfaction."
    ],
    gemini: [
        "The full moon awakens your brilliant mind and enhances your communication gifts. New connections and intellectual pursuits will open fascinating pathways. Your curiosity leads to remarkable discoveries.",
        "Lunar energy amplifies your adaptability and brings exciting opportunities for learning. Multiple projects may demand attention, but your versatile nature will help you excel in all areas. Embrace the variety.",
        "Under this powerful moon, your networking abilities create valuable partnerships. Information flows to you effortlessly, and you'll find yourself at the center of important conversations that shape your future."
    ],
    cancer: [
        "The full moon deeply connects you with your intuitive powers and emotional wisdom. Family relationships strengthen, and your nurturing nature brings healing to those around you. Trust your heart's guidance.",
        "Lunar energy enhances your psychic abilities and emotional intelligence. Past wounds heal as you embrace your sensitivity as a strength. Your caring nature creates ripples of positive change.",
        "Under the full moon's nurturing light, your home and family take center stage. Security and emotional fulfillment flow abundantly. Your ability to create safe spaces for others becomes a source of joy."
    ],
    leo: [
        "The full moon spotlights your natural charisma and creative brilliance. Recognition and appreciation come from unexpected sources. Your generous heart and dramatic flair attract abundant opportunities.",
        "Lunar energy amplifies your royal presence and magnetic personality. Creative projects flourish under this influence, and your artistic vision finds powerful expression. Shine your light boldly.",
        "Under this radiant moon, your leadership qualities inspire others to greatness. Romance and creative pursuits bring deep satisfaction. Your warm heart and confident spirit light up every room you enter."
    ],
    virgo: [
        "The full moon brings precision and clarity to your detailed plans. Your analytical mind uncovers hidden solutions, and your methodical approach yields perfect results. Excellence is your natural state.",
        "Lunar energy enhances your healing abilities and service-oriented nature. Health and wellness take priority, bringing renewed vitality. Your practical wisdom helps others organize their lives more effectively.",
        "Under the full moon's analytical light, your perfectionist tendencies create beautiful outcomes. Work projects advance smoothly, and your attention to detail sets you apart from others. Success follows naturally."
    ],
    libra: [
        "The full moon brings harmony and balance to all areas of your life. Relationships flourish under this diplomatic energy, and your natural charm opens doors to beautiful partnerships. Peace and beauty surround you.",
        "Lunar energy enhances your aesthetic sense and social grace. Artistic endeavors and romantic connections bring deep fulfillment. Your ability to see all sides of situations makes you a valuable mediator.",
        "Under this harmonious moon, justice and fairness prevail in your dealings. Your refined taste and diplomatic skills attract cultured companions and elegant opportunities. Beauty manifests in unexpected ways."
    ],
    scorpio: [
        "The full moon awakens your mystical powers and deep psychological insights. Transformation comes through intense experiences that reveal hidden truths. Your magnetic presence draws profound connections.",
        "Lunar energy amplifies your intuitive abilities and emotional depth. Secrets are revealed, and your investigative nature uncovers valuable information. Trust your instincts completely during this powerful time.",
        "Under this transformative moon, your regenerative powers reach their peak. Old patterns dissolve to make way for rebirth and renewal. Your passionate nature creates profound changes in yourself and others."
    ],
    sagittarius: [
        "The full moon expands your horizons and ignites your adventurous spirit. Long-distance travel or higher learning opportunities present themselves. Your optimistic outlook attracts international connections.",
        "Lunar energy enhances your philosophical wisdom and teaching abilities. Your truth-seeking nature leads to profound spiritual insights. Share your knowledge generously, as others seek your guidance.",
        "Under this expansive moon, your freedom-loving nature finds new expression. Cultural exchanges and educational pursuits open exciting possibilities. Your enthusiasm for life inspires others to explore beyond their limits."
    ],
    capricorn: [
        "The full moon solidifies your ambitious plans and brings recognition for your hard work. Authority figures notice your dedication, leading to promotions or increased responsibilities. Your perseverance pays off handsomely.",
        "Lunar energy strengthens your natural leadership abilities and business acumen. Long-term investments mature successfully, and your practical approach to wealth building shows impressive results.",
        "Under this achievement-focused moon, your reputation grows stronger and more respected. Professional goals align perfectly with cosmic timing. Your disciplined approach creates lasting success and stability."
    ],
    aquarius: [
        "The full moon activates your innovative genius and humanitarian instincts. Technological breakthroughs or social causes capture your attention. Your unique perspective offers solutions to collective problems.",
        "Lunar energy amplifies your friendship magnetism and group leadership abilities. Like-minded individuals gather around your inspiring vision. Your progressive ideas find receptive audiences ready for change.",
        "Under this revolutionary moon, your independence and originality shine brightest. Scientific interests or humanitarian projects bring unexpected opportunities. Your eccentric charm attracts fascinating people."
    ],
    pisces: [
        "The full moon deepens your spiritual connection and psychic abilities. Dreams carry important messages, and your compassionate nature brings healing to others. Trust your intuitive guidance completely.",
        "Lunar energy enhances your artistic vision and emotional sensitivity. Creative projects flow with inspired ease, and your empathetic nature creates meaningful connections. Music and poetry speak to your soul.",
        "Under this mystical moon, your imagination knows no bounds. Spiritual practices and meditation bring profound insights. Your gentle nature and unconditional love create miracles in unexpected ways."
    ]
};

// Utility Functions
function getZodiacSign(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'aries';
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'taurus';
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'gemini';
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'cancer';
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'leo';
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'virgo';
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'libra';
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'scorpio';
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'sagittarius';
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'capricorn';
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'aquarius';
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'pisces';
    return 'aries'; // fallback
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Smooth Scrolling Function
function scrollToForm() {
    document.getElementById('predictions').scrollIntoView({
        behavior: 'smooth'
    });
}

// Enhanced Animation for Hero Elements
function initializeAnimations() {
    // Add sparkle effect to moon
    const moon = document.querySelector('.moon');
    if (moon) {
        setInterval(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                animation: sparkleEffect 2s ease-out forwards;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            moon.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }, 500);
    }

    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleEffect {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    document.head.appendChild(style);
}

// Form Handling
function initializeForm() {
    const form = document.getElementById('horoscopeForm');
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingSpinner = submitButton.querySelector('.loading-spinner');
    const predictionResult = document.getElementById('predictionResult');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const userName = formData.get('userName').trim();
        const birthDate = formData.get('birthDate');
        
        if (!userName || !birthDate) {
            alert('Please fill in all fields');
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        buttonText.style.opacity = '0.7';
        loadingSpinner.style.display = 'block';
        
        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate horoscope
        const result = generateHoroscope(userName, birthDate);
        displayResult(result);
        
        // Hide loading state
        submitButton.disabled = false;
        buttonText.style.opacity = '1';
        loadingSpinner.style.display = 'none';
        
        // Scroll to result
        setTimeout(() => {
            predictionResult.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
}

// Horoscope Generation
function generateHoroscope(name, birthDate) {
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    const zodiacKey = getZodiacSign(month, day);
    const zodiac = zodiacSigns[zodiacKey];
    
    // Generate personalized prediction based on name and date
    const nameNumber = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const birthNumber = day + month + year;
    const personalityIndex = (nameNumber + birthNumber) % horoscopePredictions[zodiacKey].length;
    
    const prediction = horoscopePredictions[zodiacKey][personalityIndex];
    
    // Generate lucky elements
    const luckyColor = getRandomItem(zodiac.colors);
    const luckyNumber = getRandomItem(zodiac.numbers);
    const bestDay = getRandomItem(zodiac.days);
    
    return {
        name,
        birthDate: formatDate(birthDate),
        zodiac: zodiac.name,
        zodiacIcon: zodiac.icon,
        element: zodiac.element,
        prediction,
        luckyColor,
        luckyNumber,
        bestDay
    };
}

// Display Result
function displayResult(result) {
    const predictionResult = document.getElementById('predictionResult');
    const zodiacIcon = predictionResult.querySelector('.zodiac-icon');
    
    // Update result content
    document.getElementById('resultName').textContent = result.name;
    document.getElementById('resultZodiac').textContent = `${result.zodiac} ${result.zodiacIcon}`;
    document.getElementById('resultBirthDate').textContent = result.birthDate;
    document.getElementById('predictionContent').textContent = result.prediction;
    document.getElementById('luckyColor').textContent = result.luckyColor;
    document.getElementById('luckyNumber').textContent = result.luckyNumber;
    document.getElementById('bestDay').textContent = result.bestDay;
    
    // Update zodiac icon
    zodiacIcon.textContent = result.zodiacIcon;
    
    // Show result with animation
    predictionResult.style.display = 'block';
    
    // Add floating particles effect
    addFloatingParticles();
}

// Add floating particles effect
function addFloatingParticles() {
    const container = document.querySelector('.prediction-result');
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: linear-gradient(45deg, #007aff, #5856d6);
                border-radius: 50%;
                pointer-events: none;
                animation: floatUp 3s ease-out forwards;
                left: ${Math.random() * 100}%;
                top: 100%;
                z-index: 1000;
            `;
            container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 3000);
        }, i * 200);
    }
    
    // Add float animation if not exists
    if (!document.querySelector('#floatAnimation')) {
        const style = document.createElement('style');
        style.id = 'floatAnimation';
        style.textContent = `
            @keyframes floatUp {
                0% { 
                    opacity: 1; 
                    transform: translateY(0) rotate(0deg); 
                }
                100% { 
                    opacity: 0; 
                    transform: translateY(-100px) rotate(360deg); 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Share Reading Function
function shareReading() {
    const name = document.getElementById('resultName').textContent;
    const zodiac = document.getElementById('resultZodiac').textContent;
    const prediction = document.getElementById('predictionContent').textContent;
    
    const shareText = `🌕 My AI Full Moon Horoscope 🌕\n\nName: ${name}\nZodiac: ${zodiac}\n\n"${prediction.substring(0, 100)}..."\n\nGet your free reading at AI Full Moon Horoscope Predictions! ✨`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My AI Full Moon Horoscope',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Your horoscope has been copied to clipboard! Share it with your friends! 🌟');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Your horoscope has been copied to clipboard! Share it with your friends! 🌟');
        });
    }
}

// Parallax Effect for Hero Section
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.moon, .stars');
        
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('moon') ? 0.5 : 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Navbar Scroll Effect
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.85)';
        }
    });
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and other elements
    const animatedElements = document.querySelectorAll('.feature-card, .about-text, .cosmic-circle');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    initializeAnimations();
    initializeParallax();
    initializeNavbar();
    initializeScrollAnimations();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('🌕 AI Full Moon Horoscope Predictions - Initialized Successfully! ✨');
});

// Add some cosmic dust effect on mouse move
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) { // Only occasionally create dust
        const dust = document.createElement('div');
        dust.style.cssText = `
            position: fixed;
            pointer-events: none;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: dustFade 2s ease-out forwards;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            z-index: 1000;
        `;
        document.body.appendChild(dust);
        
        setTimeout(() => dust.remove(), 2000);
    }
});

// Add dust fade animation
const dustStyle = document.createElement('style');
dustStyle.textContent = `
    @keyframes dustFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(dustStyle); 