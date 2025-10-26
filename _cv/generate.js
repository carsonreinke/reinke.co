import puppeteer from "puppeteer";

const readStdin = async () => {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
};

const run = async () => {
  const html = await readStdin();

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  // Load the HTML string directly
  await page.setContent(html, { waitUntil: "networkidle0" });

  // Generate PDF
  const pdf = await page.pdf({
    width: "8in",
    height: "10in",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  process.stdout.write(pdf); // pipe PDF to stdout
  await browser.close();
};

run();
