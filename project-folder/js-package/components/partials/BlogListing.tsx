import '../../styles/fonts.css';
import '../../styles/tailwind.css';

import React from 'react';

type Post = {
  name: string;
  post_body: string | null;
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
  return (
    <div className="flex flex-col items-center pb-24">
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}

export default BlogListing;
