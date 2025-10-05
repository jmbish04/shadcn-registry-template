export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return Response.json({ error: "Assets binding missing" }, { status: 500 });
    }

    return env.ASSETS.fetch(request);
  },
};
