console.debug('Starting...');

Bun.serve({
    routes: undefined,
    port: 3132,
    async fetch(request, server) {
        console.log('I got requested...');

        const forwarded = request.headers.get('x-forwarded-for');
        // @ts-ignore
        const ip = forwarded?.split(',')[0].trim() ?? server.requestIP(request)?.address ?? 'Unknown';

        let html: string = await Bun.file('src/index.html').text();
        html = html.replace('{{IP}}', ip)

        return new Response(html, {
            headers: {
                'content-type': 'text/html',
            }
        });
    }
});
