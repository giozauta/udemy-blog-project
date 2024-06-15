import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use body-parser to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the home page
app.get("/", (req, res) => {
    const data = [
        {
            url:"/images/blogpic1.png",
            name:"The Girl from Ipanema",
            post:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to"
        },
        {
            url:"/images/blogpic2.webp",
            name:"The Mexico Diary, Day 1: Oaxaca",
            post:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to"
        },
        {
            url:"/images/blogpic3.webp",
            name:"Mykonos with Mr. & Mrs. Smith",
            post:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to"
        }
    ]
    res.render("index",{data:data});
});

// Start the server
app.listen(port, () => {
    console.log(`I am listening on port: ${port}`);
});
