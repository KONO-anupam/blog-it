//toggle dropdown search
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden);
   
});



//  working search bar
const blogs = [
    {
        title: "Shortcomings in the project",
        description: "Problems unresolved in the project...",
        link: "blogs/random.html",
    },
    {
        title: "Learn HTML,CSS and JavaScript",
        description: "Get to Know How I learnt the things required to make this site...",
        link: "blogs/learning.html",
    },
    {
        title: "Learnings from this project",
        description: "What I learnt while making this project...",
        link: "blogs/learnings.html",
    },
    {
        title: "Expirence at NIT Rkl",
        description: "My experience in this college has been...",
        link: "blogs/experience.html",
    },
    {
        title: "Favourite Shows and Films",
        description: "When it comes to pop culture, my favorite films and TV shows are...",
        link: "blogs/experience.html",
    },
];

// function to display blogs
const displayBlogs = (filteredBlogs) => {
    const blogContainer = document.getElementById("blogContainer");
    blogContainer.innerHTML = ""; 

    if (filteredBlogs.length === 0) {
        blogContainer.classList.add("hidden"); 
        return;
    }

    blogContainer.classList.remove("hidden"); 

    filteredBlogs.forEach((blog) => {
        const blogCard = document.createElement("article");
        blogCard.classList.add("blog-card");

        blogCard.innerHTML = `
<h3 class="blog-title"><a href="${blog.link}">${blog.title}</a></h2>
<p class="blog-description">${blog.description}</p>
`;

        blogContainer.appendChild(blogCard);
    });
};
// search functionality
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (query.trim() === "") {  
        document.getElementById("blogContainer").classList.add("hidden");
        return;
    }
    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query)
    );

    displayBlogs(filteredBlogs);
});