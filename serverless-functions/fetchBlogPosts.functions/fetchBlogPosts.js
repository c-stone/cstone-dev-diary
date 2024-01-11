const axios = require('axios');
//swap to fetch as node18 supported

exports.main = async (context, sendResponse) => {
  const { tags, search, after, limit } = context.params;
  const endpoint = 'https://api.hubapi.com/cms/v3/blogs/posts';
  const blogId = 149750025278;
  const contentGroupId = blogId ? blogId : 'default';

  async function fetchBlogPosts() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.dev_hs_token}`,
      },
      params: {
        contentGroupId__eq: contentGroupId,
        ...(tags && { tagId__in: tags.toString() }),
        ...(search && { name__icontains: search[0] }),
        ...(after && { after: after.toString() }),
        limit: limit.toString(),
      },
    };

    try {
      const response = await axios.get(endpoint, config);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  const data = await fetchBlogPosts();

  // sendResponse is a callback function you call to send your response.
  sendResponse({ body: data, statusCode: 200 });
};
