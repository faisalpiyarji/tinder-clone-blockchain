import Header from "../components/Header"

const style = {
  wrapper: 'h-screen w-sreen flex flex-col bg-[#222229]',
  cardsContainer: 'flex flex-col items-center justify-center',
}


export default function Home() {
  return (
      <div className={style.warapper}>
        < Header />
        <div className={style.cardsContainer}>
          {/* < Card/> */}
        </div>
      </div>
  )
}
