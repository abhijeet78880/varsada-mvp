type Props ={
  children: React.ReactNode
}

export default function SafeArea({children}: Props) {
  return (
    <main className="overflow-x-hidden w-[100dvw] h-[100dvh]">
        <div className="mx-auto max-w-[1440px] overflow-x-hidden" >
          {children}
        </div>
    </main>
  )
}