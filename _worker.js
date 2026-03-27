export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // If requesting root, serve index.html
    if (pathname === '/') {
      return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
    }

    // If requesting a directory (ends with /), serve index.html from that directory
    if (pathname.endsWith('/') && pathname !== '/') {
      return env.ASSETS.fetch(new Request(new URL(pathname + 'index.html', url), request));
    }

    // Try to serve the requested file
    let response = await env.ASSETS.fetch(request);

    // If 404 and no file extension, try adding .html
    if (response.status === 404 && !pathname.includes('.')) {
      response = await env.ASSETS.fetch(new Request(new URL(pathname + '.html', url), request));
    }

    return response;
  }
};
