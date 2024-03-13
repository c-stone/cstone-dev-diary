import '../../styles/fonts.css';
import '../../styles/tailwind.css';

import headshot from '../../assets/photos/chris-stone-headshot.png';

import React from 'react';

function BlogPost(props: { postBody: string }) {
  return (
    <div className="bg-gray-950 text-white font-serif h-screen">
      <div className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <a className="h-6 text-2xl font-semibold" href="/">
            CStone's Dev Diary
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
          <article>
            {props.postBody}
            <hr />
          </article>
        </main>
      </div>
    </div>
  );
}

export default BlogPost;
