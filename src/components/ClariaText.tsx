type ClariaTextProps = {
  children: string
}

export function ClariaText({ children }: ClariaTextProps) {
  const parts = children.split(/(Claria)/g)

  return (
    <>
      {parts.map((part, index) =>
        part === 'Claria' ? (
          <span key={index} className="font-bold">
            Claria
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
