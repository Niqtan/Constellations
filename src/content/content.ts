document.addEventListener("mousemove", (event: MouseEvent) => {
    createSparkle(event.clientX, event.clientY)

})


function createSparkle(x: number, y: number) {
    const sparkle = document.createElement("div")
    sparkle.style.left  = `${x}px`
    sparkle.style.top = `${y}px`
    sparkle.style.position = "fixed"
    sparkle.style.width ="8px"
    sparkle.style.height = "8px"
    sparkle.style.borderRadius = "100%"
    sparkle.style.pointerEvents = "none"
    sparkle.style.zIndex = "9999"
    sparkle.style.background = "radial-gradient(circle, #fff, #f0f)"
    document.body.appendChild(sparkle)

    setTimeout(() => {
    sparkle.style.opacity = "0"
    setTimeout(() => sparkle.remove(), 500) 
    }, 100)
}


document.addEventListener("click", (mouse_click: MouseEvent) => {
    explodeSparkles(mouse_click.clientX, mouse_click.clientY);
})

function explodeSparkles(x: number, y: number) {
    const burst = document.createElement("div")
    burst.className ="fixed pointer-events-none"
    burst.style.left = `${x}px`
    burst.style.left = `${y}px`
    burst.style.transform = "translate(-50%, -50%)"
    burst.style.zIndex = "9999"
    document.body.appendChild(burst)

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div")
        particle.style.position = "fixed"
        particle.style.width = "8px"
        particle.style.height = "8px"
        

        // Allow for random direction and distance

        const R = 60 // Number of pixels away from the center of the circle
        const distance = R * Math.sqrt(Math.random()) // Random radius with uniform distribution
        const angle = Math.random() * 2 * 3.14 // Random angle 

        // Convert to cartesian coordinates
        const dx = Math.cos(angle) * distance 
        const dy = Math.sin(angle) * distance


        requestAnimationFrame(() => {
            particle.style.transform = `translate(${dx}px, ${dy}px)`
        })
    }

    setTimeout(() => {
        burst.remove()
    }, 800)
}

