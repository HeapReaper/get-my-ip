console.debug('Starting...');

Bun.serve({
    port: 3132,
    async fetch(request, server) {
        console.log('I got requested...');

        const address = server.requestIP(request)

        const ip: string = address ? address.address : 'Oops, i did an poo poo in ma pants!';

        let html: string = await Bun.file('src/index.html').text();
        html = html.replace('{{IP}}', ip)

        return new Response(html, {
            headers: {
                'content-type': 'text/html',
            }
        });
    },
});
