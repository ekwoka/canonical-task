export const getArticles = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    const articles = await response.json();
    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export type Article = {
  id: number;
  date_gmt: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: string;
  categories: number[];
  tags: number[];
  topic: number[];
  group: number[];
  _start_day: string;
  _start_month: string;
  _start_year: string;
  _embedded: {
    author: [
      {
        name: string;
        link: string;
      }
    ];
    'wp:term': WP_TERM[][];
  };
};

export type WP_TERM = {
  link: string;
  name: string;
  taxonomy: 'category' | 'post_tag' | 'topic' | 'group';
};
