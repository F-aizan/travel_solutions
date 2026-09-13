import { MetadataRoute } from "../../node_modules/next/types"


export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.royaljourneytourskashmir.com'
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}