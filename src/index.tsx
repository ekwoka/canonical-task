import { h } from './jsxFactory';
import { BlogList } from './components/BlogList';
import { readFile, writeFile } from 'node:fs/promises';
import { getArticles } from './utils/getArticles';

const init = async (): Promise<void> => {
  const articles = await getArticles();
  const content = (<BlogList articles={articles} />).outerHTML;
  const index = await readFile('./src/static/index.html', 'utf8');
  await writeFile(
    './dist/index.html',
    index.replace('{{ content_for_body }}', content)
  );
};

init();
