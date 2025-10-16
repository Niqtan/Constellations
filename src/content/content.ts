document.addEventListener("mousemove", (event: MouseEvent) => {
    createSparkle(event.clientX, event.clientY)

})



function createSparkle(x: number, y: number) {
    const sparkle = document.createElement("div")
    sparkle.style.left  = `${x}px`
    sparkle.style.top = `${y}px`
    sparkle.style.position = "fixed"
    sparkle.style.width ="3px"
    sparkle.style.height = "3px"
    sparkle.style.borderRadius = "50%"
    sparkle.style.pointerEvents = "none"
    sparkle.style.zIndex = "9999"
    sparkle.style.background = "white";
    sparkle.style.boxShadow = `
    0 0 6px 2px #E8F8FF,
    0 0 12px 4px #FF6FB5,
    0 0 20px 8px #7B2CBF

    `
    document.body.appendChild(sparkle)

    setTimeout(() => {
    sparkle.style.opacity = "0"
    setTimeout(() => sparkle.remove(), 500) 
    }, 100)
}


document.addEventListener("click", (mouse_click: MouseEvent) => {
    console.log("Click Detected: ", mouse_click.clientX, mouse_click.clientY)
    explodeSparkles(mouse_click.clientX, mouse_click.clientY);
})



function explodeSparkles(x: number, y: number) {
    const burst = document.createElement("div")
    burst.style.position = "fixed"
    burst.style.pointerEvents = "none"
    burst.style.left = `${x}px`
    burst.style.top = `${y}px`
    burst.style.transform = "translate(-50%, -50%)"
    burst.style.zIndex = "9999"
    burst.style.borderRadius = "100%"
    burst.style.background = "radial-gradient(circle, #fff, #f0f)"
    document.body.appendChild(burst)

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div")
        particle.style.position = "absolute"
        particle.style.width = "8px"
        particle.style.height = "8px"
        particle.style.borderRadius = "50%"
        particle.style.boxShadow = `
        0 0 6px 2px #E8F8FF,
        0 0 12px 4px #FF6FB5,
        0 0 20px 8px #7B2CBF

        `
        particle.style.opacity = "1"
        particle.style.transform = "translate(0px, 0px)"

        burst.appendChild(particle)

        // Allow for random direction and distance

        const R = 60 // Number of pixels away from the center of the circle
        const distance = R * Math.sqrt(Math.random()) // Random radius with uniform distribution
        const angle = Math.random() * 2 * Math.PI // Random angle 

        // Convert to cartesian coordinates
        const dx = Math.cos(angle) * distance 
        const dy = Math.sin(angle) * distance
 
        // When clicked, burst out
        requestAnimationFrame(() => {
            particle.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out"
            particle.style.transform = `translate(${dx}px, ${dy}px)`
            particle.style.opacity = "0"
        })
    }

    setTimeout(() => {
        burst.remove()
    }, 800)
}

