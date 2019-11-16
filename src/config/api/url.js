const development = {
  url: {
    api: 'https://www.googleapis.com/blogger/v3',
    feed: 'https://nextcodepelajar.blogspot.com/feeds',
    asset: 'https://nextcodepelajar.blogspot.com',
    origin: 'https://nextcodepelajar.blogspot.com'
  },
  google: {
    apiKey: 'AIzaSyB2MpzH-Gq6fnWuUnoI2PH2sPMTkGIQ9b0',
    blogId: '5624631557745671504'
  }
};

const production = {
  url: {
    api: 'https://www.googleapis.com/blogger/v3',
    feed: 'https://www.codepelajar.com/feeds',
    asset: 'https://www.codepelajar.com',
    origin: 'https://www.codepelajar.com'
  },
  google: {
    apiKey: 'AIzaSyB2MpzH-Gq6fnWuUnoI2PH2sPMTkGIQ9b0',
    blogId: '3190947245348881579'
  }
};

export const config = development;

const baseUrl = {
  summary: `${config.url.feed}/posts/summary?alt=json`,
  postFeed: `${config.url.feed}/posts/default?alt=json`,
  post: `${config.url.api}/blogs/${config.google.blogId}/posts`,
  page: `${config.url.api}/blogs/${config.google.blogId}/pages`
};

export default baseUrl;
