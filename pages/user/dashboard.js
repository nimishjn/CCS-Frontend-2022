import Link from "next/link";


const dashboard = () => {

  return (
    <>
      <p>This is a protected</p>
      <Link href="/logout" passHref>
        <button className="cursor-pointer transition text-md lg:text-xl ease-linear py-1 lg:py-3 px-2 lg:px-5 rounded text-black font-semibold bg-peach hover:bg-transparent hover:text-peach border-2 border-peach">
          LOGOUT
        </button>
      </Link>
    </>
  )
};

export default dashboard;

export async function getServerSideProps({ query }) {
  return { props: {} }
}