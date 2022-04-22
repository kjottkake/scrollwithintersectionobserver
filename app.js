const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        //if entry is visible, then take it away
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 1
    // console.log(entries)
})

cards.forEach(card =>{
    observer.observe(card)
})