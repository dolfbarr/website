import rss from '@astrojs/rss'
import { META } from '@utils/data'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async (context) => {
  const notes = await getCollection('notes')
  return await rss({
    title: `${META.title} — Notes`,
    description: META.description,
    site: context.site?.toString() ?? META.siteUrl,
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: new Date(note.data.date),
      description: note.data.description ?? '',
      link: `/notes/${note.slug}/`,
    })),
    customData: '<language>en-us</language>',
  })
}
