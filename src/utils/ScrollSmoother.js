export default function ScrollSm() {
    window.addEventListener("scroll", () => {
        document.documentElement.style.setProperty(
            "--scrollTop",
            ` ${Math.round(window.scrollY)}px`
        ); // Update method
    });
}
