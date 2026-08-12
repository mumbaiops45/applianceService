// components/ui/SectionTitle.jsx

export function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  // Heading levels are configurable so each page keeps a valid h1 → h2 → h3 outline.
  tagAs: TagWrapper = 'h2',
  titleAs: TitleWrapper = 'h3',
}) {
  const isCenter = align === 'center';

  const splitTitle = (value, highlightText) => {
    if (highlightText && value.includes(highlightText)) {
      const index = value.indexOf(highlightText);
      return [value.slice(0, index), highlightText, value.slice(index + highlightText.length)];
    }
    const words = value.split(' ');
    if (words.length > 1) {
      return [words.slice(0, -1).join(' '), words.at(-1), ''];
    }
    return [value, '', ''];
  };

  const [beforeText, accentText, afterText] = splitTitle(title, highlight);

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'mx-auto max-w-2xl text-center' : 'text-left'}`}>
      {tag && (
        <TagWrapper className={`mb-4 inline-flex items-center gap-2 ${isCenter ? '' : 'justify-start'}`}>
          <span className="h-[2px] w-6 bg-[#E0293D]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#B81F30]">{tag}</span>
          {isCenter && <span className="h-[2px] w-6 bg-[#E0293D]" />}
        </TagWrapper>
      )}

      <TitleWrapper className="relative text-3xl font-bold text-[#10202E] md:text-4xl">
        {accentText ? (
          <>
            <span className="text-[#10202E]">{beforeText} </span>
            <span className="text-[#E0293D]">{accentText}</span>
            <span className="text-[#10202E]">{afterText}</span>
          </>
        ) : (
          title
        )}
      </TitleWrapper>

      {/* Decorative underline */}
      <div className="mt-3 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#E0293D] via-[#ff7b88] to-[#0B1A2E] shadow-sm" />
      </div>

      {subtitle && <p className="mt-4 text-lg leading-relaxed text-[#55636C]">{subtitle}</p>}
    </div>
  );
}