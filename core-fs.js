const fs = require('fs').promises;

async function demo() {
    const filename = './data.txt';
    await fs.writeFile(filename, "Hello from Node fs\n", { encoding:'utf8'});
    const content = await  fs.readFile(filename, 'utf8');
    console.log('File content:', content);    
}
demo().catch(console.error)