// Smooth scroll functionality
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Detect current section for header styling
export const getCurrentSection = () => {
  const sections = document.querySelectorAll('section')
  const scrollPosition = window.scrollY + 100 // Offset for header height
  
  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      return section.id || section.className
    }
  }
  return 'hero' // Default to hero
}

// Check if current section has dark background
export const isDarkSection = () => {
  const currentSection = getCurrentSection()
  const darkSections = ['hero-section', 'section--gradient']
  
  const section = document.querySelector(`#${currentSection}`) || 
                  document.querySelector(`.${currentSection}`)
  
  if (section) {
    return section.classList.contains('section--gradient') || 
           section.classList.contains('hero-section')
  }
  
  return window.scrollY < 100 // Dark if at top (hero)
}

// Animate elements on scroll
export const initializeScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, observerOptions)

  // Observe all elements with hover-lift class
  document.querySelectorAll('.hover-lift').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
    observer.observe(el)
  })
}