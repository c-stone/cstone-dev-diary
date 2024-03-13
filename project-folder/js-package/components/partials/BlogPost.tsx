import '../../styles/fonts.css';
import '../../styles/tailwind.css';

import React from 'react';

function BlogPost() {
  return (
    <div className="flex flex-col items-center pb-24">
      <a
        href="/rsvp"
        className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest"
      >
        RSVP
      </a>
    </div>
  );
}

export default BlogPost;
