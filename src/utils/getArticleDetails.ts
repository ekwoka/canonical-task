import { Article, WP_TERM } from './getArticles';

export const getArticleDetails = (
  article: Article
): Record<WP_TERM['taxonomy'], string> =>
  article._embedded['wp:term'].reduce(
    (acc, next) =>
      Object.assign(
        acc,
        next.reduce((acc, next) => {
          acc[next.taxonomy] = next.name;
          return acc;
        }, {} as Record<string, string>)
      ),
    {} as Record<string, string>
  ) as Record<WP_TERM['taxonomy'], string>;
