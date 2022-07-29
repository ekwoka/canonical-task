import { h } from '../jsxFactory';
import { BlogCard } from './BlogCard';

export const BlogList = ({ articles }: BlogListProps): HTMLElement => (
  <div class="u-align--center u-vertically-center min-h-screen">
    <div class="grid">
      <div class="row">
        {articles.map((article) => (
          <BlogCard article={article} />
        ))}
      </div>
    </div>
  </div>
);

type BlogListProps = {
  articles: any[];
};
