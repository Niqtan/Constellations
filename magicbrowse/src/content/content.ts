document.addEventListener("mousemove", (callback) => {
    const sparkle = document.createElement("div")
    sparkle.className = "absolute w-8 h-8 bg-[radial-gradient(circle, #fff, #f0f)] rounded-full pointer-events-none z-[9999]"
    sparkle.style.left  = callback.pageX + "px"
    sparkle.style.right = callback.pageY + "px"
    document.body.appendChild(sparkle)

    setTimeout(() => sparkle.remove(), 500)
})