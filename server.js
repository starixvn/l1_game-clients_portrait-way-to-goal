const express = require("express");
const compression = require("compression");
const path = require("path");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 7456;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "preview-template"));

// Enable compression middleware
app.use(compression());

// Set cache headers for static assets
app.use(
    express.static(path.join(__dirname, "src"), {
        maxAge: "1d", // Cache for 1 day
        etag: true,
        lastModified: true,
        setHeaders: (res, path) => {
            // Set CORS headers for all static assets
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");

            // Set longer cache for JS/CSS files
            if (path.endsWith(".js") || path.endsWith(".css")) {
                res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 year
            }
            // Set shorter cache for HTML files
            if (path.endsWith(".html") || path.endsWith(".ejs")) {
                res.setHeader("Cache-Control", "public, max-age=3600"); // 1 hour
            }
        },
    })
);

// Serve the main application
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600"); // Cache for 1 hour
    res.render("index", {
        title: "Cocos Creator - src",
        tip_sceneIsEmpty: "Scene is empty",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Compression enabled for better performance");
});
