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
    margin: { top: "15mm", right: "15mm", bottom: "15mm", left: "15mm" }
  });

  process.stdout.write(pdf); // pipe PDF to stdout
  await browser.close();
};

run();
