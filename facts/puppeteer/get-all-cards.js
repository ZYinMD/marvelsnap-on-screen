import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({ channel: "chrome", headless: false });
