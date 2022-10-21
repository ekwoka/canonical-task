import { h } from '../jsxFactory';
import { Article, getArticleDetails } from '../utils';

export const BlogCard = ({ article }: BlogCardProps): HTMLElement => {
  const { category, post_tag, topic, group } = getArticleDetails(article);
  return (
    <div class="col-4 col-medium-2 p-card u-align--left p-card--highlighted p-card__post flex-column card-border__top">
      <p class="p-muted-heading">{group ?? topic ?? post_tag}</p>
      <hr class="u-sv1" />
      <div class="flex-column full-height">
        <img
          class="p-card__image"
          src={article.featured_media}
          width="16"
          height="9"
        />
        <a href={article.link}>
          <h2 class="p-heading--3 weight-base">{article.title.rendered}</h2>
        </a>
        <p>
          <em>
            By{' '}
            <a href={article._embedded.author[0].link}>
              {article._embedded.author[0].name}
            </a>{' '}
            on{' '}
            {new Date(article.date_gmt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </em>
        </p>
      </div>
      <hr class="u-sv1" />
      <span>{category}</span>
    </div>
  );
};

type BlogCardProps = {
  article: Article;
};
