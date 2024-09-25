import Link from "next/link"

export const metadata={
    title : "List Users"
}

const ListUsers=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return(
        <div>
            <h2 className="fedi">List Users</h2>
            {
                users.map((el,i,t)=>
                <div key={el.id}>
                    <Link href={`/Users/${el.id}`}><h2>{el.name}</h2></Link>
                </div>
            )
            }
            <Link href='/'><button>Home</button></Link>
        </div>
    )
}

export default ListUsers