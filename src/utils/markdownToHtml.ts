import remark from 'remark'
import remarkHtml from 'remark-html'

async function markdownToHtml(context: string) {
  const data = await remark().use(remarkHtml).process(context)

  return String(data.contents)
}

export default markdownToHtml
