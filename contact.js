// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                category: document.getElementById('category').value,
                message: document.getElementById('message').value
            };
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
});

function showSuccessMessage() {
    // Create success message element if it doesn't exist
    let successMsg = document.querySelector('.success-message');
    
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Thank you for your message!</strong>
            <p>We'll get back to you within 24 hours.</p>
        `;
        
        const formSection = document.querySelector('.contact-form-section');
        formSection.insertBefore(successMsg, formSection.firstChild);
    }
    
    // Show message
    successMsg.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
    
    // Scroll to top of form
    document.querySelector('.contact-form-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}