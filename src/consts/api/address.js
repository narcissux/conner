// api请求地址
// const requestURL = `http://127.0.0.1:8000`
const requestURL = `http://121.4.121.166/:8000`;

const requestAPI = {
  blog: {
    list: () => `article/list`,
    retrieve: uuid => `article/${uuid}/`,
    create: () => `article`,
    destroy: uuid => `article/${uuid}/`,
    update: () => `article`
  }
};

export { requestURL, requestAPI };
