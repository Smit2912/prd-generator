import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

type RichTextProps = {
  content?: string;
};

export default function RichText({ content }: RichTextProps) {
  if (!content) {
    return null;
  }

  return (
    <div className='prose prose-invert max-w-none prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white prose-headings:text-white'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
