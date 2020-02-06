const url = new URL(process.argv[2]);

console.log(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);