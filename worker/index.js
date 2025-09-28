export default {
  async fetch(request, env, ctx) {
    return env.ASSETS
      ? env.ASSETS.fetch(request)
      : new Response("Assets binding missing", { status: 500 });
  },
};
