import '../../styles/fonts.css';
import '../../styles/tailwind.css';

import headshot from '../../assets/photos/chris-stone-headshot.png';

import React from 'react';

const gallery = Object.values(
  import.meta.glob('../assets/photos/', { eager: true, as: 'url' }),
);

type Post = {
  name: string;
  post_body: string | null;
  post_summary: string | null;
  slug: string;
  url: string;
  updated: number;
  author_name: string;
};

type DataQueryResult = {};

type Prop = {
  posts: Post[];
  dataQueryResult: DataQueryResult;
};

function BlogListing(props: Prop) {
  function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  function stripTags(stringWithTags) {
    return stringWithTags.replace(/<\/?[^>]+>/gi, '');
  }

  function createExcerpt(excerptString, maxLength) {
    const excerptWithoutTags = stripTags(excerptString);
    const showEllipsis = excerptWithoutTags.length > maxLength;

    return showEllipsis
      ? `${excerptWithoutTags.substring(0, maxLength)}...`
      : excerptWithoutTags;
  }

  return (
    <div className="bg-gray-950 text-white font-serif h-screen">
      <div className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <a className="h-6 text-2xl font-semibold" href="/">
            Cstone's Dev Diary
          </a>
          <span className="relative top-[4px] italic">
            by{' '}
            <a href="https://www.cstone.io/">
              <img
                className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                src={headshot}
              ></img>
            </a>
          </span>
        </header>
        <main>
          <div className="relative -top-[10px] flex flex-col gap-8">
            {props.posts.map((post) => (
              <a
                className="block py-4 hover:scale-[1.005] scale-100 active:scale-100"
                style={{
                  opacity: 1,
                  transition:
                    'transform 0.2s ease-in-out, opacity 0.2s 0.4s linear',
                }}
                href={post.slug}
              >
                <article key={post.slug}>
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time>{formatDate(post.updated)}</time>
                    </dd>
                  </dl>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    {post.name}
                  </h2>
                  <p className="mt-1">
                    {createExcerpt(post.post_summary, 200)}
                  </p>
                </article>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlogListing;
