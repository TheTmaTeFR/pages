const fs = require('fs');
const path = require('path');

const blogDir = './assets/blog/';
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
const articles = files.map(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const metadataMatch = content.match(/---([\s\S]*?)---/);
  const metadata = metadataMatch ? metadataMatch[1] : '';
  const title = metadata.match(/title: "([^"]+)"/)?.[1] || file.replace('.md', '');
  const date = metadata.match(/date: "([^"]+)"/)?.[1] || '';
  const description = metadata.match(/description: "([^"]+)"/)?.[1] || '';
  return {
    slug: file.replace('.md', ''),
    title,
    date,
    description,
  };
});

fs.writeFileSync('./assets/blog/blog-list.json', JSON.stringify(articles, null, 2));
console.log('blog-list.json généré !');