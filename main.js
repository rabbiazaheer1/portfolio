// Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 1000);
    }, 3000);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/923099511155?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    alert('Opening WhatsApp to send your message directly! Please send the message to complete your inquiry.');
    
    // Reset form
    this.reset();
});

// Section title animation
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        const title = section.querySelector('.section-title');
        if(title) {
            title.style.animation = 'none';
            void title.offsetWidth; // Trigger reflow
            title.style.animation = 'underline 0.5s forwards';
        }
    });
});

// Fix images loading
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if(img.complete && img.naturalHeight === 0) {
            // Fallback images
            const fallbackImages = [
                'https://wallpapers.com/c516d4a7-d731-4b5c-a90e-e9a971e2bfde',
                'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
                'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
            ];
            const randomImage = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
            img.src = randomImage;
        }
    });
});