const WORDS_PER_MINUTE = 200

export const getReadingTime = (
  content: string | undefined | null,
  wordsPerMinute = WORDS_PER_MINUTE,
): string => {
  if (!content || typeof content !== 'string') {
    return '1 min read'
  }

  // Strip common markdown elements and tags
  const cleanText = content
    .replace(/<[^>]*>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*`_~>[\]()]/g, '')
    .trim()

  const words = cleanText.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))

  return `${minutes} min read`
}
