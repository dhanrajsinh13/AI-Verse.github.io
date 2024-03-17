document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const tools = document.querySelectorAll(".tool");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        
        tools.forEach(tool => {
            const toolName = tool.querySelector(".tooln").innerText.toLowerCase();
            if (toolName.includes(query)) {
                tool.style.display = "block";
            } else {
                tool.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const categoryLinks = document.querySelectorAll('.relative.mx-auto.mt-4.flex.w-full.flex-wrap.items-center.justify-center.gap-2.px-4 a');

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const category = link.textContent.trim(); // Get the text content of the clicked link
            searchInput.value = category; // Set the search input value to the category
            // Optionally, you can submit the form here
            // form.submit();
        });
    });
});