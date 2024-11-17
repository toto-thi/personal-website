export function useSiteMetadata() {
    return {
        htmlAttrs: {
            lang: 'en'
          },
          title: "Thinakone Louangdy",
          meta: [
            { name: 'description', content: 'Thinakone Louangdy is a software engineer who specializes in building scalable platforms and services for real-world applications and is a pioneering data scientist who is dedicated to mastering data-driven insights and solutions.' },
            { name: 'keywords', content: 'Data Scientist, Software Engineer, Karaoke Singer' },
            { name: 'author', content: 'Thinakone Louangdy' },
            { property: 'og:title', content: 'Thinakone Louangdy' },
            { property: 'og:description', content: 'Thinakone Louangdy is a software engineer who specializes in building scalable platforms and services for real-world applications and is a pioneering data scientist who is dedicated to mastering data-driven insights and solutions.' },
            { property: 'og:image', content: '/og.png' },
            { property: 'og:url', content: 'https://thinakone.com' },
            { property: 'og:og:site_name', content: 'Thinakone Louangdy' },
            { property: 'og:type', content: 'website' },
          ],
          link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32x32.png' }, 
            { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/logo-48x48.png' }, 
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, 
            { rel: 'stylesheet', href: '/fonts/inter.css' },
          ],
    };
  }
