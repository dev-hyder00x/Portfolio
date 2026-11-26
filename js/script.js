const nav = document.querySelector('nav[aria-label="Main navigation"]');

if (nav) {
    const toggle = nav.querySelector(".nav-toggle");

    if (toggle && nav.querySelector(".nav-links")) {
        nav.classList.add("has-toggle");

        const setMenuOpen = (isOpen) => {
            nav.classList.toggle("menu-open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        };

        toggle.addEventListener("click", () => {
            setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        nav.addEventListener("click", (event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                setMenuOpen(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setMenuOpen(false);
                toggle.focus();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 600 && toggle.getAttribute("aria-expanded") === "true") {
                setMenuOpen(false);
            }
        });
    }
}