const btn = document.querySelector(".mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// 保存されたテーマがあるか確認、なければシステム設定に従う
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
} else if (currentTheme === "light") {
    document.body.classList.remove("dark-mode");
} else if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
}

// ボタンクリック時のイベント
btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    // 状態を保存
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});
